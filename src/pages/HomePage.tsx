import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Lock, FormInput, FileDigit, Search, ArrowDownToLine,
  MousePointerClick, Layers, ShieldAlert, BellRing, Database,
  ChevronRight, Code2, TestTube2, Zap
} from 'lucide-react';

const sections = [
  { name: 'Authentication', href: '/auth', icon: Lock, description: 'Login, signup, and forgot-password flows with mock error states.', color: 'bg-blue-50 text-blue-600', badge: 'Forms' },
  { name: 'Form Controls', href: '/forms', icon: FormInput, description: 'Text inputs, selects, checkboxes, toggles, date pickers, sliders & file uploads.', color: 'bg-purple-50 text-purple-600', badge: 'Inputs' },
  { name: 'Wizard Checkout', href: '/wizard', icon: FileDigit, description: 'Multi-step form wizard with progress tracking and state persistence.', color: 'bg-orange-50 text-orange-600', badge: 'Multi-Step' },
  { name: 'Autocomplete', href: '/search', icon: Search, description: 'Search with debounced live suggestions and dynamic dropdown states.', color: 'bg-cyan-50 text-cyan-600', badge: 'Dynamic' },
  { name: 'Infinite Scroll', href: '/scroll', icon: ArrowDownToLine, description: 'Lazy-loaded list items that inject into DOM as you scroll.', color: 'bg-teal-50 text-teal-600', badge: 'Scroll' },
  { name: 'Interactions', href: '/interactions', icon: MousePointerClick, description: 'Drag & drop, double-click, right-click context menus, and keyboard events.', color: 'bg-pink-50 text-pink-600', badge: 'Events' },
  { name: 'Advanced UI', href: '/advanced', icon: Layers, description: 'Image carousels, dynamic data tables, modal dialogs, and tab panels.', color: 'bg-indigo-50 text-indigo-600', badge: 'UI' },
  { name: 'Challenges', href: '/challenges', icon: ShieldAlert, description: 'Shadow DOM, iFrames, dynamic IDs, and delayed rendering elements.', color: 'bg-red-50 text-red-600', badge: 'Hard' },
  { name: 'Alerts & Toasts', href: '/alerts', icon: BellRing, description: 'Browser alerts, confirms, prompts, and custom auto-dismissing toasts.', color: 'bg-yellow-50 text-yellow-600', badge: 'Dialogs' },
  { name: 'API Integration', href: '/api', icon: Database, description: 'Async REST API calls with loading spinners, error handling, and result display.', color: 'bg-green-50 text-green-600', badge: 'Network' },
];

const stats = [
  { label: 'Test Pages', value: '10', icon: TestTube2 },
  { label: 'UI Components', value: '50+', icon: Layers },
  { label: 'Hard Challenges', value: '4', icon: ShieldAlert },
  { label: 'Framework Agnostic', value: '100%', icon: Code2 },
];

export function HomePage() {
  useEffect(() => {
    document.title = 'Home | Nishad IT Playground';
  }, []);

  return (
    <div className="space-y-10" data-testid="home-page">

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-primary/80 px-8 py-12 text-white shadow-xl">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
            <Zap className="h-3 w-3 text-yellow-400" />
            QA Automation Playground
          </div>
          <h1 className="text-4xl font-black tracking-tight" data-testid="home-page-title">
            Welcome to Nishad IT Playground
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            A comprehensive application with real-world UI scenarios for practising Playwright, Selenium, Cypress, and any UI automation framework.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 transition-colors"
              data-testid="cta-get-started"
            >
              Get Started <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/challenges"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              data-testid="cta-challenges"
            >
              Try Challenges
            </Link>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-32 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            <p className="text-xs font-medium text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Section Cards */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Test Scenarios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section.name}
              to={section.href}
              className="group flex flex-col gap-3 bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              data-testid={`card-${section.name.toLowerCase().replace(/[\s&]+/g, '-')}`}
            >
              <div className="flex items-start justify-between">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${section.color}`}>
                  <section.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold bg-gray-100 text-gray-500 rounded-full px-2.5 py-0.5">
                  {section.badge}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {section.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{section.description}</p>
              </div>
              <div className="flex items-center text-xs font-medium text-primary mt-auto">
                Explore <ChevronRight className="h-3 w-3 ml-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
