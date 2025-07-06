'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { 
  Home, 
  Users, 
  BarChart3, 
} from 'lucide-react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    type: 'link',
  },
  {
    name: 'Users',
    icon: Users,
    type: 'dropdown',
    items: [
      { name: 'All', href: '/dashboard/users' },
      { name: 'Add', href: '/dashboard/users/add' },
    ],
  },
  {
    name: 'Job Mela',
    href: '/dashboard/jobmela/find',
    icon: BarChart3,
    type: 'link',
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            if (item.type === 'link' && item.href) {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href as string}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon className={cn(
                    'h-5 w-5',
                    isActive ? 'text-blue-700' : 'text-gray-400'
                  )} />
                  <span>{item.name}</span>
                </Link>
              );
            }
            if (item.type === 'dropdown' && Array.isArray(item.items)) {
              // Check if any dropdown item is active
              const isDropdownActive = item.items?.some((sub) => pathname === sub.href);
              const isOpen = openDropdown === item.name;
              return (
                <div key={item.name}>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                    className={cn(
                      'flex w-full items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isDropdownActive || isOpen
                        ? 'bg-blue-100 text-blue-800 border-r-2 border-blue-700 shadow'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <item.icon className={cn(
                      'h-5 w-5',
                      isDropdownActive || isOpen ? 'text-blue-800' : 'text-gray-400'
                    )} />
                    <span>{item.name}</span>
                    <svg className={cn('ml-auto h-4 w-4 transition-transform', (isDropdownActive || isOpen) && 'rotate-90')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                  {isOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.items?.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href as string}
                            className={cn(
                              'flex items-center px-3 py-2 rounded text-sm font-medium',
                              isSubActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'
                            )}
                            onClick={() => setOpenDropdown(item.name)}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </nav>
      </div>
    </aside>
  );
}