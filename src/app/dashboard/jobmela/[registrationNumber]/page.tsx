"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUser, faGraduationCap, faTools, faBriefcase, faStar, faRupeeSign, faCheckCircle, faTimesCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
  areas_of_interest: string[];
  specific_skills: string[];
  currently_enrolled: string;
  completed_skill_program: string;
  preferred_sectors: string[];
  preferred_location: string;
  open_to_out_of_state: boolean;
  payment_confirmed: boolean;
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

const JobMelaView = () => {
  const { registrationNumber } = useParams<{ registrationNumber: string }>();
  const router = useRouter();
  const [beneficiary, setBeneficiary] = useState<Beneficiary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add verified state
  const [verified, setVerified] = useState(false);

  // Form state to hold editable data
  const [formData, setFormData] = useState<Beneficiary | null>(null);

  useEffect(() => {
    fetchBeneficiaryDetails();
  }, [registrationNumber]);

  useEffect(() => {
    if (beneficiary) {
      // If the API returns stringified arrays, parse them, else use as is
      setFormData({
        ...beneficiary,
        areas_of_interest: Array.isArray(beneficiary.areas_of_interest)
          ? beneficiary.areas_of_interest
          : beneficiary.areas_of_interest
            ? JSON.parse(beneficiary.areas_of_interest as unknown as string)
            : [],
        specific_skills: Array.isArray(beneficiary.specific_skills)
          ? beneficiary.specific_skills
          : beneficiary.specific_skills
            ? JSON.parse(beneficiary.specific_skills as unknown as string)
            : [],
        preferred_sectors: Array.isArray(beneficiary.preferred_sectors)
          ? beneficiary.preferred_sectors
          : beneficiary.preferred_sectors
            ? JSON.parse(beneficiary.preferred_sectors as unknown as string)
            : [],
      });
    }
  }, [beneficiary]);

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
      // If verified is part of the API, set it here. Otherwise, keep as false by default.
      if (typeof data.verified === 'boolean') setVerified(data.verified);
    } catch (err) {
      console.error('Error fetching beneficiary details:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev!,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleArrayChange = (name: string, value: string[]) => {
    setFormData(prev => ({ ...prev!, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...formData,
        areas_of_interest: JSON.stringify(formData!.areas_of_interest),
        specific_skills: JSON.stringify(formData!.specific_skills),
        preferred_sectors: JSON.stringify(formData!.preferred_sectors),
        verified,
      };
      const response = await fetch(`/api/jobmela/beneficiary/${registrationNumber}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok) {
        throw new Error('Failed to update beneficiary');
      }
      alert('Beneficiary updated successfully');
      fetchBeneficiaryDetails();
    } catch (err) {
      console.error('Error updating beneficiary:', err);
      alert('Failed to update beneficiary');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.push('/dashboard/jobmela/find');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Skeleton className="h-10 w-72 mb-6 bg-gray-200" />
        <Skeleton className="h-6 w-96 mb-2 bg-gray-200" />
        <Skeleton className="h-6 w-80 mb-2 bg-gray-200" />
        <Skeleton className="h-6 w-64 bg-gray-200" />
      </div>
    );
  }

  if (error || !formData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md border border-gray-300">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-black text-5xl mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-black mb-2">Error</h2>
          <p className="text-gray-700">{error || 'No data available'}</p>
        </div>
      </div>
    );
  }

  const streamOptions = () => {
    if (['12th Grade (Intermediate)', 'Pursuing_12th'].includes(formData.highest_qualification)) {
      return intermediateStreams;
    } else if (['Bachelors_Degree', 'Pursuing_Bachelors'].includes(formData.highest_qualification)) {
      return graduationStreams;
    } else if (['Masters_Degree', 'Pursuing_Masters'].includes(formData.highest_qualification)) {
      return postGraduationStreams;
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-white py-10 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <Button onClick={handleBack} variant="ghost" className="text-black hover:text-gray-700 flex items-center gap-2">
            <FontAwesomeIcon icon={faChevronLeft} className="mr-1 text-black" />
            Back to List
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-0 sm:p-0 border border-gray-300 overflow-hidden">
          <div className="bg-black py-8 px-4 sm:px-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon icon={faUser} className="text-white text-3xl" />
              <span className="text-3xl font-extrabold text-white tracking-tight">Edit Beneficiary Details</span>
            </div>
            <span className="text-sm text-gray-200 font-medium">Update and review candidate information</span>
          </div>
          <div className="p-6 sm:p-10 space-y-10">

          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faUser} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="full_name">Full Name</Label>
                <Input id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded" required>
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="mobile_number">Mobile Number</Label>
                <Input type="tel" id="mobile_number" name="mobile_number" value={formData.mobile_number} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email_address">Email Address</Label>
                <Input type="email" id="email_address" name="email_address" value={formData.email_address} onChange={handleChange} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="current_address">Current Address</Label>
                <textarea id="current_address" name="current_address" value={formData.current_address} onChange={handleChange} className="w-full p-2 border rounded" required />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} pattern="[0-9]{6}" maxLength={6} required />
              </div>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-400 my-4" />

          {/* Educational Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Educational Information</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="highest_qualification">Highest Qualification</Label>
                <select id="highest_qualification" name="highest_qualification" value={formData.highest_qualification} onChange={handleChange} className="w-full p-2 border rounded" required>
                  {qualificationLevels.map(level => (
                    <option key={level.value} value={level.value} disabled={level.disabled}>{level.label}</option>
                  ))}
                </select>
              </div>
              {formData.highest_qualification === 'Other' && (
                <div>
                  <Label htmlFor="other_qualification">Other Qualification</Label>
                  <Input id="other_qualification" name="other_qualification" value={formData.other_qualification} onChange={handleChange} required />
                </div>
              )}
              {['10th Grade (SSC)', '12th Grade (Intermediate)', 'Bachelors_Degree', 'Masters_Degree'].includes(formData.highest_qualification) && (
                <>
                  <div>
                    <Label htmlFor="year_of_passing">Year of Passing</Label>
                    <Input type="number" id="year_of_passing" name="year_of_passing" value={formData.year_of_passing} onChange={handleChange} min="1950" max="2025" required />
                  </div>
                  <div>
                    <Label htmlFor="overall_percentage">Overall Percentage</Label>
                    <Input type="number" id="overall_percentage" name="overall_percentage" value={formData.overall_percentage} onChange={handleChange} min="0" max="100" step="0.01" required />
                  </div>
                </>
              )}
              {['Pursuing_12th', 'Pursuing_Bachelors', 'Pursuing_Masters'].includes(formData.highest_qualification) && (
                <div>
                  <Label htmlFor="expected_year_of_completion">Expected Year of Completion</Label>
                  <Input type="number" id="expected_year_of_completion" name="expected_year_of_completion" value={formData.expected_year_of_completion} onChange={handleChange} min="2025" max="2030" required />
                </div>
              )}
              {formData.highest_qualification === '10th Grade (SSC)' && (
                <div>
                  <Label htmlFor="tenth_board">10th Board</Label>
                  <select id="tenth_board" name="tenth_board" value={formData.tenth_board} onChange={handleChange} className="w-full p-2 border rounded" required>
                    {tenthBoards.map(board => (
                      <option key={board.value} value={board.value} disabled={board.disabled}>{board.label}</option>
                    ))}
                  </select>
                </div>
              )}
              {['12th Grade (Intermediate)', 'Pursuing_12th'].includes(formData.highest_qualification) && (
                <>
                  <div>
                    <Label htmlFor="twelfth_board">12th Board</Label>
                    <select id="twelfth_board" name="twelfth_board" value={formData.twelfth_board} onChange={handleChange} className="w-full p-2 border rounded" required>
                      {twelfthBoards.map(board => (
                        <option key={board.value} value={board.value} disabled={board.disabled}>{board.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="education_stream">Stream</Label>
                    <select id="education_stream" name="education_stream" value={formData.education_stream} onChange={handleChange} className="w-full p-2 border rounded" required>
                      {streamOptions().map(stream => (
                        <option key={stream.value} value={stream.value} disabled={stream.disabled}>{stream.label}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              {['Bachelors_Degree', 'Pursuing_Bachelors', 'Masters_Degree', 'Pursuing_Masters'].includes(formData.highest_qualification) && (
                <div>
                  <Label htmlFor="education_stream">Stream</Label>
                  <select id="education_stream" name="education_stream" value={formData.education_stream} onChange={handleChange} className="w-full p-2 border rounded" required>
                    {streamOptions().map(stream => (
                      <option key={stream.value} value={stream.value} disabled={stream.disabled}>{stream.label}</option>
                    ))}
                  </select>
                </div>
              )}
              {formData.education_stream === 'Other' && (
                <div>
                  <Label htmlFor="other_stream">Other Stream</Label>
                  <Input id="other_stream" name="other_stream" value={formData.other_stream} onChange={handleChange} required />
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-dashed border-gray-400 my-4" />

          {/* Additional Qualifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faTools} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Additional Qualifications</h2>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="has_iti" name="has_iti" checked={formData.has_iti} onChange={handleChange} className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-sm" />
              <Label htmlFor="has_iti">ITI Certification</Label>
            </div>
            {formData.has_iti && (
              <div>
                <Label htmlFor="other_iti_trade">ITI Trade</Label>
                <select id="other_iti_trade" name="other_iti_trade" value={formData.other_iti_trade} onChange={handleChange} className="w-full p-2 border rounded" required>
                  <option value="">Select Trade</option>
                  {Object.values(itiTrades).flat().map(trade => (
                    <option key={trade.value} value={trade.value}>{trade.label}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="has_diploma" name="has_diploma" checked={formData.has_diploma} onChange={handleChange} className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-sm" />
              <Label htmlFor="has_diploma">Diploma</Label>
            </div>
            {formData.has_diploma && (
              <div>
                <Label htmlFor="other_diploma_stream">Diploma Stream</Label>
                <select id="other_diploma_stream" name="other_diploma_stream" value={formData.other_diploma_stream} onChange={handleChange} className="w-full p-2 border rounded" required>
                  <option value="">Select Stream</option>
                  {Object.values(diplomaCourses).flat().map(course => (
                    <option key={course.value} value={course.value}>{course.label}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="border-t border-dashed border-gray-400 my-4" />

          {/* Job Preferences */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faBriefcase} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Job Preferences</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label>Preferred Job Sectors</Label>
                <div className="space-y-2">
                  {[
                    { value: "IT", label: "Information Technology" },
                    { value: "Manufacturing", label: "Manufacturing" },
                    { value: "Healthcare", label: "Healthcare" },
                    { value: "Retail", label: "Retail" },
                    { value: "Education", label: "Education" },
                    { value: "Banking", label: "Banking & Finance" },
                    { value: "Hospitality", label: "Hospitality" },
                    { value: "Construction", label: "Construction" },
                    { value: "Automotive", label: "Automotive" },
                    { value: "Other", label: "Other" }
                  ].map(sector => (
                    <div key={sector.value} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`sector-${sector.value}`}
                        checked={formData.preferred_sectors.includes(sector.value)}
                        onChange={(e) => {
                          const value = sector.value;
                          setFormData(prev => prev && ({
                            ...prev,
                            preferred_sectors: e.target.checked
                              ? [...prev.preferred_sectors, value]
                              : prev.preferred_sectors.filter(s => s !== value)
                          }));
                        }}
                        className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-sm"
                      />
                      <Label htmlFor={`sector-${sector.value}`}>{sector.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="preferred_location">Preferred Work Location</Label>
                <Input id="preferred_location" name="preferred_location" value={formData.preferred_location} onChange={handleChange} />
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="open_to_out_of_state" name="open_to_out_of_state" checked={formData.open_to_out_of_state} onChange={handleChange} />
                <Label htmlFor="open_to_out_of_state">Open to Work Outside State</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="has_resume" name="has_resume" checked={formData.has_resume} onChange={handleChange} />
                <Label htmlFor="has_resume">Has Resume</Label>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="prior_experience">Prior Work Experience</Label>
                <textarea id="prior_experience" name="prior_experience" value={formData.prior_experience} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-400 my-4" />

          {/* Skills and Additional Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faStar} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Skills & Additional Info</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="areas_of_interest">Areas of Interest</Label>
                <Input
                  id="areas_of_interest"
                  value={formData.areas_of_interest.join(", ")}
                  onChange={(e) => {
                    const interests = e.target.value.split(",").map(item => item.trim()).filter(item => item);
                    handleArrayChange('areas_of_interest', interests);
                  }}
                />
              </div>
              <div>
                <Label htmlFor="specific_skills">Specific Skills</Label>
                <Input
                  id="specific_skills"
                  value={formData.specific_skills.join(", ")}
                  onChange={(e) => {
                    const skills = e.target.value.split(",").map(item => item.trim()).filter(item => item);
                    handleArrayChange('specific_skills', skills);
                  }}
                />
              </div>
              <div>
                <Label htmlFor="currently_enrolled">Currently Enrolled Program</Label>
                <Input id="currently_enrolled" name="currently_enrolled" value={formData.currently_enrolled} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="completed_skill_program">Completed Skill Programs</Label>
                <Input id="completed_skill_program" name="completed_skill_program" value={formData.completed_skill_program} onChange={handleChange} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="additional_info">Additional Information</Label>
                <textarea id="additional_info" name="additional_info" value={formData.additional_info} onChange={handleChange} className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-400 my-4" />

          {/* Payment Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faRupeeSign} className="text-black text-xl" />
              <h2 className="text-lg font-semibold text-black uppercase tracking-wide">Payment Status</h2>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="payment_confirmed_yes"
                  name="payment_confirmed"
                  checked={formData.payment_confirmed}
                  onChange={() => setFormData(prev => ({ ...prev!, payment_confirmed: true }))}
                  className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-full"
                />
                <Label htmlFor="payment_confirmed_yes" className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /> Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="payment_confirmed_no"
                  name="payment_confirmed"
                  checked={!formData.payment_confirmed}
                  onChange={() => setFormData(prev => ({ ...prev!, payment_confirmed: false }))}
                  className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-full"
                />
                <Label htmlFor="payment_confirmed_no" className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" /> No
                </Label>
              </div>
            </div>
            {!formData.payment_confirmed && (
              <div>
                <Label htmlFor="payment_waiver_reason">Payment Waiver Reason</Label>
                <Input id="payment_waiver_reason" name="payment_waiver_reason" value={formData.payment_waiver_reason} onChange={handleChange} />
              </div>
            )}
          </div>

          {/* Verified Checkbox */}
          <div className="flex items-center mt-8">
            <input
              type="checkbox"
              id="verified"
              name="verified"
              checked={verified}
              onChange={e => setVerified(e.target.checked)}
              className="h-4 w-4 accent-indigo-500 border-gray-300 rounded-sm mr-2"
            />
            <Label htmlFor="verified">Verified</Label>
          </div>
          <div className="flex justify-end mt-8">
            <Button type="submit" disabled={isSubmitting} className="bg-black text-white font-bold px-8 py-2 rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-200 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <span className="animate-spin inline-block mr-2">⏳</span> Saving...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white" /> Save
                </>
              )}
            </Button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

// Options arrays (same as original)
const qualificationLevels = [
  { value: '', label: 'Select Qualification', disabled: true },
  { value: 'Below 10th Grade', label: 'Below 10th Grade' },
  { value: '10th Grade (SSC)', label: '10th Grade (SSC)' },
  { value: 'Pursuing_12th', label: 'Pursuing Intermediate' },
  { value: '12th Grade (Intermediate)', label: '12th Grade (Intermediate)' },
  { value: 'Pursuing_Bachelors', label: 'Pursuing Bachelor\'s Degree' },
  { value: 'Bachelors_Degree', label: 'Bachelor\'s Degree' },
  { value: 'Pursuing_Masters', label: 'Pursuing Master\'s Degree' },
  { value: 'Masters_Degree', label: 'Master\'s Degree' },
  { value: 'Other', label: 'Other' }
];

const tenthBoards = [
  { value: '', label: 'Select Board', disabled: true },
  { value: 'BSEAP', label: 'Board of Secondary Education, Andhra Pradesh (BSEAP)' },
  { value: 'APOSS', label: 'Andhra Pradesh Open School Society (APOSS)' },
  { value: 'CBSE', label: 'Central Board of Secondary Education (CBSE)' },
  { value: 'CISCE', label: 'Council for the Indian School Certificate Examinations (CISCE)' },
  { value: 'Other', label: 'Other' }
];

const twelfthBoards = [
  { value: '', label: 'Select Board', disabled: true },
  { value: 'BIEAP', label: 'Board of Intermediate Education, Andhra Pradesh (BIEAP)' },
  { value: 'NIOS', label: 'National Institute of Open Schooling (NIOS)' },
  { value: 'CBSE', label: 'Central Board of Secondary Education (CBSE)' },
  { value: 'CISCE', label: 'Council for the Indian School Certificate Examinations (CISCE)' },
  { value: 'Other', label: 'Other' }
];

const intermediateStreams = [
  { value: '', label: 'Select Stream', disabled: true },
  { value: 'PCM', label: 'Science - Physics, Chemistry, Mathematics' },
  { value: 'PCB', label: 'Science - Physics, Chemistry, Biology' },
  { value: 'PCMB', label: 'Science - Physics, Chemistry, Mathematics, Biology' },
  { value: 'PCC', label: 'Science - Physics, Chemistry with Computer Science' },
  { value: 'CBE', label: 'Commerce - Accountancy, Business Studies, Economics' },
  { value: 'ECC', label: 'Commerce - Economics, Commerce, Civics' },
  { value: 'ECM', label: 'Commerce - Economics, Commerce, Mathematics' },
  { value: 'CBL', label: 'Commerce - Accountancy, Commerce with Business Law' },
  { value: 'HEC', label: 'Arts - History, Economics, Civics' },
  { value: 'HPG', label: 'Arts - History, Political Science, Geography' },
  { value: 'HSP', label: 'Arts - History, Sociology, Psychology' },
  { value: 'HLL', label: 'Arts - History, Languages, Literature' },
  { value: 'VET', label: 'Vocational - Engineering Technology' },
  { value: 'VAG', label: 'Vocational - Agriculture' },
  { value: 'VBC', label: 'Vocational - Business and Commerce' },
  { value: 'VIT', label: 'Vocational - Information Technology' },
  { value: 'VHT', label: 'Vocational - Hospitality and Tourism' },
  { value: 'Other', label: 'Other' }
];

const graduationStreams = [
  { value: '', label: 'Select Stream', disabled: true },
  { value: 'BA_Eng', label: 'BA - English Literature' },
  { value: 'BA_His', label: 'BA - History' },
  { value: 'BA_Eco', label: 'BA - Economics' },
  { value: 'BA_Pol', label: 'BA - Political Science' },
  { value: 'BA_Psy', label: 'BA - Psychology' },
  { value: 'BA_Soc', label: 'BA - Sociology' },
  { value: 'BSc_Math', label: 'BSc - Mathematics' },
  { value: 'BSc_Phy', label: 'BSc - Physics' },
  { value: 'BSc_Chem', label: 'BSc - Chemistry' },
  { value: 'BSc_CS', label: 'BSc - Computer Science' },
  { value: 'BSc_Bio', label: 'BSc - Biology' },
  { value: 'BCom_Gen', label: 'BCom - General' },
  { value: 'BCom_AF', label: 'BCom - Accounting and Finance' },
  { value: 'BBA', label: 'BBA - Business Administration' },
  { value: 'BTech_CSE', label: 'BTech - Computer Science and Engineering' },
  { value: 'BTech_ECE', label: 'BTech - Electronics and Communication' },
  { value: 'BTech_EEE', label: 'BTech - Electrical and Electronics' },
  { value: 'BTech_Mech', label: 'BTech - Mechanical Engineering' },
  { value: 'BTech_Civil', label: 'BTech - Civil Engineering' },
  { value: 'MBBS', label: 'MBBS' },
  { value: 'BDS', label: 'BDS - Dental Surgery' },
  { value: 'BAMS', label: 'BAMS - Ayurvedic Medicine' },
  { value: 'Other', label: 'Other' }
];

const postGraduationStreams = [
  { value: '', label: 'Select Stream', disabled: true },
  { value: 'MA_Eng', label: 'MA - English' },
  { value: 'MA_His', label: 'MA - History' },
  { value: 'MA_Eco', label: 'MA - Economics' },
  { value: 'MSW', label: 'Master of Social Work' },
  { value: 'MSc_Math', label: 'MSc - Mathematics' },
  { value: 'MSc_Phy', label: 'MSc - Physics' },
  { value: 'MSc_Chem', label: 'MSc - Chemistry' },
  { value: 'MSc_CS', label: 'MSc - Computer Science' },
  { value: 'MCA', label: 'MCA - Computer Applications' },
  { value: 'MCom', label: 'MCom - Commerce' },
  { value: 'MBA_Gen', label: 'MBA - General' },
  { value: 'MBA_Fin', label: 'MBA - Finance' },
  { value: 'MBA_Mkt', label: 'MBA - Marketing' },
  { value: 'MTech_CSE', label: 'MTech - Computer Science' },
  { value: 'MTech_ECE', label: 'MTech - Electronics' },
  { value: 'MTech_EEE', label: 'MTech - Electrical' },
  { value: 'MD', label: 'MD - Medicine' },
  { value: 'MS', label: 'MS - Surgery' },
  { value: 'Other', label: 'Other' }
];

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

export default JobMelaView;