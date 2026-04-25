import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Checkbox } from '../components/ui/Checkbox';
import { ToggleSwitch } from '../components/ui/ToggleSwitch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function FormControlsPage() {
  const [sliderVal, setSliderVal] = useState(50);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    document.title = 'Form Controls | Nishad IT Playground';
  }, []);
  
  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="forms-page-title">Form Controls</h1>
          <p className="text-gray-500 mt-2">Interact with various form elements designed for automation testing.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="gap-2" data-testid="back-to-home-btn">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
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

        {/* Textarea, Slider, Rating & Color */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Other Controls</h2>
          <div className="space-y-2">
            <Label htmlFor="textarea">Comments</Label>
            <textarea id="textarea" className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="Leave a message..." data-testid="textarea-comments"></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-2">
              <Label htmlFor="slider">Slider Control ({sliderVal})</Label>
              <input 
                type="range" 
                id="slider" 
                min="0" max="100" 
                value={sliderVal} 
                onChange={(e) => setSliderVal(parseInt(e.target.value))} 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                data-testid="input-slider"
              />
            </div>
            <div className="space-y-2">
              <Label>Star Rating ({rating} Stars)</Label>
              <div className="flex gap-1" data-testid="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className={`transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-500`} 
                    data-testid={`star-${star}`}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <Label htmlFor="color-picker">Color Picker</Label>
            <div className="flex items-center gap-4">
              <input 
                type="color" 
                id="color-picker" 
                defaultValue="#f97316"
                className="h-12 w-12 rounded cursor-pointer border-none bg-transparent"
                data-testid="input-color"
              />
              <span className="text-sm text-gray-500 font-medium">Select a hex color code</span>
            </div>
          </div>
        </section>

        <Button className="w-full md:w-auto" data-testid="submit-form-btn">Submit Form</Button>

      </div>
    </div>
  );
}
