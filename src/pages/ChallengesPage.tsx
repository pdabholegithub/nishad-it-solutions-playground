import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export function ChallengesPage() {
  const [delayedElementReady, setDelayedElementReady] = useState(false);
  const [dynamicId, setDynamicId] = useState(`dynamic-${Math.random().toString(36).substring(2, 11)}`);
  
  const shadowHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Challenges | Nishad IT Playground';
  }, []);

  useEffect(() => {
    // Delayed Element Simulation
    const timer = setTimeout(() => {
      setDelayedElementReady(true);
    }, 4500);

    // Dynamic ID simulation
    const intervalId = setInterval(() => {
      setDynamicId(`dynamic-${Math.random().toString(36).substring(2, 11)}`);
    }, 2000);

    // Shadow DOM setup
    if (shadowHostRef.current && !shadowHostRef.current.shadowRoot) {
      const shadowRoot = shadowHostRef.current.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          .shadow-box { padding: 1rem; background: #e2e8f0; border-radius: 0.5rem; text-align: center; font-family: sans-serif; }
          button { background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; }
        </style>
        <div class="shadow-box">
          <h3>Inside Shadow DOM</h3>
          <p>This paragraph is hidden in the shadow root.</p>
          <button data-testid="shadow-btn">Click Me (Shadow)</button>
        </div>
      `;
    }

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="max-w-4xl space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="challenges-page-title">Automation Challenges</h1>
          <p className="text-gray-500 mt-2">Complex scenarios to test your framework capabilities.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="gap-2" data-testid="back-to-home-btn">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Delayed Rendering */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Delayed Rendering Element</h2>
        <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded">
          {!delayedElementReady ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-500" data-testid="spinner-delayed">Loading element (5s wait)...</span>
            </div>
          ) : (
            <div className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded" data-testid="delayed-element">
              I am finally here!
            </div>
          )}
        </div>
      </section>

      {/* Dynamic IDs */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Dynamic IDs</h2>
        <p className="text-sm text-gray-500 mb-4">The ID of the button below changes every 2 seconds. Use robust selectors!</p>
        <Button id={dynamicId} data-testid="btn-dynamic-id" onClick={() => alert('Clicked dynamic!')}>
          Current ID: {dynamicId}
        </Button>
      </section>

      {/* Shadow DOM */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Shadow DOM</h2>
        <div ref={shadowHostRef} data-testid="shadow-host"></div>
      </section>

      {/* IFrame */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">iFrame Handling</h2>
        <div className="aspect-video w-full border rounded overflow-hidden">
           <iframe 
             src="https://example.com" 
             className="w-full h-full" 
             title="Example Iframe"
             data-testid="challenge-iframe"
           ></iframe>
        </div>
      </section>
    </div>
  );
}
