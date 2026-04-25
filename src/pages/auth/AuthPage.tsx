import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';

type AuthView = 'login' | 'signup' | 'forgot-password';

export function AuthPage() {
  const [view, setView] = useState<AuthView>('login');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Authentication | Nishad IT Playground';
  }, []);

  const renderForm = () => {
    switch (view) {
      case 'login':
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setErrorMsg('Invalid credentials mock error'); }} data-testid="login-form">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" autoComplete="email" required data-testid="login-email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="current-password" required data-testid="login-password" />
            </div>
            {errorMsg && <p className="text-sm font-medium text-destructive" data-testid="login-error">{errorMsg}</p>}
            <Button type="submit" className="w-full" data-testid="login-submit">Login</Button>
            <div className="flex justify-between text-sm">
              <button type="button" className="text-primary hover:underline" onClick={() => { setView('forgot-password'); setErrorMsg(''); }} data-testid="link-forgot-password">Forgot password?</button>
              <button type="button" className="text-primary hover:underline" onClick={() => { setView('signup'); setErrorMsg(''); }} data-testid="link-signup">Create account</button>
            </div>
          </form>
        );
      case 'signup':
        return (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} data-testid="signup-form">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" autoComplete="name" required data-testid="signup-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" autoComplete="email" required data-testid="signup-email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="new-password" required data-testid="signup-password" />
            </div>
            <Button type="submit" className="w-full" data-testid="signup-submit">Sign Up</Button>
            <div className="text-center text-sm">
              <button type="button" className="text-primary hover:underline" onClick={() => setView('login')} data-testid="link-login">Back to login</button>
            </div>
          </form>
        );
      case 'forgot-password':
        return (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} data-testid="forgot-password-form">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="m@example.com" autoComplete="email" required data-testid="forgot-password-email" />
            </div>
            <Button type="submit" className="w-full" data-testid="forgot-password-submit">Send Reset Link</Button>
            <div className="text-center text-sm">
              <button type="button" className="text-primary hover:underline" onClick={() => setView('login')} data-testid="link-back-login">Back to login</button>
            </div>
          </form>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6 mt-10 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold" data-testid="auth-page-title">
          {view === 'login' && 'Sign in to your account'}
          {view === 'signup' && 'Create your account'}
          {view === 'forgot-password' && 'Reset Password'}
        </h1>
        <p className="text-sm text-gray-500">Enter your details below.</p>
      </div>
      {renderForm()}
    </div>
  );
}
