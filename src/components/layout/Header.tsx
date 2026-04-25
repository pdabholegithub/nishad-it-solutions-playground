import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PAGE_LABELS: Record<string, string> = {
  auth: 'Authentication',
  forms: 'Form Controls',
  wizard: 'Wizard Checkout',
  search: 'Autocomplete',
  scroll: 'Infinite Scroll',
  interactions: 'Interactions',
  advanced: 'Advanced UI',
  challenges: 'Challenges',
  alerts: 'Alerts & Toasts',
  api: 'API Integration',
};

export function Header() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2" data-testid="breadcrumb-nav">
          <li>
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
            </div>
          </li>
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const label = PAGE_LABELS[value] ?? (value.charAt(0).toUpperCase() + value.slice(1));
            return (
              <li key={value}>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                  <span
                    className={`ml-2 text-sm font-medium ${isLast ? 'text-gray-700' : 'text-gray-500'}`}
                    data-testid={`breadcrumb-${value}`}
                  >
                    {label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Right side: QA mode badge */}
      <div className="flex items-center gap-x-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-600/20" data-testid="qa-mode-badge">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          QA Mode Active
        </span>
      </div>
    </header>
  );
}
