import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DesktopBeta from './DesktopBeta';
import LandingPage from './BetaAccess';
import BetaAccess from './BetaAccess';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/desktop-beta" element={<BetaAccess />} />
      </Routes>
    </Router>
  );
};

export default App;