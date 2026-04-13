import { NavLink } from 'react-router-dom';
import { 
  FormInput, 
  MousePointerClick, 
  Layers, 
  ShieldAlert, 
  BellRing, 
  Database,
  Lock,
  Menu,
  FileDigit,
  Search,
  ArrowDownToLine
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useState } from 'react';

const navigation = [
  { name: 'Authentication', href: '/auth', icon: Lock },
  { name: 'Form Controls', href: '/forms', icon: FormInput },
  { name: 'Wizard Checkout', href: '/wizard', icon: FileDigit },
  { name: 'Autocomplete', href: '/search', icon: Search },
  { name: 'Infinite Scroll', href: '/scroll', icon: ArrowDownToLine },
  { name: 'Interactions', href: '/interactions', icon: MousePointerClick },
  { name: 'Advanced UI', href: '/advanced', icon: Layers },
  { name: 'Challenges', href: '/challenges', icon: ShieldAlert },
  { name: 'Alerts & Toasts', href: '/alerts', icon: BellRing },
  { name: 'API Integration', href: '/api', icon: Database },
];

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white p-4">
        <span className="font-bold text-lg">Nishad IT Solutions</span>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} data-testid="mobile-menu-btn">
          <Menu />
        </button>
      </div>

      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 md:relative md:translate-x-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 shrink-0 items-center px-6 bg-slate-950 font-bold text-white tracking-wide">
          <span data-testid="app-logo">Nishad IT Solutions</span>
        </div>
        <nav className="flex flex-1 flex-col p-4 overflow-y-auto">
          <ul role="list" className="flex flex-1 flex-col gap-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) => cn(
                    isActive ? 'bg-primary text-white' : 'hover:text-white hover:bg-slate-800',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-colors'
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileOpen(false)}
          data-testid="mobile-overlay"
        />
      )}
    </>
  );
}
