import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
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

      {/* Main Content (Dynamic Page Rendering) */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;