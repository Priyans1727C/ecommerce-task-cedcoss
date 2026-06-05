import { useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-xl bg-foreground px-4 py-3 text-sm text-background shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4">
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="rounded-full p-0.5 hover:bg-background/20 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}