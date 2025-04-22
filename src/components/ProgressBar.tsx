
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  showPercentage?: boolean;
  animate?: boolean;
}

const ProgressBar = ({ value, max, className, showPercentage = true, animate = true }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(percentage);
    }
  }, [percentage, animate]);

  return (
    <div className={cn("w-full", className)}>
      <div className="h-3 w-full bg-purple-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full progress-bar-animation" 
          style={{ width: `${width}%` }}
        />
      </div>
      {showPercentage && (
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>{value.toLocaleString()} raised</span>
          <span>{percentage}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
