import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Checkbox } from '../components/ui/Checkbox';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import { useState, useEffect } from 'react';

export function FormControlsPage() {
  const [sliderVal, setSliderVal] = useState(50);

  useEffect(() => {
    document.title = 'Form Controls | Nishad IT Playground';
  }, []);
  
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="forms-page-title">Form Controls</h1>
        <p className="text-gray-500 mt-2">Interact with various form elements designed for automation testing.</p>
      </div>

      <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        
        {/* Text Inputs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Text Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="standard-input">Standard Text</Label>
              <Input id="standard-input" placeholder="Type here..." data-testid="input-text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error-input">Error State</Label>
              <Input id="error-input" error defaultValue="Invalid value" data-testid="input-error" />
              <p className="text-xs text-destructive">This field has an error.</p>
            </div>
          </div>
        </section>

        {/* Selections */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="single-select">Single Select</Label>
              <select id="single-select" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" data-testid="select-single">
                <option value="">Select an option</option>
                <option value="opt1">Option 1</option>
                <option value="opt2">Option 2</option>
                <option value="opt3">Option 3</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="multi-select">Multi Select</Label>
              <select id="multi-select" multiple className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" data-testid="select-multi">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
              </select>
            </div>
          </div>
        </section>

        {/* Radios & Checkboxes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Switches & Checks</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" data-testid="checkbox-terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input type="radio" id="radio1" name="radiogroup" value="1" data-testid="radio-1" className="text-primary focus:ring-primary h-4 w-4" />
                <Label htmlFor="radio1">Radio 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="radio2" name="radiogroup" value="2" data-testid="radio-2" className="text-primary focus:ring-primary h-4 w-4" />
                <Label htmlFor="radio2">Radio 2</Label>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <ToggleSwitch id="notifications" data-testid="toggle-notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </div>
        </section>

        {/* Dates & Files */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Dates & Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="datepicker">Date Picker</Label>
              <Input type="date" id="datepicker" data-testid="input-date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-upload">File Upload</Label>
              <Input type="file" id="file-upload" data-testid="input-file" />
            </div>
          </div>
        </section>

        {/* Textarea & Slider */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Other</h2>
          <div className="space-y-2">
            <Label htmlFor="textarea">Comments</Label>
            <textarea id="textarea" className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Leave a message..." data-testid="textarea-comments"></textarea>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="slider">Slider Control ({sliderVal})</Label>
            <input 
              type="range" 
              id="slider" 
              min="0" max="100" 
              value={sliderVal} 
              onChange={(e) => setSliderVal(parseInt(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              data-testid="input-slider"
            />
          </div>
        </section>

        <Button className="w-full md:w-auto" data-testid="submit-form-btn">Submit Form</Button>

      </div>
    </div>
  );
}
