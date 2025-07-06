"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faPhone, faIdCard, faCircleCheck, faCircleXmark, faEye, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

interface Beneficiary {
  id: number;
  registration_number: string;
  full_name: string;
  mobile_number: string;
  status: string;
}

const JobMelaFind = () => {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showApprovedOnly, setShowApprovedOnly] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const fetchBeneficiaries = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/jobmela/beneficiaries');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch beneficiaries');
      }
      const data = await response.json();
      setBeneficiaries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (registrationNumber: string) => {
    router.push(`/dashboard/jobmela/${registrationNumber}`);
  };

  const filteredBeneficiaries = beneficiaries
    .filter(beneficiary => {
      if (showApprovedOnly && !beneficiary.status) {
        return false;
      }
      if (searchQuery.length >= 3) {
        return beneficiary.registration_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
          beneficiary.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          beneficiary.mobile_number.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });

  if (isLoading) {
    return (
      <div className="p-8">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sr. No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobile Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-8" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-40" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-28" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-20" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-8 w-16" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold">Job Mela Beneficiaries</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full">
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faUser} className="text-blue-500" />
              <span>Total: <span className="font-semibold">{beneficiaries.length}</span></span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faEye} className="text-green-500" />
              <span>Shown: <span className="font-semibold">{filteredBeneficiaries.length}</span></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-6 flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Input
            type="text"
            placeholder="Search by registration number, name or mobile number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" 
          />
        </div>
        <Button
          variant={showApprovedOnly ? "default" : "outline"}
          onClick={() => setShowApprovedOnly(!showApprovedOnly)}
          className="gap-2"
        >
          <FontAwesomeIcon icon={faFilter} />
          {showApprovedOnly ? "Show All" : "Show Approved Only"}
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr. No.
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faIdCard} className="text-gray-400" />
                    Registration Number
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    Name
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                    Mobile Number
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBeneficiaries.map((beneficiary, index) => (
                <tr key={beneficiary.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {beneficiary.registration_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {beneficiary.full_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {beneficiary.mobile_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 text-xs font-semibold leading-5 rounded-full ${
                      beneficiary.status 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      <FontAwesomeIcon 
                        icon={beneficiary.status ? faCircleCheck : faCircleXmark}
                        className={beneficiary.status ? "text-green-600" : "text-red-600"}
                      />
                      {beneficiary.status ? "Approved" : "Unapproved"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Button
                      onClick={() => handleView(beneficiary.registration_number)}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <FontAwesomeIcon icon={faEye} />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobMelaFind;