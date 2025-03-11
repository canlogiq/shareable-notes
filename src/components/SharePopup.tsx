
import React, { useState, useEffect } from 'react';
import { Link, Copy, CheckCircle2, X } from 'lucide-react';

interface SharePopupProps {
  shortenedUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const SharePopup: React.FC<SharePopupProps> = ({ shortenedUrl, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Link size={20} className="text-orange-500" />
            Shortened URL
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2">Your note has been saved and shortened:</p>
          
          <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md">
            <span className="text-orange-600 font-medium overflow-hidden overflow-ellipsis flex-1">
              {shortenedUrl}
            </span>
            <button
              onClick={handleCopy}
              className={`p-2 rounded-full ${copied ? 'bg-green-100 text-green-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-colors`}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Share this link with anyone to let them view your note.</p>
          </div>
        </div>
        
        <div className="bg-gray-50 px-4 py-3 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
