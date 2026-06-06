import { useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div className="fixed left-1/2 top-5 z-50 flex w-max -translate-x-1/2 items-center gap-3 rounded-xl bg-foreground px-4 py-3 text-sm text-background shadow-lg transition-all animate-in fade-in slide-in-from-top-4">
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="rounded-full p-0.5 transition-colors hover:bg-background/20"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}