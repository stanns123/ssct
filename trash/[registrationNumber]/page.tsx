"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Beneficiary {
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
}

const BackendUrl = process.env.VITE_BACKEND_URL;

const JobMelaView = () => {
  const { registrationNumber } = useParams<{ registrationNumber: string }>();
  const router = useRouter();
  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showWaiverInput, setShowWaiverInput] = useState(false);
  const [waiverReason, setWaiverReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    fetchBeneficiaryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationNumber]);

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
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  // Updated helper function to check if a value is truthy and not empty
  const hasValue = (value: any): boolean => {
    // Handle null and undefined
    if (value === null || value === undefined) {
      return false;
    }

    // Handle boolean values
    if (typeof value === 'boolean') {
      return value === true;
    }

    // Handle string values that represent booleans ("0", "1")
    if (typeof value === 'string') {
      // If the string is "0", treat it as false
      if (value === "0") {
        return false;
      }
      // If it's an empty string or whitespace
      if (value.trim() === '') {
        return false;
      }
      // Handle array strings
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

    // Handle numbers
    if (typeof value === 'number') {
      return value !== 0;
    }

    return false;
  };

  // Updated helper function to check if a section has any data
  const hasData = (obj: any, keys: string[]) => {
    return keys.some(key => hasValue(obj[key]));
  };

  const formatArrayString = (str: string) => {
    try {
      const arr = JSON.parse(str);
      return Array.isArray(arr) ? arr.join(', ') : str;
    } catch {
      return str;
    }
  };

  const handlePaymentConfirmation = async (confirmed: boolean) => {
    if (!confirmed) {
      setShowWaiverInput(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BackendUrl}/jobMela/updatePayment.php`, {
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

      if (!response.ok) {
        throw new Error('Failed to update payment status');
      }

      // Refresh the page to show updated data
      window.location.reload();
    } catch (err) {
      alert('Failed to update payment status. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWaiverSubmit = async () => {
    if (!waiverReason.trim()) {
      alert('Please provide a reason for payment waiver');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BackendUrl}/jobMela/updatePayment.php`, {
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

      if (!response.ok) {
        throw new Error('Failed to submit waiver reason');
      }

      // Refresh the page to show updated data
      window.location.reload();
    } catch (err) {
      alert('Failed to submit waiver reason. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.push('/dashboard/jobMela/find');
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

  // Add this helper function specifically for status
  const isApproved = (status: any): boolean => {
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
                        {hasData(beneficiary, ['dob', 'gender']) && (
              <ResumeSection title="Personal Information">
                <div className="space-y-2 text-left">
                  {hasValue(beneficiary.dob) && (
                    <div className="flex">
                      <span className="w-40 font-semibold text-gray-700">Date of Birth:</span>
                      <span className="text-gray-700">{beneficiary.dob}</span>
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
            {hasData(beneficiary, ['highest_qualification', 'other_qualification', 'tenth_board', 'twelfth_board', 'education_stream']) && (
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
            {hasData(beneficiary, ['specific_skills', 'areas_of_interest', 'completed_skill_program']) && (
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

            {/* Work Experience */}
            {hasValue(beneficiary.prior_experience) && (
              <ResumeSection title="Work Experience">
                <p className="text-gray-700 text-left">{beneficiary.prior_experience}</p>
              </ResumeSection>
            )}

            {/* Job Preferences */}
            {hasData(beneficiary, ['preferred_sectors', 'preferred_location']) && (
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

          {/* Payment Confirmation Section - Only show if not approved */}
          {!isApproved(beneficiary.status) && (
            <div className="bg-white px-8 py-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Payment Received?</h3>
              
              {!showWaiverInput ? (
                <div className="flex gap-4">
                  <Button 
                    onClick={() => handlePaymentConfirmation(true)}
                    disabled={isSubmitting}
                    variant="default"
                  >
                    {isSubmitting ? 'Processing...' : 'Yes'}
                  </Button>
                  <Button 
                    onClick={() => handlePaymentConfirmation(false)}
                    disabled={isSubmitting}
                    variant="outline"
                  >
                    No
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="waiverReason">Payment Waiver Reason</Label>
                    <Input
                      id="waiverReason"
                      value={waiverReason}
                      onChange={(e) => setWaiverReason(e.target.value)}
                      placeholder="Enter reason for payment waiver"
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleWaiverSubmit}
                      disabled={isSubmitting}
                      variant="default"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Reason'}
                    </Button>
                    <Button 
                      onClick={() => setShowWaiverInput(false)}
                      disabled={isSubmitting}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
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