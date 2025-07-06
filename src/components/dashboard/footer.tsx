export function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-8">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}