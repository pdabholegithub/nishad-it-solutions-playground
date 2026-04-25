import { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowLeft, AlertTriangle, Image as ImageIcon, Link as LinkIcon, RefreshCw, Cookie, ArrowDownToLine, FileDigit, Layers, ExternalLink, MousePointerClick, Menu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MasteryChallengesPage() {
  const [clickCount, setClickCount] = useState(0);
  const [isClickable, setIsClickable] = useState(false);
  const [delayRemaining, setDelayRemaining] = useState(0);
  const [svgColor, setSvgColor] = useState('#94a3b8');
  const [cookieValue, setCookieValue] = useState('');
  
  const nestedShadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Mastery Challenges | Nishad IT Playground';
    
    // Deep Shadow DOM Setup
    if (nestedShadowRef.current && !nestedShadowRef.current.shadowRoot) {
      const root1 = nestedShadowRef.current.attachShadow({ mode: 'open' });
      root1.innerHTML = `
        <div style="padding: 1rem; border: 2px solid #3b82f6; border-radius: 0.5rem; background: #eff6ff;">
          <h4 style="margin-top: 0; color: #1e40af;">Shadow Level 1</h4>
          <div id="nested-host"></div>
        </div>
      `;
      
      const host2 = root1.querySelector('#nested-host');
      if (host2) {
        const root2 = host2.attachShadow({ mode: 'open' });
        root2.innerHTML = `
          <div style="padding: 1rem; border: 2px dashed #f97316; border-radius: 0.5rem; background: #fff7ed; margin-top: 1rem;">
            <h4 style="margin-top: 0; color: #9a3412;">Shadow Level 2 (Nested)</h4>
            <button id="deep-btn" style="background: #f97316; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;" data-testid="deep-shadow-btn">
              Find Me If You Can!
            </button>
          </div>
        `;
        root2.querySelector('#deep-btn')?.addEventListener('click', () => {
          window.alert('Mastery Unlocked: You found the deep shadow button!');
        });
      }
    }
  }, []);

  const startTimer = () => {
    const delay = Math.floor(Math.random() * 5000) + 2000;
    setDelayRemaining(Math.round(delay / 1000));
    setIsClickable(false);
    
    let current = Math.round(delay / 1000);
    const interval = setInterval(() => {
      current -= 1;
      setDelayRemaining(current);
      if (current <= 0) {
        clearInterval(interval);
        setIsClickable(true);
      }
    }, 1000);
  };

  return (
    <div className="max-w-5xl space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="mastery-page-title">Mastery Challenges</h1>
          <p className="text-gray-500 mt-2">Elite-level automation scenarios for professional QA engineers.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Challenge 1: Deep Nested Shadow DOM */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-primary">
            <RefreshCw className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Shadow DOM Mastery</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-primary">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Access Hidden Elements</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Locate the host element <code className="bg-slate-200 px-1 rounded text-primary">[data-testid="nested-shadow-host"]</code>.</li>
               <li>Traverse into the first shadow root, then into the second nested shadow root.</li>
               <li>Click the button <code className="bg-slate-200 px-1 rounded text-primary">#deep-btn</code> and verify the browser alert.</li>
             </ol>
          </div>
          <div ref={nestedShadowRef} data-testid="nested-shadow-host"></div>
        </section>

        {/* Challenge 2: Broken Assets */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Asset Audit</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-red-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Identify 404s</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Iterate through all images and links in this section.</li>
               <li>Check the HTTP status code of each source/href.</li>
               <li>Assert that the "Broken" assets indeed return a non-200 status.</li>
             </ol>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded bg-slate-50 flex flex-col items-center gap-2">
              <ImageIcon className="h-6 w-6 text-slate-400" />
              <img src="/api/placeholder/1/1" alt="Broken" className="h-0 w-0" />
              <span className="text-xs font-medium text-red-500" data-testid="broken-img-link">Broken Image</span>
            </div>
            <div className="p-3 border rounded bg-slate-50 flex flex-col items-center gap-2">
              <LinkIcon className="h-6 w-6 text-slate-400" />
              <a href="/404-broken-link" className="text-xs font-medium text-blue-600 underline" data-testid="broken-url">Broken Link</a>
            </div>
          </div>
        </section>

        {/* Challenge 3: SVG Interaction */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-600">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            <h2 className="text-xl font-bold uppercase tracking-tight">SVG Mastery</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-emerald-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: SVG Path Targeting</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Identify the SVG element with <code className="bg-slate-200 px-1 rounded text-emerald-700">data-testid="challenge-svg"</code>.</li>
               <li>Target the inner <code className="bg-slate-200 px-1 rounded text-emerald-700">&lt;circle&gt;</code> path.</li>
               <li>Click the circle and verify that the <code>fill</code> attribute changes.</li>
             </ol>
          </div>
          <div className="flex justify-center p-4 bg-slate-50 rounded-lg">
            <svg 
              width="100" height="100" viewBox="0 0 100 100" 
              className="cursor-pointer transition-colors duration-500"
              onClick={() => setSvgColor(svgColor === '#94a3b8' ? '#f97316' : '#94a3b8')}
              data-testid="challenge-svg"
            >
              <circle cx="50" cy="50" r="40" fill={svgColor} stroke="#475569" strokeWidth="4" />
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CLICK</text>
            </svg>
          </div>
        </section>

        {/* Challenge 4: Cookie Dependency */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-600">
            <Cookie className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Cookie Challenge</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-amber-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Session Manipulation</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Set a cookie in the browser: <code className="bg-slate-200 px-1 rounded text-amber-700">qa_master=expert</code>.</li>
               <li>Type "expert" into the input field <code className="bg-slate-200 px-1 rounded text-amber-700">[data-testid="cookie-input"]</code>.</li>
               <li>Click "Verify Session" and assert the successful alert.</li>
             </ol>
          </div>
          <div className="flex flex-col gap-3">
            <Input 
              placeholder="Set cookie value..." 
              value={cookieValue}
              onChange={(e: any) => setCookieValue(e.target.value)}
              className="max-w-[200px]"
              data-testid="cookie-input"
            />
            <Button 
              onClick={() => {
                if (cookieValue === 'expert') {
                  window.alert('Success! Cookie verified.');
                } else {
                  window.alert('Error: Invalid or missing cookie value.');
                }
              }}
              data-testid="cookie-verify-btn"
            >
              Verify Session
            </Button>
          </div>
        </section>

        {/* Challenge 5: File Download Mastery */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <ArrowDownToLine className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Download Mastery</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-blue-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: File Content Assertion</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Click the "Download Report" button.</li>
               <li>Wait for the file <code className="bg-slate-200 px-1 rounded text-blue-700">nishad-mastery-report.txt</code> to be downloaded.</li>
               <li>Read the file and verify it contains the word <code className="bg-slate-200 px-1 rounded text-blue-700">QA-MASTER-2026</code>.</li>
             </ol>
          </div>
          <div className="p-6 border-2 border-dotted rounded-xl bg-slate-50 flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FileDigit className="h-6 w-6 text-blue-600" />
            </div>
            <Button 
              onClick={() => {
                const element = document.createElement("a");
                const file = new Blob(["Mastery Challenge Completed! Token: QA-MASTER-2026"], {type: 'text/plain'});
                element.href = URL.createObjectURL(file);
                element.download = "nishad-mastery-report.txt";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
              className="w-full"
              data-testid="download-mastery-btn"
            >
              Download Report
            </Button>
            <span className="text-[10px] text-slate-400 font-mono italic">Filename: nishad-mastery-report.txt</span>
          </div>
        </section>

        {/* Challenge 10: Network Mocking Mastery */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2 text-violet-600">
            <Database className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Network Mocking</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-violet-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Intercept & Mock</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Click "Fetch Secret Data".</li>
               <li>Intercept the request to <code>/api/secret-data</code>.</li>
               <li>Mock the response to return <code>{"{ \"code\": \"MOCKED-2026\" }"}</code>.</li>
             </ol>
          </div>
          <div className="p-6 bg-slate-50 border-2 border-dotted rounded-xl flex flex-col items-center gap-4">
            {(() => {
              const [apiData, setApiData] = useState('');
              const [loading, setLoading] = useState(false);
              
              const fetchData = () => {
                setLoading(true);
                // Simulate fetch
                setTimeout(() => {
                  setApiData('REAL-DATA-SERVER');
                  setLoading(false);
                }, 1000);
              };

              return (
                <>
                  <Button onClick={fetchData} disabled={loading} data-testid="fetch-mock-btn">
                    {loading ? 'Fetching...' : 'Fetch Secret Data'}
                  </Button>
                  <div className="p-3 bg-white border rounded font-mono text-xs w-full text-center" data-testid="api-result">
                    Result: <span className={apiData.includes('MOCKED') ? 'text-green-600 font-bold' : 'text-slate-500'}>{apiData || 'No data'}</span>
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Challenge 11: Dynamic State Timing */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2 text-indigo-600">
            <RefreshCw className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Race Condition Simulation</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-indigo-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Synchronization</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Click "Start Challenge".</li>
               <li>Wait for the "Click Me Now!" button to become enabled.</li>
               <li>Click the button and verify the "Clicks" counter increases.</li>
             </ol>
          </div>
          <div className="flex flex-col items-center gap-6 p-8 border-2 border-dashed rounded-2xl bg-slate-50">
            {!isClickable && delayRemaining === 0 ? (
              <Button onClick={startTimer} data-testid="start-mastery-btn">Start Challenge</Button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="text-3xl font-black text-slate-300">
                  {isClickable ? 'READY!' : `WAITING... ${delayRemaining}s`}
                </div>
                <Button 
                  disabled={!isClickable}
                  onClick={() => setClickCount(c => c + 1)}
                  className={isClickable ? 'animate-bounce shadow-xl shadow-primary/40' : ''}
                  data-testid="mastery-clickable-btn"
                >
                  Click Me Now!
                </Button>
                <div className="text-sm font-bold text-primary" data-testid="mastery-click-count">Clicks: {clickCount}</div>
              </div>
            )}
          </div>
        </section>

        {/* Challenge 8: Multiple Windows/Tabs */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2 text-sky-600">
            <ExternalLink className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Window Management</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-sky-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Tab Switching</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Click "Open New Mastery Tab".</li>
               <li>Switch the automation context to the new window/tab.</li>
               <li>Verify the page title contains "Privacy" and switch back.</li>
             </ol>
          </div>
          <div className="flex justify-center p-6 bg-slate-50 border-2 border-dotted rounded-xl">
            <Button 
              variant="outline"
              onClick={() => window.open('#/privacy', '_blank')}
              data-testid="open-tab-btn"
            >
              Open New Mastery Tab
            </Button>
          </div>
        </section>

        {/* Challenge 9: Drag & Drop (Sortable) */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 lg:col-span-1">
          <div className="flex items-center gap-2 text-pink-600">
            <MousePointerClick className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">Sortable Mastery</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-pink-500">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Reorder Elements</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Drag "Item 3" from the bottom.</li>
               <li>Drop it at the top of the list.</li>
               <li>Verify that the first item in the list is now "Item 3".</li>
             </ol>
          </div>
          <div className="space-y-2 p-4 bg-slate-50 border-2 border-dotted rounded-xl">
            {['Item 1 (Top)', 'Item 2 (Middle)', 'Item 3 (Bottom)'].map((item, i) => (
              <div 
                key={i} 
                draggable 
                className="p-3 bg-white border rounded shadow-sm cursor-move flex items-center gap-3 hover:border-pink-300 transition-colors"
                data-testid={`sortable-item-${i+1}`}
              >
                <Menu className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge 10: High Density Data Table (Scrolling) */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2 text-indigo-600">
            <Layers className="h-5 w-5" />
            <h2 className="text-xl font-bold uppercase tracking-tight">High Density Table Mastery</h2>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg space-y-2 border-l-4 border-slate-600">
             <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">🎯 Goal: Complex Table Targeting</p>
             <ol className="text-sm text-slate-800 font-medium list-decimal pl-4 space-y-1">
               <li>Identify the table with <code className="bg-slate-200 px-1 rounded text-slate-700">data-testid="mastery-data-table"</code>.</li>
               <li>Scroll horizontally to the "Actions" column.</li>
               <li>Find row #15 and click its "Inspect" button.</li>
             </ol>
          </div>
          <p className="text-sm text-gray-500 font-medium italic">
            Automate horizontal scrolling to find the "Action" button in the last column of a specific row.
          </p>
          <div className="overflow-auto max-h-[300px] border rounded-lg relative" data-testid="mastery-table-container">
            <table className="w-full text-xs text-left" data-testid="mastery-data-table">
              <thead className="text-slate-700 uppercase bg-slate-100 sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 border-r min-w-[50px]">ID</th>
                  <th className="px-4 py-3 border-r min-w-[150px]">System Name</th>
                  <th className="px-4 py-3 border-r min-w-[100px]">Node</th>
                  <th className="px-4 py-3 border-r min-w-[100px]">CPU</th>
                  <th className="px-4 py-3 border-r min-w-[100px]">RAM</th>
                  <th className="px-4 py-3 border-r min-w-[100px]">Disk</th>
                  <th className="px-4 py-3 border-r min-w-[120px]">Uptime</th>
                  <th className="px-4 py-3 border-r min-w-[150px]">Last Updated</th>
                  <th className="px-4 py-3 border-r min-w-[100px]">Status</th>
                  <th className="px-4 py-3 min-w-[120px] sticky right-0 bg-slate-100 border-l shadow-[-4px_0_4px_rgba(0,0,0,0.05)]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {Array.from({ length: 20 }).map((_, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors" data-testid={`mastery-row-${i + 1}`}>
                    <td className="px-4 py-3 border-r font-mono">{i + 1}</td>
                    <td className="px-4 py-3 border-r font-bold">Node-Cluster-00{i + 1}</td>
                    <td className="px-4 py-3 border-r italic text-slate-500">us-east-1</td>
                    <td className="px-4 py-3 border-r">{(Math.random() * 100).toFixed(1)}%</td>
                    <td className="px-4 py-3 border-r">{(Math.random() * 64).toFixed(1)} GB</td>
                    <td className="px-4 py-3 border-r">{(Math.random() * 10).toFixed(1)} TB</td>
                    <td className="px-4 py-3 border-r font-mono">{Math.floor(Math.random() * 1000)}h</td>
                    <td className="px-4 py-3 border-r text-slate-400">2026-04-25 18:32:11</td>
                    <td className="px-4 py-3 border-r">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[9px]">HEALTHY</span>
                    </td>
                    <td className="px-4 py-3 sticky right-0 bg-white group-hover:bg-slate-50 border-l shadow-[-4px_0_4px_rgba(0,0,0,0.05)]">
                      <Button size="sm" variant="outline" className="h-7 text-[10px]" data-testid={`mastery-action-${i + 1}`}>Inspect</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}

// Simple internal Input component for the cookie challenge
function Input({ className, ...props }: any) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
