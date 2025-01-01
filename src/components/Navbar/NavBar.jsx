import { useState } from 'react';
import logo from '../../assets/Project Images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavigateAndScroll = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white py-4 relative">
      <div className="max-w-screen-xl mx-auto px-4 md:pr-36 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Soft Forte Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Soft Forte</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Overlay Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6">
            {/* Navigation Links */}
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/"
              className={`text-lg hover:underline ${isActive('/') ? 'font-bold underline' : ''}`}
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/about-us"
              className={`text-lg hover:underline ${isActive('/about-us') ? 'font-bold underline' : ''}`}
            >
              About Us
            </Link>
            <button
              onClick={() => handleNavigateAndScroll('services')}
              className="text-lg hover:underline"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigateAndScroll('ourTeam')}
              className="text-lg hover:underline"
            >
              Our Team
            </button>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              to="/contact-us"
              className={`text-lg hover:underline ${isActive('/contact-us') ? 'font-bold underline' : ''}`}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden text-xl md:flex space-x-12 my-5">
          <Link
            to="/"
            className={`hover:underline ${isActive('/') ? 'font-bold underline' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`hover:underline ${isActive('/about-us') ? 'font-bold underline' : ''}`}
          >
            About Us
          </Link>
          <button
            onClick={() => handleNavigateAndScroll('services')}
            className="hover:underline"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigateAndScroll('ourTeam')}
            className="hover:underline"
          >
            Our Team
          </button>
          <Link
            to="/contact-us"
            className={`hover:underline ${isActive('/contact-us') ? 'font-bold underline' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
