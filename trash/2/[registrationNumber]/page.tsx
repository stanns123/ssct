"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Type for JobMelaBeneficiary
interface Beneficiary {
  [key: string]: unknown;
// Remove misplaced type BeneficiaryWithIndex
  registration_number: string;
  full_name: string;
  dob: string;
  gender: string;
  mobile_number: string;
  email_address: string;
  current_address: string;
  pincode: string;
  highest_qualification: string;
  other_qualification: string;
  year_of_passing: string;
  expected_year_of_completion: string;
  overall_percentage: string;
  tenth_board: string;
  twelfth_board: string;
  education_stream: string;
  other_stream: string;
  areas_of_interest: string;
  specific_skills: string;
  currently_enrolled: string;
  completed_skill_program: string;
  preferred_sectors: string;
  preferred_location: string;
  open_to_out_of_state: boolean;
  payment_confired: boolean;
  payment_waiver_reason: string;
  status: boolean;
  prior_experience: string;
  has_resume: boolean;
  additional_info: string;
  has_iti: boolean;
  has_diploma: boolean;
  other_iti_trade: string;
  other_diploma_stream: string;
  created_at: string;
  // Experience/verification fields
  has_experience?: boolean;
  currently_working?: boolean;
  experience_company_name?: string;
  experience_years?: string;
  current_company_name?: string;
  current_year_of_joining?: string;
  has_appointment_letter?: boolean;
  has_salary_slip?: boolean;
  has_relieving_letter?: boolean;
  all_data_verified?: boolean;
}

const BackendUrl = process.env.VITE_BACKEND_URL;

const JobMelaView = () => {
  const { registrationNumber } = useParams<{ registrationNumber: string }>();
  const router = useRouter();
  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentReceived, setPaymentReceived] = useState<'yes' | 'no' | ''>('');
  const [waiverReason, setWaiverReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Experience/verification state
  const [editExperience, setEditExperience] = useState(false);
  const [experienceFields, setExperienceFields] = useState({
    prior_experience: '',
    has_experience: false,
    currently_working: false,
    experience_company_name: '',
    experience_years: '',
    current_company_name: '',
    current_year_of_joining: '',
    has_appointment_letter: false,
    has_salary_slip: false,
    has_relieving_letter: false,
    all_data_verified: false,
  });

  useEffect(() => {
    fetchBeneficiaryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationNumber]);

  useEffect(() => {
    if (beneficiary) {
      setExperienceFields({
        prior_experience: beneficiary.prior_experience || '',
        has_experience: beneficiary.has_experience || false,
        currently_working: beneficiary.currently_working || false,
        experience_company_name: beneficiary.experience_company_name || '',
        experience_years: beneficiary.experience_years || '',
        current_company_name: beneficiary.current_company_name || '',
        current_year_of_joining: beneficiary.current_year_of_joining || '',
        has_appointment_letter: beneficiary.has_appointment_letter || false,
        has_salary_slip: beneficiary.has_salary_slip || false,
        has_relieving_letter: beneficiary.has_relieving_letter || false,
        all_data_verified: beneficiary.all_data_verified || false,
      });
    }
  }, [beneficiary]);
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setExperienceFields((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const fetchBeneficiaryDetails = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/jobmela/beneficiary/${registrationNumber}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch beneficiary details');
      }
      const data = await response.json();
      setBeneficiary(data);
    } catch (err) {
      console.error('Error fetching beneficiary details:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  // Updated helper function to check if a value is truthy and not empty
  const hasValue = (value: unknown): boolean => {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'boolean') {
      return value === true;
    }
    if (typeof value === 'string') {
      if (value === "0") {
        return false;
      }
      if (value.trim() === '') {
        return false;
      }
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          const arr = JSON.parse(value);
          return Array.isArray(arr) && arr.length > 0;
        } catch {
          return false;
        }
      }
      return true;
    }
    if (typeof value === 'number') {
      return value !== 0;
    }
    return false;
  };

  const hasData = (obj: { [key: string]: unknown }, keys: string[]): boolean => {
    return keys.some(key => hasValue(obj[key]));
  };

  const formatArrayString = (str: string): string => {
    try {
      const arr = JSON.parse(str);
      return Array.isArray(arr) ? arr.join(', ') : str;
    } catch {
      return str;
    }
  };


  // Save payment status and waiver reason
  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      // Save experience/verification fields
      await fetch(`/api/jobmela/bene/${registrationNumber}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...experienceFields,
          all_data_verified: experienceFields.all_data_verified,
        }),
      });

      // Save payment status
      if (paymentReceived === 'yes') {
        await fetch(`${BackendUrl}/jobMela/updatePayment.php`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authentication": "Token mysecretkey",
            "Accept": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            registration_number: registrationNumber,
            payment_confirmed: true
          })
        });
      } else if (paymentReceived === 'no') {
        if (!waiverReason.trim()) {
          alert('Please provide a reason for payment waiver');
          setIsSubmitting(false);
          return;
        }
        await fetch(`${BackendUrl}/jobMela/updatePayment.php`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authentication": "Token mysecretkey",
            "Accept": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            registration_number: registrationNumber,
            payment_confirmed: false,
            payment_waiver_reason: waiverReason
          })
        });
      }
      setEditExperience(false);
      fetchBeneficiaryDetails();
    } catch (err) {
      console.error('Error saving data:', err);
      alert('Failed to save data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.push('/dashboard/jobmela/find');
  };

  const handlePdfDownload = async () => {
    alert('Download PDF');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 py-8 px-8">
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-56" />
            </div>
          </div>
          <div className="px-8 py-6 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !beneficiary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Error Loading Data
          </h2>
          <p className="text-gray-600">
            {error || 'Beneficiary details could not be found'}
          </p>
        </div>
      </div>
    );
  }

  const isApproved = (status: string | boolean | number | undefined | null): boolean => {
    if (typeof status === 'string') {
      return status === "1";
    }
    if (typeof status === 'boolean') {
      return status === true;
    }
    if (typeof status === 'number') {
      return status === 1;
    }
    return false;
  };

  const itiTrades = {
    engineering: [
      { value: "electrician", label: "Electrician" },
      { value: "fitter", label: "Fitter" },
      { value: "mechanic_mv", label: "Mechanic (Motor Vehicle)" },
      { value: "draughtsman_civil", label: "Draughtsman (Civil)" },
      { value: "draughtsman_mech", label: "Draughtsman (Mechanical)" },
      { value: "turner", label: "Turner" },
      { value: "welder", label: "Welder" },
      { value: "plumber", label: "Plumber" },
      { value: "mechanic_diesel", label: "Mechanic Diesel" },
      { value: "electronics_mech", label: "Electronics Mechanic" },
      { value: "instrument_mech", label: "Instrument Mechanic" },
      { value: "machinist", label: "Machinist" },
      { value: "computer_hardware", label: "Computer Hardware & Network Maintenance" },
      { value: "foundryman", label: "Foundryman" },
      { value: "sheet_metal", label: "Sheet Metal Worker" },
      { value: "wireman", label: "Wireman" },
      { value: "radio_tv", label: "Radio & Television Mechanic" },
      { value: "rac_mech", label: "Refrigeration and Air Conditioning Mechanic" },
      { value: "surveyor", label: "Surveyor" },
      { value: "tool_die", label: "Tool & Die Maker" }
    ],
    nonEngineering: [
      { value: "copa", label: "Computer Operator and Programming Assistant (COPA)" },
      { value: "steno_eng", label: "Stenography (English)" },
      { value: "steno_hin", label: "Stenography (Hindi)" },
      { value: "dress_making", label: "Dress Making" },
      { value: "sewing_tech", label: "Sewing Technology" },
      { value: "cutting_sewing", label: "Cutting and Sewing" },
      { value: "commercial_art", label: "Commercial Art" },
      { value: "leather_goods", label: "Leather Goods Maker" },
      { value: "book_binder", label: "Book Binder" },
      { value: "hair_skin", label: "Hair & Skin Care" },
      { value: "fruit_veg", label: "Fruit and Vegetable Processing" }
    ],
    shortTerm: [
      { value: "wireman_st", label: "Wireman (6 months)" },
      { value: "housekeeping", label: "Housekeeping (6 months)" },
      { value: "data_entry", label: "Data Entry Operator (6 months)" }
    ]
  };

  const diplomaCourses = {
    engineering: [
      { value: "civil", label: "Civil Engineering" },
      { value: "mechanical", label: "Mechanical Engineering" },
      { value: "eee", label: "Electrical and Electronics Engineering" },
      { value: "ece", label: "Electronics and Communication Engineering" },
      { value: "cse", label: "Computer Science and Engineering" },
      { value: "chemical", label: "Chemical Engineering" },
      { value: "automobile", label: "Automobile Engineering" },
      { value: "metallurgy", label: "Metallurgical Engineering" },
      { value: "mining", label: "Mining Engineering" },
      { value: "architecture", label: "Architecture" },
      { value: "it", label: "Information Technology" },
      { value: "instrumentation", label: "Instrumentation Engineering" },
      { value: "agricultural", label: "Agricultural Engineering" }
    ],
    other: [
      { value: "pharmacy", label: "Pharmacy" },
      { value: "hotel_management", label: "Hotel Management and Catering Technology" },
      { value: "business_mgmt", label: "Business Management" },
      { value: "computer_apps", label: "Computer Applications" },
      { value: "fine_arts", label: "Fine Arts" },
      { value: "fashion_design", label: "Fashion Design" },
      { value: "animation", label: "Animation and Multimedia" },
      { value: "commercial_comp", label: "Commercial and Computer Practice" },
      { value: "ded", label: "Diploma in Education (D.Ed)" },
      { value: "deled", label: "Diploma in Elementary Education (D.El.Ed)" }
    ]
  };

  const qualificationLabels: { [key: string]: string } = {
    'Below 10th Grade': 'Below 10th Grade',
    '10th Grade (SSC)': '10th Grade (SSC)',
    'Pursuing_12th': 'Pursuing Intermediate',
    '12th Grade (Intermediate)': '12th Grade (Intermediate)',
    'Pursuing_Bachelors': 'Pursuing Bachelor\'s Degree',
    'Bachelors_Degree': 'Bachelor\'s Degree',
    'Pursuing_Masters': 'Pursuing Master\'s Degree',
    'Masters_Degree': 'Master\'s Degree',
    'Other': 'Other'
  };

  const boardLabels: { [key: string]: string } = {
    'BSEAP': 'Board of Secondary Education, Andhra Pradesh (BSEAP)',
    'APOSS': 'Andhra Pradesh Open School Society (APOSS)',
    'CBSE': 'Central Board of Secondary Education (CBSE)',
    'CISCE': 'Council for the Indian School Certificate Examinations (CISCE)',
    'BIEAP': 'Board of Intermediate Education, Andhra Pradesh (BIEAP)',
    'NIOS': 'National Institute of Open Schooling (NIOS)',
    'Other': 'Other'
  };

  const intermediateStreamLabels: { [key: string]: string } = {
    'PCM': 'Science - Physics, Chemistry, Mathematics',
    'PCB': 'Science - Physics, Chemistry, Biology',
    'PCMB': 'Science - Physics, Chemistry, Mathematics, Biology',
    'PCC': 'Science - Physics, Chemistry with Computer Science',
    'CBE': 'Commerce - Accountancy, Business Studies, Economics',
    'ECC': 'Commerce - Economics, Commerce, Civics',
    'ECM': 'Commerce - Economics, Commerce, Mathematics',
    'CBL': 'Commerce - Accountancy, Commerce with Business Law',
    'HEC': 'Arts - History, Economics, Civics',
    'HPG': 'Arts - History, Political Science, Geography',
    'HSP': 'Arts - History, Sociology, Psychology',
    'HLL': 'Arts - History, Languages, Literature',
    'VET': 'Vocational - Engineering Technology',
    'VAG': 'Vocational - Agriculture',
    'VBC': 'Vocational - Business and Commerce',
    'VIT': 'Vocational - Information Technology',
    'VHT': 'Vocational - Hospitality and Tourism',
    'Other': 'Other'
  };

  const graduationStreamLabels: { [key: string]: string } = {
    'BA_Eng': 'BA - English Literature',
    'BA_His': 'BA - History',
    'BA_Eco': 'BA - Economics',
    'BA_Pol': 'BA - Political Science',
    'BA_Psy': 'BA - Psychology',
    'BA_Soc': 'BA - Sociology',
    'BSc_Math': 'BSc - Mathematics',
    'BSc_Phy': 'BSc - Physics',
    'BSc_Chem': 'BSc - Chemistry',
    'BSc_CS': 'BSc - Computer Science',
    'BSc_Bio': 'BSc - Biology',
    'BCom_Gen': 'BCom - General',
    'BCom_AF': 'BCom - Accounting and Finance',
    'BBA': 'BBA - Business Administration',
    'BTech_CSE': 'BTech - Computer Science and Engineering',
    'BTech_ECE': 'BTech - Electronics and Communication',
    'BTech_EEE': 'BTech - Electrical and Electronics',
    'BTech_Mech': 'BTech - Mechanical Engineering',
    'BTech_Civil': 'BTech - Civil Engineering',
    'MBBS': 'MBBS',
    'BDS': 'BDS - Dental Surgery',
    'BAMS': 'BAMS - Ayurvedic Medicine',
    'Other': 'Other'
  };

  const postGraduationStreamLabels: { [key: string]: string } = {
    'MA_Eng': 'MA - English',
    'MA_His': 'MA - History',
    'MA_Eco': 'MA - Economics',
    'MSW': 'Master of Social Work',
    'MSc_Math': 'MSc - Mathematics',
    'MSc_Phy': 'MSc - Physics',
    'MSc_Chem': 'MSc - Chemistry',
    'MSc_CS': 'MSc - Computer Science',
    'MCA': 'MCA - Computer Applications',
    'MCom': 'MCom - Commerce',
    'MBA_Gen': 'MBA - General',
    'MBA_Fin': 'MBA - Finance',
    'MBA_Mkt': 'MBA - Marketing',
    'MTech_CSE': 'MTech - Computer Science',
    'MTech_ECE': 'MTech - Electronics',
    'MTech_EEE': 'MTech - Electrical',
    'MD': 'MD - Medicine',
    'MS': 'MS - Surgery',
    'Other': 'Other'
  };

  const getITITradeLabel = (value: string): string => {
    for (const category of Object.values(itiTrades)) {
      const trade = category.find(t => t.value === value);
      if (trade) return trade.label;
    }
    return value;
  };

  const getDiplomaLabel = (value: string): string => {
    for (const category of Object.values(diplomaCourses)) {
      const course = category.find(c => c.value === value);
      if (course) return course.label;
    }
    return value;
  };

  const getStreamLabel = (value: string, qualification: string): string => {
    if (['12th Grade (Intermediate)', 'Pursuing_12th'].includes(qualification)) {
      return intermediateStreamLabels[value] || value;
    } else if (['Bachelors_Degree', 'Pursuing_Bachelors'].includes(qualification)) {
      return graduationStreamLabels[value] || value;
    } else if (['Masters_Degree', 'Pursuing_Masters'].includes(qualification)) {
      return postGraduationStreamLabels[value] || value;
    }
    return value;
  };

  // Helper to format date as '1st Jan, 2025'
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    // Get ordinal suffix
    const getOrdinal = (n: number) => {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    return `${day}${getOrdinal(day)} ${month}, ${year}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to List
          </Button>
          <Button
            onClick={handlePdfDownload}
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Download PDF
          </Button>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-200 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">{beneficiary.full_name}</h1>
            <div className="mt-3 text-sm text-gray-600 space-y-1">
              {hasValue(beneficiary.email_address) && (
                <div>📧 {beneficiary.email_address}</div>
              )}
              {hasValue(beneficiary.mobile_number) && (
                <div>📞 {beneficiary.mobile_number}</div>
              )}
              {hasValue(beneficiary.current_address) && (
                <div>📍 {beneficiary.current_address}{hasValue(beneficiary.pincode) && `, ${beneficiary.pincode}`}</div>
              )}
            </div>
          </div>

          {/* Resume Body */}
          <div className="px-8 py-6 space-y-6">
            {/* Personal Information */}
            {hasData(beneficiary as Beneficiary, ['dob', 'gender']) && (
              <ResumeSection title="Personal Information">
                <div className="space-y-2 text-left">
                  {hasValue(beneficiary.dob) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Date of Birth:</span>
                      <span className="text-gray-700">{formatDate(beneficiary.dob)}</span>
                    </div>
                  )}
                  {hasValue(beneficiary.gender) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Gender:</span>
                      <span className="text-gray-700">{beneficiary.gender}</span>
                    </div>
                  )}
                </div>
              </ResumeSection>
            )}
            {/* Profile Summary */}
            {hasValue(beneficiary.additional_info) && (
              <ResumeSection title="Profile">
                <p className="text-gray-700 text-left">{beneficiary.additional_info}</p>
              </ResumeSection>
            )}
            {/* Education */}
            {hasData(beneficiary as Beneficiary, ['highest_qualification', 'other_qualification', 'tenth_board', 'twelfth_board', 'education_stream']) && (
              <ResumeSection title="Education">
                <div className="space-y-3 text-left">
                  {hasValue(beneficiary.highest_qualification) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">{qualificationLabels[beneficiary.highest_qualification] || beneficiary.highest_qualification}</h4>
                      {hasValue(beneficiary.overall_percentage) && (
                        <p className="text-gray-600">Percentage: {beneficiary.overall_percentage}%</p>
                      )}
                      {hasValue(beneficiary.year_of_passing) && (
                        <p className="text-gray-600">Year of passing: {beneficiary.year_of_passing}</p>
                      )}
                      {hasValue(beneficiary.expected_year_of_completion) && (
                        <p className="text-gray-600">Expected Year of passing: {beneficiary.expected_year_of_completion}</p>
                      )}
                      {hasValue(beneficiary.education_stream) && (
                        <p className="text-gray-600">Stream: {getStreamLabel(beneficiary.education_stream, beneficiary.highest_qualification)}</p>
                      )}
                      {hasValue(beneficiary.other_stream) && (
                        <p className="text-gray-600">Other Stream: {getStreamLabel(beneficiary.other_stream, beneficiary.highest_qualification)}</p>
                      )}
                    </div>
                  )}
                  {hasValue(beneficiary.other_qualification) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Other Qualification - <span className="text-gray-600 font-light">{boardLabels[beneficiary.other_qualification] || beneficiary.other_qualification}</span> </h4>
                    </div>
                  )}
                  {hasValue(beneficiary.twelfth_board) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Class XII - {boardLabels[beneficiary.twelfth_board] || beneficiary.twelfth_board}</h4>
                    </div>
                  )}
                  {hasValue(beneficiary.tenth_board) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Class X - {boardLabels[beneficiary.tenth_board] || beneficiary.tenth_board}</h4>
                    </div>
                  )}
                </div>
              </ResumeSection>
            )}
            {/* Additional Qualifications */}
            {(hasValue(beneficiary.has_iti) || hasValue(beneficiary.has_diploma)) && (
              <ResumeSection title="Additional Qualifications">
                <div className="space-y-3 text-left">
                  {hasValue(beneficiary.has_iti) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">ITI</h4>
                      {hasValue(beneficiary.other_iti_trade) && (
                        <p className="text-gray-600">Trade: {getITITradeLabel(beneficiary.other_iti_trade)}</p>
                      )}
                    </div>
                  )}
                  {hasValue(beneficiary.has_diploma) && (
                    <div>
                      <h4 className="font-semibold text-gray-800">Diploma</h4>
                      {hasValue(beneficiary.other_diploma_stream) && (
                        <p className="text-gray-600">Stream: {getDiplomaLabel(beneficiary.other_diploma_stream)}</p>
                      )}
                    </div>
                  )}
                </div>
              </ResumeSection>
            )}
            {hasValue(beneficiary.currently_enrolled) && (
              <ResumeSection title="Work Experience">
                <p className="text-gray-700 text-left">{beneficiary.currently_enrolled}</p>
              </ResumeSection>
            )}
            {/* Skills */}
            {hasData(beneficiary as Beneficiary, ['specific_skills', 'areas_of_interest', 'completed_skill_program']) && (
              <ResumeSection title="Skills">
                <div className="space-y-2 text-left">
                  {hasValue(beneficiary.specific_skills) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Technical Skills:</span>
                      <span className="text-gray-700">{formatArrayString(beneficiary.specific_skills)}</span>
                    </div>
                  )}
                  {hasValue(beneficiary.areas_of_interest) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Areas of Interest:</span>
                      <span className="text-gray-700">{formatArrayString(beneficiary.areas_of_interest)}</span>
                    </div>
                  )}
                  {hasValue(beneficiary.completed_skill_program) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Completed Programs:</span>
                      <span className="text-gray-700">{formatArrayString(beneficiary.completed_skill_program)}</span>
                    </div>
                  )}
                </div>
              </ResumeSection>
            )}
            {/* Work Experience (Editable) */}
            <ResumeSection title="Work Experience">
              {/* If not editing, show data and edit button if any experience data exists */}
              {!editExperience ? (
                <div className="space-y-2">
                  {hasValue(beneficiary.prior_experience) && (
                    <div className="flex items-center">
                      <span className="w-40 font-semibold text-gray-700">Experience:</span>
                      <span className="text-gray-700 flex-1">{beneficiary.prior_experience}</span>
                    </div>
                  )}
                  {/* Show experience/verification fields if any are present */}
                  {(beneficiary.has_experience || beneficiary.currently_working || beneficiary.experience_company_name || beneficiary.experience_years || beneficiary.current_company_name || beneficiary.current_year_of_joining) && (
                    <div className="space-y-1">
                      {beneficiary.has_experience && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Has Experience:</span> <span>{String(beneficiary.has_experience)}</span></div>
                      )}
                      {beneficiary.experience_company_name && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Company Name:</span> <span>{beneficiary.experience_company_name}</span></div>
                      )}
                      {beneficiary.experience_years && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Years of Experience:</span> <span>{beneficiary.experience_years}</span></div>
                      )}
                      {beneficiary.currently_working && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Currently Working:</span> <span>{String(beneficiary.currently_working)}</span></div>
                      )}
                      {beneficiary.current_company_name && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Current Company:</span> <span>{beneficiary.current_company_name}</span></div>
                      )}
                      {beneficiary.current_year_of_joining && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Year of Joining:</span> <span>{beneficiary.current_year_of_joining}</span></div>
                      )}
                      {beneficiary.has_appointment_letter && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Appointment Letter:</span> <span>{String(beneficiary.has_appointment_letter)}</span></div>
                      )}
                      {beneficiary.has_salary_slip && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Salary Slip:</span> <span>{String(beneficiary.has_salary_slip)}</span></div>
                      )}
                      {beneficiary.has_relieving_letter && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">Relieving Letter:</span> <span>{String(beneficiary.has_relieving_letter)}</span></div>
                      )}
                      {beneficiary.all_data_verified && (
                        <div className="flex items-center"><span className="w-40 font-semibold text-gray-700">All Data Verified:</span> <span>{String(beneficiary.all_data_verified)}</span></div>
                      )}
                    </div>
                  )}
                  {/* Edit button */}
                  <Button variant="outline" className="mt-2" onClick={() => setEditExperience(true)}>Edit Experience</Button>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={e => { e.preventDefault(); handleSave(); }}>
                  <div className="space-y-2">
                    <Label htmlFor="prior_experience">Experience (Description)</Label>
                    <Input
                      id="prior_experience"
                      name="prior_experience"
                      value={experienceFields.prior_experience}
                      onChange={handleExperienceChange}
                      placeholder="Describe prior experience"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="has_experience"
                        name="has_experience"
                        checked={experienceFields.has_experience}
                        onChange={handleExperienceChange}
                        className="mr-2"
                      />
                      <Label htmlFor="has_experience">Have Experience</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="currently_working"
                        name="currently_working"
                        checked={experienceFields.currently_working}
                        onChange={handleExperienceChange}
                        className="mr-2"
                      />
                      <Label htmlFor="currently_working">Currently Working</Label>
                    </div>
                  </div>
                  {/* If has_experience, show company and years */}
                  {experienceFields.has_experience && !experienceFields.currently_working && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="experience_company_name">Company/Organisation Name</Label>
                        <Input
                          id="experience_company_name"
                          name="experience_company_name"
                          value={experienceFields.experience_company_name}
                          onChange={handleExperienceChange}
                          placeholder="Company/Organisation Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience_years">Years of Experience</Label>
                        <Input
                          id="experience_years"
                          name="experience_years"
                          value={experienceFields.experience_years}
                          onChange={handleExperienceChange}
                          placeholder="Years of Experience"
                        />
                      </div>
                    </>
                  )}
                  {/* If currently_working, show current company, year, and checkboxes */}
                  {experienceFields.currently_working && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="current_company_name">Current Company/Organisation Name</Label>
                        <Input
                          id="current_company_name"
                          name="current_company_name"
                          value={experienceFields.current_company_name}
                          onChange={handleExperienceChange}
                          placeholder="Current Company/Organisation Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="current_year_of_joining">Year of Joining</Label>
                        <Input
                          id="current_year_of_joining"
                          name="current_year_of_joining"
                          value={experienceFields.current_year_of_joining}
                          onChange={handleExperienceChange}
                          placeholder="Year of Joining"
                        />
                      </div>
                      <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="has_appointment_letter"
                            name="has_appointment_letter"
                            checked={experienceFields.has_appointment_letter}
                            onChange={handleExperienceChange}
                            className="mr-2"
                          />
                          <Label htmlFor="has_appointment_letter">Appointment Letter</Label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="has_salary_slip"
                            name="has_salary_slip"
                            checked={experienceFields.has_salary_slip}
                            onChange={handleExperienceChange}
                            className="mr-2"
                          />
                          <Label htmlFor="has_salary_slip">Current Salary Slip</Label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="has_relieving_letter"
                            name="has_relieving_letter"
                            checked={experienceFields.has_relieving_letter}
                            onChange={handleExperienceChange}
                            className="mr-2"
                          />
                          <Label htmlFor="has_relieving_letter">Relieving Letter</Label>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              )}
            </ResumeSection>
            {/* Job Preferences */}
            {hasData(beneficiary as Beneficiary, ['preferred_sectors', 'preferred_location']) && (
              <ResumeSection title="Job Preferences">
                <div className="space-y-2 text-left">
                  {hasValue(beneficiary.preferred_sectors) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Sectors:</span>
                      <span className="text-gray-700">{formatArrayString(beneficiary.preferred_sectors)}</span>
                    </div>
                  )}
                  {hasValue(beneficiary.preferred_location) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Location:</span>
                      <span className="text-gray-700">
                        {beneficiary.preferred_location}
                        {hasValue(beneficiary.open_to_out_of_state) && ' (Open to relocation)'}
                      </span>
                    </div>
                  )}
                </div>
              </ResumeSection>
            )}
          </div>
          {/* Footer */}
          <div className="bg-gray-100 px-8 py-4 text-sm text-gray-500 border-t text-left">
            <p>
              Registration Number: {beneficiary.registration_number} | 
              Registered on: {new Date(beneficiary.created_at).toLocaleDateString()} | 
              Status: <span className={isApproved(beneficiary.status) ? 'text-green-600' : 'text-red-600'}>
                {isApproved(beneficiary.status) ? 'Approved' : 'Unapproved'}
              </span>
            </p>
          </div>
                        {/* Move Payment Received, Data Verified, and Save Button to Bottom */}
                  <div className="m-8 border-t pt-6">
                    {/* Payment Received Section (Radio Group) */}
                    <Label>Payment Received?</Label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentReceived"
                          value="yes"
                          checked={paymentReceived === 'yes'}
                          onChange={() => { setPaymentReceived('yes'); setWaiverReason(''); }}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentReceived"
                          value="no"
                          checked={paymentReceived === 'no'}
                          onChange={() => setPaymentReceived('no')}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                    {paymentReceived === 'no' && (
                      <div className="mt-2">
                        <Label htmlFor="waiverReason">Payment Waiver Reason</Label>
                        <Input
                          id="waiverReason"
                          value={waiverReason}
                          onChange={(e) => setWaiverReason(e.target.value)}
                          placeholder="Enter reason for payment waiver"
                          className="w-full"
                        />
                      </div>
                    )}
                    {/* All Data Verified Checkbox at Bottom */}
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="all_data_verified"
                        name="all_data_verified"
                        checked={experienceFields.all_data_verified}
                        onChange={handleExperienceChange}
                        className="mr-2"
                      />
                      <Label htmlFor="all_data_verified">All Data Verified</Label>
                    </div>
                    {/* Save Button at Bottom */}
                    <div className="flex gap-4 mt-4">
                      <Button type="submit" disabled={isSubmitting} variant="default">
                        {isSubmitting ? 'Saving...' : 'Save'}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setEditExperience(false)} disabled={isSubmitting}>
                        Cancel
                      </Button>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="pl-4">
    <h2 className="text-lg font-semibold text-gray-800 mb-2 text-left">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

export default JobMelaView;
