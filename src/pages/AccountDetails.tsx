
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Key, Save } from 'lucide-react';

const AccountDetails: React.FC = () => {
  const [name, setName] = useState('Kullanıcı Adı');
  const [email, setEmail] = useState('ornek@mail.com');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save profile logic here
    console.log('Profile update attempt with:', { name, email, password });
  };

  return (
    <div className="min-h-screen wood-texture p-4">
      <div className="max-w-4xl mx-auto mb-4 text-center">
        <h1 className="text-2xl font-semibold text-slate-800 drop-shadow-md bg-white/60 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Üyelik Detayları
        </h1>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white/90 rounded-lg shadow-xl backdrop-blur-sm p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              v<span className="text-orange-500 font-bold">notes</span>.cc
            </h1>
          </Link>
          <div className="flex space-x-2">
            <Link 
              to="/" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/my-notes" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Notlarım
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-noteYellow/30 p-4 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-4">
                  <User size={64} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 text-sm">{email}</p>
                <div className="mt-4 w-full">
                  <Link 
                    to="/my-notes" 
                    className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Notlarımı Görüntüle
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Profili Düzenle</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">İsim</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="İsim" 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email" 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Yeni Şifre (Boş bırakın değiştirmek istemiyorsanız)</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Yeni Şifre" 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Save size={18} />
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">İstatistikler</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-orange-500">5</p>
                  <p className="text-gray-600 text-sm">Toplam Not</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-orange-500">12</p>
                  <p className="text-gray-600 text-sm">Görüntülenme</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-gray-600 text-sm">Paylaşılan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="max-w-4xl mx-auto mt-8 text-center text-white/80 text-sm">
        <p className="bg-black/30 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
          Create and share simple notes with anyone, instantly.
        </p>
      </footer>
    </div>
  );
};

export default AccountDetails;
