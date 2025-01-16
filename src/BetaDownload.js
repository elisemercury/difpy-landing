import React, { useEffect } from 'react';
import { Download, MessageSquare, Bug } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const BetaDownload = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('betaAuthorized')) {
      navigate('/desktop-beta');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header showGithubLink={false} />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to difPy for Desktop beta!
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Thank you for your interest in being a beta tester for the new difPy desktop app.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Download className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Download difPy Desktop v1.0-beta
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'https://difpy.app'}
              className="flex-1 bg-[#7C5CFF] text-white rounded-xl py-3 px-6 hover:bg-[#6a4edb] transition-colors"
            >
              Download for Windows
            </button>
            <button 
              onClick={() => window.location.href = 'https://difpy.app'}
              className="flex-1 bg-[#7C5CFF] text-white rounded-xl py-3 px-6 hover:bg-[#6a4edb] transition-colors"
            >
              Download for MacOS
            </button>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Help Us Improve
          </h3>
          <p className="text-gray-600 mb-6">
            Beta testing is vital to making difPy Desktop the best it can be at launch 🚀<br></br>
            Your feedback and bug reports are extremely valuable to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://go.difpy.app/desktop-feedback" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-[#7C5CFF] text-[#7C5CFF] rounded-xl py-3 px-6 hover:bg-[#7C5CFF] hover:text-white transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Provide Feedback</span>
            </a>
            <a 
              href="https://go.difpy.app/desktop-bug" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border-2 border-[#7C5CFF] text-[#7C5CFF] rounded-xl py-3 px-6 hover:bg-[#7C5CFF] hover:text-white transition-colors"
            >
              <Bug className="w-5 h-5" />
              <span>Report Bug</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaDownload;