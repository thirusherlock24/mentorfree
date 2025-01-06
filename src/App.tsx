import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import UnderDevelopment from './pages/UnderDevelopment';
import Contributors from './pages/Contributors';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-800 text-white">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contributors" className="hover:underline">
            Contributors
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<UnderDevelopment />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
