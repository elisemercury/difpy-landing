import React, { useState } from 'react';
import { Key, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Header from './Header';

const BetaAccess = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const hashPassword = (pwd) => {
    return CryptoJS.SHA256(pwd).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hash of 'beta123'
    const correctHash = 'd1fcb061a0c12ac572899469b29df4cb959ed14321dd71338ae6d573dd44c6b7';
    
    if (hashPassword(password) === correctHash) {
      sessionStorage.setItem('betaAuthorized', 'true');
      navigate('/desktop-beta/download');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 px-0">
      <Header showGithubLink={false} />

      <div className="max-w-md mx-auto px-4 mt-20">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Key className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Beta Access Required
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter beta access code"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]"
            />
            {error && (
              <div className="flex items-center space-x-2 text-red-500 mb-4">
                <ShieldAlert className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#7C5CFF] text-white rounded-xl py-3 hover:bg-[#6a4edb] transition-colors"
            >
              Access Beta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetaAccess;