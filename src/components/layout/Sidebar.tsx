import { NavLink, Link } from 'react-router-dom';
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
  ArrowDownToLine,
  Zap,
  Link2
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
  { name: 'Mastery Challenges', href: '/mastery', icon: Zap },
  { name: 'Alerts & Toasts', href: '/alerts', icon: BellRing },
  { name: 'API Integration', href: '/api', icon: Database },
  { name: 'API Mastery Lab', href: '/api-chaining', icon: Link2 },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white p-4">
        <span className="font-bold text-lg">Nishad IT Playground</span>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} data-testid="mobile-menu-btn">
          <Menu />
        </button>
      </div>

      <div className={cn(
        "fixed inset-y-0 left-0 z-50 bg-slate-900 text-slate-300 transition-all duration-300 md:relative md:translate-x-0",
        isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0",
        isCollapsed ? "md:w-20" : "md:w-64"
      )}>
        <div className={cn(
          "flex h-16 shrink-0 items-center bg-slate-950 font-bold text-white tracking-wide transition-all duration-300",
          isCollapsed ? "justify-center px-0" : "px-6"
        )}>
          <Link to="/" className="hover:text-primary transition-colors truncate" data-testid="app-logo">
            {isCollapsed ? "NIT" : "Nishad IT Playground"}
          </Link>
        </div>

        {/* Collapse Toggle Desktop */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3 top-20 h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-lg z-50 hover:scale-110 transition-transform"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Menu className="h-3 w-3" />
        </button>

        <nav className="flex flex-1 flex-col p-4 overflow-y-auto overflow-x-hidden">
          <ul role="list" className="flex flex-1 flex-col gap-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  title={isCollapsed ? item.name : ""}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) => cn(
                    isActive ? 'bg-primary text-white' : 'hover:text-white hover:bg-slate-800',
                    'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-all duration-200',
                    isCollapsed ? "justify-center px-2" : ""
                  )}
                >
                  <item.icon className={cn("h-5 w-5 shrink-0 transition-transform duration-200", !isCollapsed && "group-hover:scale-110")} aria-hidden="true" />
                  {!isCollapsed && <span className="truncate">{item.name}</span>}
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
