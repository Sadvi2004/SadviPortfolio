import { motion } from 'framer-motion';
import { Code2, Palette, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                As a web developer, I specialize in creating seamless, user-friendly websites.
                My passion for coding drives me to continuously learn and adopt the latest
                technologies and best practices in the industry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800 rounded-lg"
                >
                  <Code2 className="text-purple-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-gray-400">Creating responsive and dynamic web applications</p>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800 rounded-lg"
                >
                  <Palette className="text-purple-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-gray-400">Designing intuitive user interfaces</p>
                </motion.div>
                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-800 rounded-lg"
                >
                  <Target className="text-purple-400 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Logo Designer</h3>
                  <p className="text-gray-400">Building logos for websites</p>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 md:mt-0 flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Developer"
                className="rounded-2xl shadow-lg transition-shadow duration-300 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
