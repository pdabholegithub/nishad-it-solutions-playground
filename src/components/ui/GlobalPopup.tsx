import { useState, useEffect } from 'react';
import { Button } from './Button';
import { X } from 'lucide-react';

export function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenGlobalPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenGlobalPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubscribed(true);
    setTimeout(() => setIsOpen(false), 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" data-testid="global-overlay">
      <div className="relative w-full max-w-md bg-white p-8 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200" data-testid="global-popup-content">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          data-testid="global-popup-close-icon"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-2xl">🎁</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900" data-testid="global-popup-title">
            Special Offer!
          </h2>
          <p className="text-sm text-slate-500 pb-2">
            Subscribe to our newsletter to receive an exclusive 20% automation testing knowledge boost directly to your inbox.
          </p>

          {subscribed ? (
            <div className="py-4 text-green-600 font-semibold text-base" data-testid="global-popup-success">
              🎉 Thanks for subscribing! Check your inbox soon.
            </div>
          ) : (
            <div className="space-y-3">
              <div className="space-y-1 text-left">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${emailError ? 'border-destructive bg-destructive/5' : 'border-input bg-background'}`}
                  data-testid="global-popup-email-input"
                />
                {emailError && (
                  <p className="text-xs text-destructive font-medium pl-1" data-testid="global-popup-email-error">
                    {emailError}
                  </p>
                )}
              </div>
              <Button className="w-full font-bold" onClick={handleSubscribe} data-testid="global-popup-submit-btn">
                Subscribe Now
              </Button>
              <button
                className="mt-2 text-sm text-slate-500 hover:text-slate-800 underline"
                onClick={() => setIsOpen(false)}
                data-testid="global-popup-dismiss-link"
              >
                No thanks, I don't want free knowledge
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
