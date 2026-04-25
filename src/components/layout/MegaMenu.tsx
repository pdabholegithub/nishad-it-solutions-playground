import { ChevronDown } from 'lucide-react';

export function MegaMenu() {
  return (
    <div className="w-full bg-white border-b border-gray-200 hidden lg:block z-30 relative shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 h-12" data-testid="mega-menu-list">
          {/* ⚠️ These menu items are intentional test targets for practising automation on e-commerce navigation */}
          <li className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-2.5 py-1 ring-1 ring-amber-200 select-none" title="These are sample navigation items for automation practice">
            <span>⚠️</span> Sample E-Commerce Nav (Test Target)
          </li>
          
          <li className="cursor-pointer hover:text-primary transition-colors" data-testid="nav-mens-fashion">Men's Fashion</li>
          <li className="cursor-pointer hover:text-primary transition-colors" data-testid="nav-womens-fashion">Women's Fashion</li>
          <li className="cursor-pointer hover:text-primary transition-colors" data-testid="nav-home-kitchen">Home &amp; Kitchen</li>
          
          {/* Automotives Mega Menu Item */}
          <li className="group cursor-pointer hover:text-primary transition-colors h-full flex items-center" data-testid="nav-automotives">
            <span className="flex items-center gap-1">
              Automotives <ChevronDown className="h-4 w-4" />
            </span>
            
            {/* The Dropdown Panel */}
            <div className="absolute left-0 top-full w-full bg-white border-t-2 border-primary shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-6" data-testid="mega-menu-dropdown-automotives">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex gap-12 text-gray-800">
                
                {/* Column 1 */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Automotive Accessories</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Car & Vehicle Electronics</li>
                      <li className="hover:text-primary">Bluetooth Devices</li>
                      <li className="hover:text-primary">Car GPS Navigation</li>
                      <li className="text-primary hover:underline">View All &gt;</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Car Accessories</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Car Body Covers</li>
                      <li className="hover:text-primary">Car Mobile Chargers</li>
                      <li className="hover:text-primary">Car Mobile Holders</li>
                    </ul>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Car Fresheners</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Air Purifiers & Ionizers</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Biker Gear & Accessories</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Bike Body Covers</li>
                      <li className="hover:text-primary">Biker Protective Gear</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1 hover:text-primary">Biker Raincoats</h3>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Helmets & Accessories</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Helmet Accessories</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 border-b pb-1">Parts & Spares</h3>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-primary">Filters</li>
                      <li className="hover:text-primary">Lighting</li>
                      <li className="hover:text-primary">External Parts</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </li>

          <li className="cursor-pointer hover:text-primary transition-colors" data-testid="nav-mobile-accessories">Mobile Accessories</li>
          <li className="cursor-pointer hover:text-primary transition-colors" data-testid="nav-electronics">Electronics</li>
        </ul>
      </div>
    </div>
  );
}
