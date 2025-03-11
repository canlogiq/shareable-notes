
import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useNotes } from '@/context/NoteContext';
import ActionButton from './ActionButton';

const Header: React.FC = () => {
  const { createNote } = useNotes();
  const navigate = useNavigate();

  const handleAccount = () => {
    navigate('/account-details');
  };

  const handleMyNotes = () => {
    navigate('/my-notes');
  };

  return (
    <div className="bg-noteHeaderBg bg-opacity-90 rounded-t-lg shadow-sm backdrop-blur-sm border border-gray-300 animate-slide-down">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            v<span className="text-orange-500 font-bold">notes</span>.cc
          </h1>
          <p className="text-xs text-gray-500 italic hidden sm:block">fast.easy.short</p>
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          <ActionButton type="Short" onClick={createNote} />
          <ActionButton type="Account" onClick={handleAccount} />
          <ActionButton type="My Notes" onClick={handleMyNotes} />
        </div>
      </div>
    </div>
  );
};

export default Header;
