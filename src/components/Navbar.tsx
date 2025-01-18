import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-gray-300">
            SB
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-purple-400 transition-colors ${isActive ? 'text-purple-400' : 'text-gray-300'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Menu Icon */}
              <motion.div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'
                    }`}
                />
                <span
                  className={`absolute block h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`absolute block h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'
                    }`}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-800 py-4"
        >
          <div className="space-y-2">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;