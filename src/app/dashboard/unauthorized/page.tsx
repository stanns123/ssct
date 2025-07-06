
import Link from "next/link";
import { LucideLock } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-xl p-10 flex flex-col items-center max-w-md w-full">
        <LucideLock className="text-red-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">You are not authorized</h1>
        <p className="text-gray-600 mb-6 text-center">
          Sorry, you do not have permission to visit this page.
        </p>
        <Link href="/dashboard" passHref legacyBehavior>
          <a className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
            Go Home
          </a>
        </Link>
      </div>
    </div>
  );
}
