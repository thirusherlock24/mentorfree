import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import UnderDevelopment from './pages/UnderDevelopment';
import Contributors from './pages/Contributors';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<UnderDevelopment />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="about" element={<About />} />
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;