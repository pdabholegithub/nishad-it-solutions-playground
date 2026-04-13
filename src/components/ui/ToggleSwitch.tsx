import * as React from "react"
import { cn } from "../../utils/cn"

interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const ToggleSwitch = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" ref={ref} {...props} />
        <div className={cn(
          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary",
          className
        )}></div>
      </label>
    )
  }
)
ToggleSwitch.displayName = "ToggleSwitch"

export { ToggleSwitch }
