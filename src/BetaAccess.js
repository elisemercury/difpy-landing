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
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header showGithubLink={false} />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Beta Access Key Required
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

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            <a href="https://difpy.readthedocs.io/en/latest/resources/desktop.html">Learn more</a> about the difPy for Desktop beta tester program.
          </h3>

        </div>
      </div>
    </div>
  );
};

export default BetaAccess;