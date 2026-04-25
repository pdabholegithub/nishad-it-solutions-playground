import { useEffect } from 'react';

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Nishad IT Playground';
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="privacy-page-title">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-600">Last updated: April 25, 2026</p>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Nishad IT Playground. This privacy policy describes how we handle information in our QA testing environment. This is a demonstration site; we do not collect personal data from users beyond what is necessary for the simulated test scenarios.
          </p>
        </section>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">2. Data Collection</h2>
          <p className="text-gray-600 leading-relaxed">
            Since this is a testing playground, any data you enter into forms (like the authentication or checkout wizard) is stored only in the browser's local state or temporary mock variables. It is never sent to a real database or persistent storage.
          </p>
        </section>
        <section className="space-y-4 mt-6">
          <h2 className="text-xl font-bold text-gray-800">3. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We use browser storage (SessionStorage and LocalStorage) to manage your session and to remember if you have dismissed certain popups.
          </p>
        </section>
      </div>
    </div>
  );
}
