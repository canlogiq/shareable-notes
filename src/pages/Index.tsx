
import React from 'react';
import NoteArea from '@/components/NoteArea';
import { NoteProvider } from '@/context/NoteContext';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen wood-texture p-4">
      <div className="max-w-4xl mx-auto mb-4 text-center">
        <h1 className="text-2xl font-semibold text-slate-800 drop-shadow-md bg-white/60 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Welcome to vnotes.cc
        </h1>
      </div>
      
      <NoteProvider>
        <NoteArea />
      </NoteProvider>
      
      <footer className="max-w-4xl mx-auto mt-8 text-center text-white/80 text-sm">
        <p className="bg-black/30 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Create and share simple notes with anyone, instantly.
        </p>
      </footer>
    </div>
  );
};

export default Index;
