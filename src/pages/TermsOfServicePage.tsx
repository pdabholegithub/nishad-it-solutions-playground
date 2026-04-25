import { useEffect } from 'react';

export function TermsOfServicePage() {
  useEffect(() => {
    document.title = 'Terms of Service | Nishad IT Playground';
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="terms-page-title">Terms of Service</h1>
      <div className="prose prose-slate max-w-none bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-600">Last updated: April 25, 2026</p>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">1. Acceptable Use</h2>
          <p className="text-gray-600 leading-relaxed">
            By using Nishad IT Playground, you agree to use this site solely for testing and educational purposes. Any attempt to abuse the infrastructure or simulate malicious attacks is prohibited.
          </p>
        </section>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">2. Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">
            This application is provided "as is" for demonstration purposes. We do not guarantee the uptime or persistence of any data entered.
          </p>
        </section>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">3. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            Nishad IT Solutions shall not be liable for any damages arising out of the use or inability to use the playground.
          </p>
        </section>
      </div>
    </div>
  );
}
