
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Copy, Trash2 } from 'lucide-react';
import { useNotes } from '@/context/NoteContext';
import { truncateText, formatDate } from '@/utils/noteUtils';

const MyNotes: React.FC = () => {
  const { savedNotes } = useNotes();

  return (
    <div className="min-h-screen wood-texture p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl p-4 backdrop-blur-sm animate-fade-in mb-4">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                v<span className="text-orange-500 font-bold">notes</span>.cc
              </h1>
            </Link>
            <Link 
              to="/" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Create New Note
            </Link>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">My Notes</h2>
          
          {savedNotes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">You don't have any saved notes yet.</p>
              <Link 
                to="/" 
                className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Create Your First Note
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {savedNotes.map((note) => (
                <div 
                  key={note.id} 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-noteYellow/60"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-3">
                      <FileText className="text-gray-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">{truncateText(note.content, 100)}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Created: {formatDate(note.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        title="Copy note link"
                      >
                        <Copy size={18} className="text-gray-600" />
                      </button>
                      <button 
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        title="Open note"
                      >
                        <ExternalLink size={18} className="text-gray-600" />
                      </button>
                      <button 
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                        title="Delete note"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
