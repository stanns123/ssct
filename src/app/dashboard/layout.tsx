import { ReactNode } from 'react';
import { DashboardNavbar } from '@/components/dashboard/navbar';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DashboardFooter } from '@/components/dashboard/footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <DashboardNavbar />
      
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-64 pt-16">
          <div className="p-8 min-h-[calc(100vh-8rem)]">
            {children}
          </div>
          
          {/* Footer */}
          <DashboardFooter />
        </main>
      </div>
    </div>
  );
}