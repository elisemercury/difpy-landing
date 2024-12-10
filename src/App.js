import React from 'react';
import { ExternalLink, Book, Download } from 'lucide-react';

const LandingPage = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <div className="w-6 h-6 rounded-lg bg-[#7C5CFF]"></div>
              <div className="w-6 h-6 rounded-lg bg-[#0046FF] mt-1"></div>
            </div>
            <span className="text-3xl font-semibold text-gray-800">difPy</span>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/elisemercury/Duplicate-Image-Finder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Duplicate Image Finder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
        A powerful Python package that helps you find and remove duplicate & similar images, saving storage space and helping you organize your photo library more efficiently.
        </p>
      </header>

      {/* Features Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Documentation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Book className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Documentation</h2>
            <p className="text-gray-600 mb-6">
              Read our documentation on how to install and get started with difPy.
            </p>
            <button 
              onClick={() => handleRedirect('https://difpy.readthedocs.io/en/latest/index.html')}
              className="w-full border-2 border-[#7C5CFF] text-[#7C5CFF] rounded-xl py-3 hover:bg-[#7C5CFF] hover:text-white transition-colors"
            >
              View Docs
            </button>
          </div>

          {/* Beta Signup Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">difPy Pro Beta</h2>
            <p className="text-gray-600 mb-6">
              Become a beta tester and among the first to try the difPy Pro desktop app 🚀
            </p>
            <button 
              onClick={() => handleRedirect('https://forms.gle/n4radsniGohGwubN7')}
              className="w-full border-2 border-[#7C5CFF] text-[#7C5CFF] rounded-xl py-3 hover:bg-[#7C5CFF] hover:text-white transition-colors"
            >
              Join Beta
            </button>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <ExternalLink className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Support difPy</h2>
            <p className="text-gray-600 mb-6">
              Help us maintain and improve difPy by supporting the project.
            </p>
            <button 
              onClick={() => handleRedirect('https://github.com/sponsors/elisemercury?frequency=one-time&sponsor=elisemercury')}
              className="w-full border-2 border-[#7C5CFF] text-[#7C5CFF] rounded-xl py-3 hover:bg-[#7C5CFF] hover:text-white transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>2024 difPy by Elise Landman</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;