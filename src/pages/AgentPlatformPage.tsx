import React, { useState } from 'react';
import { Bot, Send, Loader2, Code, Terminal, CheckCircle2 } from 'lucide-react';

export function AgentPlatformPage() {
  const [concept, setConcept] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'java' | 'js' | 'ts' | 'python'>('ts');

  const handleExecute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept.trim()) return;

    setIsProcessing(true);
    setResult(null);

    // Simulate Agent processing time
    setTimeout(() => {
      setResult(`// Auto-generated Agent Script for: "${concept}"\n// This is a simulated output.\n\nawait page.goto('/');\nawait page.getByRole('button', { name: 'Submit' }).click();\nawait expect(page).toHaveTitle(/Success/);`);
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Bot className="h-8 w-8 text-primary" />
          Autonomous Agent Platform
        </h1>
        <p className="text-slate-400 text-lg">
          Describe a testing concept. The AI Agent will analyze the request and generate the automation logic across multiple languages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Command the Agent
            </h2>
            <form onSubmit={handleExecute} className="space-y-4">
              <div>
                <label htmlFor="concept" className="block text-sm font-medium text-slate-300 mb-2">
                  Testing Concept / Objective
                </label>
                <textarea
                  id="concept"
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  placeholder="e.g., Navigate to the login page, enter 'admin' and 'password123', and verify the dashboard loads."
                  className="w-full h-32 bg-slate-950 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={!concept.trim() || isProcessing}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Agent is thinking...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Deploy Agent
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
             <h3 className="text-lg font-medium text-white flex items-center gap-2">
               <CheckCircle2 className="h-5 w-5 text-green-400" />
               Agent Capabilities
             </h3>
             <ul className="space-y-3 text-slate-400 text-sm">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Cross-language generation (Java, JS, TS, Python)</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Auto-healing locators</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Dynamic wait strategies</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Context-aware assertions</li>
             </ul>
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl flex flex-col h-full min-h-[500px] shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/50">
              <div className="flex items-center gap-2 text-white font-medium">
                <Code className="h-5 w-5 text-primary" />
                Agent Output
              </div>
              <div className="flex gap-1 bg-slate-900 rounded-lg p-1">
                {(['java', 'js', 'ts', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(lang)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === lang
                        ? 'bg-primary text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 bg-[#0d1117] relative">
              {!result && !isProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                  <Bot className="h-16 w-16 mb-4 opacity-20" />
                  <p>Awaiting concept input...</p>
                </div>
              )}
              
              {isProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                  <Loader2 className="h-12 w-12 animate-spin mb-4" />
                  <p className="animate-pulse">Synthesizing instructions into code...</p>
                </div>
              )}

              {result && !isProcessing && (
                <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap animate-fade-in">
                  <code className="language-typescript">
                    {activeTab === 'java' && result.replace(/await page/g, 'driver').replace(/goto/g, 'get')}
                    {activeTab === 'js' && result}
                    {activeTab === 'ts' && result}
                    {activeTab === 'python' && result.replace(/await page\./g, 'page.').replace(/goto/g, 'goto')}
                  </code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
