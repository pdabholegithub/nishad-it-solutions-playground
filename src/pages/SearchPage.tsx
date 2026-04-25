import { useState, useEffect } from 'react';
import { Input } from '../components/ui/Input';
import { Search } from 'lucide-react';

const MOCK_DB = [
  'Apple iPhone 15 Pro',
  'Samsung Galaxy S24',
  'Google Pixel 8 Pro',
  'Sony PlayStation 5',
  'Microsoft Xbox Series X',
  'Nintendo Switch OLED',
  'Apple MacBook Pro M3',
  'Dell XPS 15',
  'Asus ROG Zephyrus',
  'Logitech MX Master 3',
  'Keychron Q1 Pro',
  'LG C3 OLED TV'
];

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    document.title = 'Autocomplete | Nishad IT Playground';
  }, []);

  useEffect(() => {
    // 500ms Debounce Logic
    if (query.trim().length === 0) {
      setResults([]);
      setIsSearching(false);
      setDropdownVisible(false);
      return;
    }

    setIsSearching(true);
    setDropdownVisible(true);

    const timer = setTimeout(() => {
      const filtered = MOCK_DB.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-3xl space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="search-page-title">Autocomplete Search</h1>
        <p className="text-gray-500 mt-2">Test debounce logic, keyboard navigation, and dynamic dropdown list states.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[400px]">
        <div className="relative max-w-lg mx-auto mt-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              className="pl-10 h-14 text-lg shadow-sm"
              placeholder="Search products (e.g. Apple, Pro)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => { if(query) setDropdownVisible(true); }}
              data-testid="search-input"
            />
          </div>

          {dropdownVisible && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200" data-testid="search-dropdown">
              {isSearching ? (
                <div className="p-4 text-center text-sm text-gray-500" data-testid="search-loading">
                  Searching mock database...
                </div>
              ) : results.length > 0 ? (
                <ul className="max-h-60 overflow-auto py-1 text-base sm:text-sm">
                  {results.map((result, idx) => (
                    <li 
                      key={idx} 
                      className="cursor-pointer select-none relative py-3 pl-4 pr-9 hover:bg-slate-50 hover:text-primary transition-colors border-b last:border-0"
                      onClick={() => {
                        setQuery(result);
                        setDropdownVisible(false);
                      }}
                      data-testid={`search-result-${idx}`}
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-sm text-gray-500" data-testid="search-no-results">
                  No products found matching "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
