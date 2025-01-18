import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold">SB</NavLink>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
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
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white relative focus:outline-none"
              style={{ width: '24px', height: '24px' }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                className="absolute w-4 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              >
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'
                    }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'
                    }`}
                ></span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition-colors ${isActive ? 'text-purple-400' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
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