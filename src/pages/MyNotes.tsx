
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Copy, Trash2, Search, Plus, Tag, Filter } from 'lucide-react';
import { useNotes } from '@/context/NoteContext';
import { truncateText, formatDate } from '@/utils/noteUtils';

const MyNotes: React.FC = () => {
  const { savedNotes } = useNotes();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  // Bu sadece arayüz gösterimi için, normalde context'ten filtreleme yapılır
  const filteredNotes = savedNotes.filter(note => 
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen wood-texture p-4">
      <div className="max-w-4xl mx-auto mb-4 text-center">
        <h1 className="text-2xl font-semibold text-slate-800 drop-shadow-md bg-white/60 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Notlarım
        </h1>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-xl p-6 backdrop-blur-sm animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              v<span className="text-orange-500 font-bold">notes</span>.cc
            </h1>
          </Link>
          <div className="flex space-x-2">
            <Link 
              to="/account-details" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
            >
              Hesabım
            </Link>
            <Link 
              to="/" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-1"
            >
              <Plus size={16} />
              Yeni Not
            </Link>
          </div>
        </div>
        
        <div className="mb-6 bg-noteHeaderBg p-3 rounded-lg flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Notlarda ara..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={() => setFilterActive(!filterActive)}
            className={`px-4 py-2 rounded-md flex items-center gap-1 transition-colors ${
              filterActive 
                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <Filter size={16} />
            Filtrele
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors flex items-center gap-1"
          >
            <Tag size={16} />
            Etiketler
          </button>
        </div>
        
        {filteredNotes.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Henüz bir notunuz yok veya arama sonucu bulunamadı.</p>
            <Link 
              to="/" 
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              İlk Notunuzu Oluşturun
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <div 
                key={note.id} 
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-noteYellow/60"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    <FileText className="text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{truncateText(note.content, 100)}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">kişisel</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">iş</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Oluşturuldu: {formatDate(note.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                      title="Not bağlantısını kopyala"
                    >
                      <Copy size={18} className="text-gray-600" />
                    </button>
                    <button 
                      className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                      title="Notu aç"
                    >
                      <ExternalLink size={18} className="text-gray-600" />
                    </button>
                    <button 
                      className="p-1 hover:bg-red-100 rounded-full transition-colors"
                      title="Notu sil"
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredNotes.length > 0 && (
          <div className="mt-6 flex justify-between items-center text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
            <span>{filteredNotes.length} not görüntüleniyor</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Önceki
              </button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                1
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">
                Sonraki
              </button>
            </div>
          </div>
        )}
      </div>
      
      <footer className="max-w-4xl mx-auto mt-8 text-center text-white/80 text-sm">
        <p className="bg-black/30 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Create and share simple notes with anyone, instantly.
        </p>
      </footer>
    </div>
  );
};

export default MyNotes;
