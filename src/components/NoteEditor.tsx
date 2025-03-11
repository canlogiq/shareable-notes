
import React, { useRef, useEffect } from 'react';
import { useNotes } from '@/context/NoteContext';

const NoteEditor: React.FC = () => {
  const { currentNote, updateNoteContent, createNote } = useNotes();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea when component mounts or note changes
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [currentNote]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNoteContent(e.target.value);
  };

  const handleClick = () => {
    if (!currentNote) {
      createNote();
    }
  };

  return (
    <div 
      className="w-full h-full min-h-[300px] p-4 border-t border-yellow-400/30 overflow-auto note-paper"
      onClick={handleClick}
    >
      {currentNote ? (
        <textarea
          ref={textareaRef}
          className="note-textarea font-handwriting"
          value={currentNote.content}
          onChange={handleChange}
          placeholder="Write a note in this area. It's really easy to share with others. Click here ..."
          rows={10}
          autoFocus
        />
      ) : (
        <div className="w-full h-full flex items-start justify-center pt-10">
          <p className="text-gray-600 italic animate-pulse-subtle text-lg cursor-pointer">
            Write a note in this area. It's really easy to share with others. Click here ...
          </p>
        </div>
      )}
    </div>
  );
};

export default NoteEditor;
