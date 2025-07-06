'use client';

import Image from 'next/image';
import { UserMenu } from './user-menu';

export function DashboardNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/media/logo/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        </div>

        {/* User Menu */}
        <UserMenu />
      </div>
    </nav>
  );
}