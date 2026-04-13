import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';

interface Post {
  id: number;
  title: string;
  body: string;
}

export function ApiIntegrationPage() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (shouldFail = false) => {
    setLoading(true);
    setError('');
    setData([]);
    
    try {
      // simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (shouldFail) {
        throw new Error('500 Internal Server Error (Simulated)');
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="page-title">API Integration</h1>
        <p className="text-gray-500 mt-2">Test asynchronous operations and loading states.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
        <div className="flex gap-4">
          <Button onClick={() => fetchData(false)} disabled={loading} data-testid="btn-fetch-success">
            {loading ? 'Fetching...' : 'Fetch Data Successfully'}
          </Button>
          <Button onClick={() => fetchData(true)} variant="destructive" disabled={loading} data-testid="btn-fetch-error">
            Fetch Data (Error)
          </Button>
        </div>

        <div className="min-h-[200px] border rounded-lg p-4 bg-slate-50 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80" data-testid="loading-spinner">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {!loading && error && (
            <div className="text-destructive font-medium p-4 bg-destructive/10 rounded-md" data-testid="api-error">
              Error: {error}
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <div className="space-y-4" data-testid="api-success">
              {data.map(post => (
                <div key={post.id} className="p-4 bg-white border border-gray-200 rounded shadow-sm" data-testid={`post-item-${post.id}`}>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.body}</p>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && data.length === 0 && (
            <div className="text-center text-gray-500 py-12" data-testid="api-idle">
              Click a button above to fetch data.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
