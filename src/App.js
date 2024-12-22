import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DesktopBeta from './DesktopBeta';
import BetaAccess from './BetaAccess';
import BetaDownload from './BetaAccess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/desktop-beta" element={<BetaAccess />} />
        <Route path="/desktop-beta/download" element={<BetaDownload />} />
      </Routes>
    </Router>
  );
};

export default App;