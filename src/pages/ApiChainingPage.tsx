import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Link2, Key, UserPlus, FileText, Trash2, Send, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ApiLog {
  timestamp: string;
  method: string;
  endpoint: string;
  status: number;
  requestBody?: any;
  responseBody: any;
}

export function ApiChainingPage() {
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [students, setStudents] = useState<any[]>(() => {
    const saved = localStorage.getItem('api_chaining_students');
    return saved ? JSON.parse(saved) : [];
  });
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'API Chaining Mastery | Nishad IT Playground';
  }, []);

  useEffect(() => {
    localStorage.setItem('api_chaining_students', JSON.stringify(students));
  }, [students]);

  const addLog = (method: string, endpoint: string, status: number, responseBody: any, requestBody?: any) => {
    const newLog: ApiLog = {
      timestamp: new Date().toLocaleTimeString(),
      method,
      endpoint,
      status,
      requestBody,
      responseBody
    };
    setLogs(prev => [newLog, ...prev].slice(0, 5));
  };

  // --- MOCK API HANDLERS ---

  const handleAuth = () => {
    const newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.QA_EXPERT_TOKEN';
    setToken(newToken);
    addLog('POST', '/api/auth/token', 200, { token: newToken, expires_in: 3600 });
  };

  const validateHeaders = (headers: any) => {
    if (headers?.['X-Client-Type'] !== 'Automation-Suite') {
       return { valid: false, error: 'Bad Request: Missing or invalid X-Client-Type header' };
    }
    return { valid: true };
  };

  const handleCreate = (name: string, headers?: any) => {
    if (!token) {
      addLog('POST', '/api/students', 401, { error: 'Unauthorized: Missing Token' });
      return;
    }
    
    const headerCheck = validateHeaders(headers);
    if (!headerCheck.valid) {
      addLog('POST', '/api/students', 400, { error: headerCheck.error }, { headers });
      return;
    }

    if (!name || name.trim() === '') {
      addLog('POST', '/api/students', 400, { error: 'Bad Request: Name is required' });
      return;
    }

    const newStudent = { id: Math.floor(Math.random() * 9000) + 1000, name, course: 'Automation Mastery', grade: 'Pending' };
    setStudents(prev => [...prev, newStudent]);
    addLog('POST', '/api/students', 201, newStudent, { name, headers });
  };

  const handleGet = (id: number, queryParams?: string) => {
    if (!token) {
      addLog('GET', `/api/students${id ? `/${id}` : ''}${queryParams ? `?${queryParams}` : ''}`, 401, { error: 'Unauthorized' });
      return;
    }

    if (id) {
      const student = students.find(s => s.id === id);
      if (student) {
        addLog('GET', `/api/students/${id}`, 200, student);
      } else {
        addLog('GET', `/api/students/${id}`, 404, { error: 'Student Not Found' });
      }
    } else if (queryParams) {
      const search = new URLSearchParams(queryParams).get('name')?.toLowerCase();
      const filtered = students.filter(s => s.name.toLowerCase().includes(search || ''));
      addLog('GET', `/api/students?${queryParams}`, 200, filtered);
    } else {
      addLog('GET', '/api/students', 200, students);
    }
  };

  const handlePatch = (id: number, updates: any) => {
    if (!token) {
      addLog('PATCH', `/api/students/${id}`, 401, { error: 'Unauthorized' });
      return;
    }
    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex > -1) {
      const updatedStudents = [...students];
      updatedStudents[studentIndex] = { ...updatedStudents[studentIndex], ...updates };
      setStudents(updatedStudents);
      addLog('PATCH', `/api/students/${id}`, 200, updatedStudents[studentIndex], updates);
    } else {
      addLog('PATCH', `/api/students/${id}`, 404, { error: 'Not Found' });
    }
  };

  const handleDelete = (id: number) => {
    if (!token) {
      addLog('DELETE', `/api/students/${id}`, 401, { error: 'Unauthorized' });
      return;
    }
    const exists = students.some(s => s.id === id);
    if (exists) {
      setStudents(prev => prev.filter(s => s.id !== id));
      addLog('DELETE', `/api/students/${id}`, 200, { message: 'Successfully Deleted' });
    } else {
      addLog('DELETE', `/api/students/${id}`, 404, { error: 'Not Found' });
    }
  };

  return (
    <div className="max-w-6xl space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="api-chain-title">API Mastery Lab</h1>
          <p className="text-gray-500 mt-2">Practice complex API chaining, authentication, and multi-step automation journeys.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Scenario Description */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Link2 className="h-5 w-5" />
              <h2 className="text-xl font-bold uppercase tracking-tight">The Automation Roadmap</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>In a complete API automation journey, you should implement the following test suites using your preferred framework (Playwright, Postman, Rest Assured, or Python):</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                 <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                    <h4 className="font-bold text-emerald-800 mb-2">✅ Happy Path Journey</h4>
                    <ol className="list-decimal pl-4 space-y-1 text-emerald-700 text-xs">
                      <li><strong>POST</strong> /auth/token ➡️ Get Token</li>
                      <li><strong>POST</strong> /students ➡️ Create with Token</li>
                      <li><strong>GET</strong> /students/{"{id}"} ➡️ Verify Data</li>
                      <li><strong>DELETE</strong> /students/{"{id}"} ➡️ Cleanup</li>
                    </ol>
                 </div>
                 <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">❌ Advanced/Negative</h4>
                    <ul className="list-disc pl-4 space-y-1 text-red-700 text-xs">
                      <li>Access GET /students/{"{id}"} <strong>without</strong> Token (401)</li>
                      <li>POST student <strong>without</strong> <code>X-Client-Type</code> header (400)</li>
                      <li><strong>PATCH</strong> /students/{"{id}"} ➡️ Partial Update</li>
                      <li><strong>GET</strong> /students?name=John ➡️ Query Filtering</li>
                    </ul>
                 </div>
              </div>

              <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-xs overflow-x-auto mt-4">
                <p className="text-slate-500 mb-2">// Advanced Chaining logic</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li><strong>Custom Headers:</strong> All POST requests must include <code>X-Client-Type: Automation-Suite</code>.</li>
                  <li><strong>Partial Update:</strong> Use PATCH to update only the <code>grade</code> of an existing student.</li>
                  <li><strong>Filtering:</strong> Use query parameters (<code>?name=...</code>) to search for specific records.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Interactive Endpoints */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Key className="h-4 w-4 text-amber-500" />
                Step 1: Get Token
              </div>
              <Button onClick={handleAuth} className="w-full bg-slate-900 hover:bg-slate-800" data-testid="api-auth-btn">
                POST /api/auth/token
              </Button>
              {token && <div className="p-2 bg-amber-50 text-[10px] font-mono break-all border border-amber-200 rounded">Token: {token}</div>}
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <UserPlus className="h-4 w-4 text-emerald-500" />
                Step 2: Create (With Header)
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleCreate('John Doe', { 'X-Client-Type': 'Automation-Suite' })} 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-[10px]"
                  data-testid="api-create-valid-btn"
                >
                  POST Valid
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleCreate('John Doe', {})} 
                  className="flex-1 text-[10px]"
                  data-testid="api-create-invalid-btn"
                >
                  POST No Header
                </Button>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Search className="h-4 w-4 text-blue-500" />
                Step 3: Query & Filter
              </div>
              <Button 
                onClick={() => handleGet(0, 'name=John')} 
                className="w-full bg-blue-600 hover:bg-blue-700"
                data-testid="api-filter-btn"
              >
                GET /students?name=John
              </Button>
            </div>

            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <FileText className="h-4 w-4 text-violet-500" />
                Step 4: Partial Update
              </div>
              <Button 
                onClick={() => students[0] && handlePatch(students[0].id, { grade: 'A++' })} 
                disabled={students.length === 0}
                className="w-full bg-violet-600 hover:bg-violet-700"
                data-testid="api-patch-btn"
              >
                PATCH /students/{students[0]?.id || 'ID'}
              </Button>
            </div>
          </div>

          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="font-bold mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-indigo-500" />
              Live Server State (Database)
            </h2>
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {students.map(s => (
                    <tr key={s.id}>
                      <td className="px-4 py-2 font-mono">{s.id}</td>
                      <td className="px-4 py-2 font-bold">{s.name}</td>
                      <td className="px-4 py-2 flex gap-2">
                        <button onClick={() => handleGet(s.id)} className="text-blue-600 hover:underline" data-testid={`api-get-${s.id}`}>GET</button>
                        <button onClick={() => handleDelete(s.id)} className="text-red-600 hover:underline" data-testid={`api-delete-${s.id}`}>DELETE</button>
                      </td>
                    </tr>
                  ))}
                  {students.length === 0 && <tr><td colSpan={3} className="px-4 py-8 text-center text-slate-400">Database is empty. Create a student to start.</td></tr>}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Live Traffic Log */}
        <div className="space-y-4">
          <h2 className="font-bold flex items-center gap-2 uppercase tracking-wider text-xs text-slate-500">
            <Send className="h-4 w-4" />
            Live Traffic Log
          </h2>
          <div className="space-y-3">
            {logs.map((log, i) => (
              <div key={i} className="bg-slate-900 rounded-lg p-4 font-mono text-[10px] space-y-2 border-l-4 border-primary">
                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-1">
                  <span>{log.timestamp}</span>
                  <span className={log.status >= 400 ? 'text-red-400' : 'text-green-400'}>{log.status}</span>
                </div>
                <div>
                  <span className="text-primary font-bold">{log.method}</span> {log.endpoint}
                </div>
                {log.requestBody && (
                  <div className="text-slate-500 italic">
                    Request: {JSON.stringify(log.requestBody)}
                  </div>
                )}
                <div className="text-emerald-400">
                  Response: {JSON.stringify(log.responseBody)}
                </div>
              </div>
            ))}
            {logs.length === 0 && <div className="text-center py-10 border-2 border-dashed rounded-lg text-slate-400 text-xs">No traffic captured.</div>}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setLogs([])}
            className="w-full text-slate-400 hover:text-slate-600"
          >
            Clear Logs
          </Button>
        </div>

      </div>
    </div>
  );
}
