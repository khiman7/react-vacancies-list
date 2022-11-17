import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Details from './pages/Details';
import Jobs from './pages/Jobs';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs" />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
