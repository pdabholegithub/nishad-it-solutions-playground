import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nishad IT Playground. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm font-medium text-gray-500">
          {/* These links are intentional test targets for QA automation practice */}
          <a
            href="https://nishad-institute.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
            data-testid="footer-link-institute"
          >
            🏛️ Nishad Institute
          </a>
          <Link
            to="/privacy"
            className="hover:text-primary transition-colors"
            data-testid="footer-link-privacy"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-primary transition-colors"
            data-testid="footer-link-terms"
          >
            Terms of Service
          </Link>
          <a
            href="https://github.com/pdabholegithub/nishad-it-solutions-playground"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            data-testid="footer-link-github"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
