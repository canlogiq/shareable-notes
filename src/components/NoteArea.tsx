
import React from 'react';
import Header from './Header';
import NoteEditor from './NoteEditor';
import SharePopup from './SharePopup';
import { useNotes } from '@/context/NoteContext';
import { formatDate } from '@/utils/noteUtils';

const NoteArea: React.FC = () => {
  const { currentNote, saveNote, shortenedUrl, isSharePopupOpen, closeSharePopup } = useNotes();

  return (
    <div className="max-w-4xl mx-auto my-4 shadow-xl rounded-lg overflow-hidden transition-all duration-300 animate-fade-in">
      <Header />
      <NoteEditor />
      
      <div className="flex justify-between items-center px-4 py-2 bg-noteHeaderBg bg-opacity-80 text-xs text-gray-600 border-t border-gray-300">
        <div>
          {currentNote && (
            <span>Last updated: {formatDate(currentNote.updatedAt)}</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs">0 KB</span>
          <button 
            onClick={saveNote}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm text-gray-800 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
      
      <SharePopup 
        shortenedUrl={shortenedUrl} 
        isOpen={isSharePopupOpen} 
        onClose={closeSharePopup} 
      />
    </div>
  );
};

export default NoteArea;
