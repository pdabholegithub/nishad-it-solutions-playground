import { useState } from 'react';
import { Button } from '../components/ui/Button';

export function InteractionsPage() {
  const [clickState, setClickState] = useState('');
  const [keyPress, setKeyPress] = useState('');

  const onDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'Draggable Element');
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setClickState(`Dropped: ${data}`);
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="page-title">Interactions</h1>
        <p className="text-gray-500 mt-2">Practice mouse and keyboard interactions.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-6">
          <section className="space-y-4 border-b pb-6">
            <h2 className="text-xl font-semibold">Mouse Events</h2>
            <div className="flex gap-4 flex-wrap">
              <Button 
                onDoubleClick={() => setClickState('Double Clicked')} 
                data-testid="btn-double-click">
                Double Click Me
              </Button>
              <Button 
                variant="outline" 
                onContextMenu={(e) => { e.preventDefault(); setClickState('Right Clicked (Context Menu)'); }}
                data-testid="btn-right-click">
                Right Click Me
              </Button>
            </div>
            
            <div className="mt-4 relative group inline-block">
              <span className="text-primary font-medium cursor-help" data-testid="text-hover">Hover over me</span>
              <div className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-slate-900 text-white text-sm py-1 px-2 rounded" data-testid="tooltip-hover">
                Hidden Tooltip!
              </div>
            </div>
            
            <div className="mt-2 text-sm font-medium text-blue-600" data-testid="click-result">
              Action Result: {clickState || 'None'}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Keyboard Events</h2>
            <div className="space-y-2">
              <label htmlFor="key-input" className="text-sm font-medium">Press a key (Enter, Escape, etc.)</label>
              <input 
                id="key-input"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                onKeyDown={(e) => setKeyPress(e.key)}
                data-testid="input-keyboard"
                placeholder="Type something..."
              />
            </div>
            <div className="text-sm font-medium text-green-600" data-testid="key-result">
              Last key pressed: {keyPress || 'None'}
            </div>
          </section>
        </div>

        <div className="space-y-6 border-l pl-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Drag and Drop</h2>
            <div className="flex flex-col gap-6">
              <div 
                className="p-4 bg-primary/10 border-2 border-primary border-dashed rounded-lg cursor-move text-center font-medium"
                draggable
                onDragStart={onDragStart}
                data-testid="draggable-element"
              >
                Drag Me
              </div>
              <div 
                className="p-10 bg-slate-50 border-2 border-slate-300 border-dashed rounded-lg flex items-center justify-center min-h-[150px]"
                onDragOver={onDragOver}
                onDrop={onDrop}
                data-testid="droppable-area"
              >
                <span className="text-slate-400">Drop Here</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
