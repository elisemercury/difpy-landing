import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import BetaGatekeeper from './BetaGatekeeper';
import BetaDownload from './BetaDownload';
import PrivacyPolicy from './PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/desktop-beta" element={<BetaGatekeeper />} />
        <Route path="/desktop-beta/download" element={<BetaDownload />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;