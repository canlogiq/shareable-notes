
import React from 'react';
import { toast } from 'sonner';
import { useNotes } from '@/context/NoteContext';
import ActionButton from './ActionButton';

const Header: React.FC = () => {
  const { createNote, generateRandomNote, shareNote } = useNotes();

  const handleAttach = () => {
    toast('Attach feature', {
      description: 'This feature will be available in a future update.',
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAccount = () => {
    toast('Account feature', {
      description: 'Account management will be available in a future update.',
    });
  };

  const handleMyNotes = () => {
    toast('My Notes feature', {
      description: 'Your saved notes will be available in a future update.',
    });
  };

  return (
    <div className="bg-noteHeaderBg bg-opacity-90 rounded-t-lg shadow-sm backdrop-blur-sm border border-gray-300 animate-slide-down">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            notes<span className="text-orange-500 font-bold">.io</span>
          </h1>
          <p className="text-xs text-gray-500 italic hidden sm:block">fast.easy.short</p>
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          <ActionButton type="Short" onClick={createNote} />
          <ActionButton type="Random" onClick={generateRandomNote} />
          <ActionButton type="Attach" onClick={handleAttach} />
          <ActionButton type="Print" onClick={handlePrint} />
          <ActionButton type="Send" onClick={shareNote} />
          <ActionButton type="Account" onClick={handleAccount} />
          <ActionButton type="My Notes" onClick={handleMyNotes} />
        </div>
      </div>
    </div>
  );
};

export default Header;
