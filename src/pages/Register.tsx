
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Key, Mail, ArrowRight } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt with:', { name, email, password });
  };

  return (
    <div className="min-h-screen wood-texture p-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/90 rounded-lg shadow-xl backdrop-blur-sm p-6 animate-fade-in">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              v<span className="text-orange-500 font-bold">notes</span>.cc
            </h1>
          </Link>
          <p className="text-gray-600 mt-2">Create your vnotes account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
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
            <div className="relative">
              <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>
          
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center border-t border-gray-200 pt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
      
      <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-white/80 text-sm">
        <p className="bg-black/30 inline-block px-4 py-2 rounded-lg backdrop-blur-sm mx-auto">
          Create and share simple notes with anyone, instantly.
        </p>
      </footer>
    </div>
  );
};

export default Register;
