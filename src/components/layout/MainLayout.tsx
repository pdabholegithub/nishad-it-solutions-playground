import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { MegaMenu } from './MegaMenu';
import { GlobalPopup } from '../ui/GlobalPopup';

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-50 flex-col md:flex-row overflow-hidden">
      <GlobalPopup />
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header />
        <MegaMenu />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 outline-none flex flex-col justify-between" tabIndex={-1} data-testid="main-content">
          <div className="mx-auto max-w-7xl w-full">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
