import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { X } from 'lucide-react';

export function AlertsPage() {
  const [alertResult, setAlertResult] = useState('');
  const [toasts, setToasts] = useState<{ id: number, message: string, type: 'success' | 'error' }[]>([]);

  const triggerAlert = () => {
    window.alert('This is a simple alert!');
    setAlertResult('Alert confirmed');
  };

  const triggerConfirm = () => {
    const result = window.confirm('Do you confirm this action?');
    setAlertResult(result ? 'Confirm: OK' : 'Confirm: Cancelled');
  };

  const triggerPrompt = () => {
    const result = window.prompt('Please enter your name:', 'Test User');
    setAlertResult(result !== null ? `Prompt: ${result}` : 'Prompt: Cancelled');
  };

  const triggerToast = (type: 'success' | 'error') => {
    const newToast = { id: Date.now(), message: `This is a ${type} toast message!`, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 4000);
  };

  const closeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-3xl space-y-8 relative pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="page-title">Alerts, Dialogs & Toasts</h1>
        <p className="text-gray-500 mt-2">Trigger un-stylable native JS alerts and dynamic fading toast notifications.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Native JavaScript Alerts</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button onClick={triggerAlert} data-testid="btn-js-alert">Trigger Alert</Button>
          <Button onClick={triggerConfirm} variant="secondary" data-testid="btn-js-confirm">Trigger Confirm</Button>
          <Button onClick={triggerPrompt} variant="outline" data-testid="btn-js-prompt">Trigger Prompt</Button>
        </div>

        <div className="p-4 bg-slate-50 rounded border border-slate-200 mb-10">
          <h3 className="font-semibold text-sm text-slate-500 mb-1">Result:</h3>
          <p className="font-medium text-lg" data-testid="alert-result">{alertResult || 'Awaiting action...'}</p>
        </div>

        <h2 className="text-xl font-semibold mb-4 border-t pt-6">Toast Notifications</h2>
        <div className="flex gap-4">
          <Button onClick={() => triggerToast('success')} className="bg-green-600 hover:bg-green-700 text-white" data-testid="btn-toast-success">
            Show Success Toast
          </Button>
          <Button onClick={() => triggerToast('error')} variant="destructive" data-testid="btn-toast-error">
            Show Error Toast
          </Button>
        </div>
      </div>

      {/* Toast Container rendered relative to screen */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none" data-testid="toast-container">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`pointer-events-auto flex items-center justify-between p-4 px-5 rounded-md shadow-lg min-w-[300px] text-white animate-in slide-in-from-right-full zoom-in duration-300 ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
            data-testid={`toast-${toast.type}`}
          >
            <span>{toast.message}</span>
            <button onClick={() => closeToast(toast.id)} className="ml-4 hover:opacity-75" data-testid={`toast-close-${toast.id}`}>
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
