import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, SearchX } from 'lucide-react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Nishad IT Playground';
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 px-4">
      <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary/10">
        <SearchX className="h-12 w-12 text-primary/60" />
      </div>
      <div className="space-y-2">
        <h1
          className="text-8xl font-black text-primary/20 leading-none"
          data-testid="not-found-status"
        >
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800" data-testid="not-found-title">
          Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn't exist. It may have been moved, deleted, or the URL might be wrong.
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shadow-sm"
        data-testid="not-found-home-link"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
