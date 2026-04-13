import { useLocation } from 'react-router-dom';
import { ChevronRight, UserCircle } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2" data-testid="breadcrumb-nav">
          <li>
            <div className="flex items-center">
              <span className="text-gray-400 text-sm font-medium">Home</span>
            </div>
          </li>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <li key={to}>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                  <span className={`ml-2 text-sm font-medium ${isLast ? 'text-gray-700' : 'text-gray-500'}`}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <nav className="hidden md:flex items-center gap-x-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </nav>
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />
        <div className="flex items-center gap-x-4">
          <span className="sr-only">Your profile</span>
          <UserCircle className="h-8 w-8 text-gray-400" aria-hidden="true" />
          <span className="hidden lg:flex lg:items-center">
            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
              Test User
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
