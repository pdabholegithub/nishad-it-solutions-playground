import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

export function WizardPage() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = 'Wizard Checkout | Nishad IT Playground';
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitForm = () => {
    alert('Checkout Complete!');
    setStep(1); // Reset
  };

  return (
    <div className="max-w-3xl space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="wizard-page-title">Multi-Step Checkout Wizard</h1>
        <p className="text-gray-500 mt-2">Test state persistence and dynamic form validation across multiple views.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {/* Progress Bar */}
        <div className="flex items-center mb-8">
          <div className="flex-1 text-center">
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`} data-testid="step-1-indicator">1</div>
            <p className="mt-2 text-sm font-medium">Personal Details</p>
          </div>
          <div className={`flex-1 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className="flex-1 text-center">
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`} data-testid="step-2-indicator">2</div>
            <p className="mt-2 text-sm font-medium">Shipping</p>
          </div>
          <div className={`flex-1 h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className="flex-1 text-center">
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`} data-testid="step-3-indicator">3</div>
            <p className="mt-2 text-sm font-medium">Payment</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="min-h-[250px]" data-testid={`wizard-step-${step}`}>
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h2 className="text-xl font-bold">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input name="firstName" value={formData.firstName} onChange={handleChange} data-testid="wizard-firstname" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input name="lastName" value={formData.lastName} onChange={handleChange} data-testid="wizard-lastname" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} data-testid="wizard-email" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h2 className="text-xl font-bold">Shipping Address</h2>
              <div className="space-y-2">
                <Label>Address Line 1</Label>
                <Input name="address" value={formData.address} onChange={handleChange} data-testid="wizard-address" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input name="city" value={formData.city} onChange={handleChange} data-testid="wizard-city" />
                </div>
                <div className="space-y-2">
                  <Label>Zip Code</Label>
                  <Input name="zip" value={formData.zip} onChange={handleChange} data-testid="wizard-zip" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h2 className="text-xl font-bold">Payment Setup</h2>
              <div className="space-y-2">
                <Label>Card Number</Label>
                <Input name="cardNumber" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleChange} data-testid="wizard-card-number" />
              </div>
              <div className="space-y-2 max-w-[200px]">
                <Label>Expiry Date</Label>
                <Input name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} data-testid="wizard-expiry" />
              </div>
              
              <div className="bg-slate-50 p-4 border rounded mt-6">
                <h3 className="font-bold mb-2">Review Summary</h3>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li><strong>Name:</strong> {formData.firstName} {formData.lastName}</li>
                  <li><strong>Address:</strong> {formData.address}, {formData.city}</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t">
          <Button variant="outline" onClick={prevStep} disabled={step === 1} data-testid="wizard-btn-prev">
            Previous
          </Button>
          {step < 3 ? (
            <Button onClick={nextStep} data-testid="wizard-btn-next">
              Next Step
            </Button>
          ) : (
            <Button onClick={submitForm} data-testid="wizard-btn-submit">
              Complete Order
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
