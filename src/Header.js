import React from 'react';

const Header = ({ showGithubLink = true }) => {
  const handleLogoClick = () => {
    window.location.href = 'https://www.difpy.app';
  };

  return (
    <nav className="p-6">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="flex flex-col">
              <div className="w-6 h-6 rounded-lg bg-[#7C5CFF]"></div>
              <div className="w-6 h-6 rounded-lg bg-[#0046FF] mt-1"></div>
            </div>
            <span className="text-3xl font-semibold text-gray-800">difPy</span>
          </div>
          {showGithubLink && (
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;