export function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nishad IT Solutions. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}
