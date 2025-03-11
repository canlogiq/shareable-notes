
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export interface Note {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NoteContextType {
  currentNote: Note | null;
  savedNotes: Note[];
  createNote: () => void;
  updateNoteContent: (content: string) => void;
  saveNote: () => void;
  shareNote: () => void;
  generateRandomNote: () => void;
  clearNote: () => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

const DEFAULT_NOTES = [
  {
    id: '1',
    content: 'Welcome to Notes.io! This is a sample note to get you started.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const NoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [savedNotes, setSavedNotes] = useState<Note[]>(DEFAULT_NOTES);

  // Load notes from localStorage on first render
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        // Convert string dates back to Date objects
        const notesWithDateObjects = parsedNotes.map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
        setSavedNotes(notesWithDateObjects);
      } catch (error) {
        console.error('Error parsing stored notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  const createNote = () => {
    const newNote = {
      id: Date.now().toString(),
      content: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setCurrentNote(newNote);
  };

  const updateNoteContent = (content: string) => {
    if (currentNote) {
      setCurrentNote({
        ...currentNote,
        content,
        updatedAt: new Date(),
      });
    }
  };

  const saveNote = () => {
    if (!currentNote || !currentNote.content.trim()) {
      toast('Cannot save empty note', {
        description: 'Please add some content to your note',
      });
      return;
    }

    const noteToSave = { ...currentNote, updatedAt: new Date() };
    
    // Check if we're updating an existing note or adding a new one
    const existingNoteIndex = savedNotes.findIndex(note => note.id === currentNote.id);
    
    if (existingNoteIndex >= 0) {
      // Update existing note
      const updatedNotes = [...savedNotes];
      updatedNotes[existingNoteIndex] = noteToSave;
      setSavedNotes(updatedNotes);
    } else {
      // Add new note
      setSavedNotes(prev => [noteToSave, ...prev]);
    }
    
    toast('Note saved successfully', {
      description: 'Your note has been saved',
    });
  };

  const shareNote = () => {
    if (!currentNote || !currentNote.content.trim()) {
      toast('Cannot share empty note', {
        description: 'Please add some content to your note',
      });
      return;
    }
    
    // In a real implementation, we would generate a shareable link
    // For now, we'll just simulate it by showing a toast
    
    navigator.clipboard.writeText(
      `${window.location.origin}/share/${currentNote.id}\n\n${currentNote.content}`
    )
      .then(() => {
        toast('Share link copied!', {
          description: 'A link to your note has been copied to clipboard',
        });
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
        toast('Error sharing note', {
          description: 'Could not generate share link',
        });
      });
  };

  const generateRandomNote = () => {
    const randomNotes = [
      "Remember to pick up groceries after work!",
      "Call mom for her birthday tomorrow",
      "The meeting has been moved to 3PM",
      "Don't forget to submit the report by Friday",
      "Movie night this Saturday at 8PM",
    ];
    
    const randomContent = randomNotes[Math.floor(Math.random() * randomNotes.length)];
    
    const newNote = {
      id: Date.now().toString(),
      content: randomContent,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setCurrentNote(newNote);
    
    toast('Random note generated', {
      description: 'Feel free to edit it!',
    });
  };

  const clearNote = () => {
    setCurrentNote(null);
  };

  return (
    <NoteContext.Provider
      value={{
        currentNote,
        savedNotes,
        createNote,
        updateNoteContent,
        saveNote,
        shareNote,
        generateRandomNote,
        clearNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }
  return context;
};
