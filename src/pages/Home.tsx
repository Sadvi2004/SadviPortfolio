import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import sadvi from './pictures/main-1.jpg';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 md:pr-12 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-purple-400 hover:text-purple-300 transition-colors">Sadvi</span>
            </h1>
            <h2 className="text-4xl md:text-4xl font-semibold mb-6">
              Welcome to my Portfolio!
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Web Developer & Designer
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Sadvi2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/sadvi-bayyavarapu-09a3b42b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/Sadvi1509T"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={32} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="md:w-1/4 mt-12 md:mt-0 flex justify-center"
          >
            <img
              src={sadvi}
              alt="Developer workspace"
              className="rounded-2xl shadow-lg transition-shadow duration-300 w-[300px] h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
