
import React from 'react';
import { 
  FileText, 
  Shuffle, 
  Paperclip, 
  Printer, 
  Send, 
  User, 
  Archive 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ActionType = 'Short' | 'Random' | 'Attach' | 'Print' | 'Send' | 'Account' | 'My Notes';

interface ActionButtonProps {
  type: ActionType;
  onClick: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick, className }) => {
  const getIcon = () => {
    switch (type) {
      case 'Short':
        return <FileText className="h-5 w-5" />;
      case 'Random':
        return <Shuffle className="h-5 w-5" />;
      case 'Attach':
        return <Paperclip className="h-5 w-5" />;
      case 'Print':
        return <Printer className="h-5 w-5" />;
      case 'Send':
        return <Send className="h-5 w-5" />;
      case 'Account':
        return <User className="h-5 w-5" />;
      case 'My Notes':
        return <Archive className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "action-button flex flex-col items-center justify-center p-2 rounded-md hover:bg-gray-200/50 transition-all",
        className
      )}
      aria-label={type}
    >
      <div className="rounded-full bg-white/80 p-2 shadow-sm mb-1 backdrop-blur">
        {getIcon()}
      </div>
      <span className="text-xs font-medium">{type}</span>
    </button>
  );
};

export default ActionButton;
