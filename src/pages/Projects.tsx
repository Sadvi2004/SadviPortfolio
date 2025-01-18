import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from './pictures/codehub.png';
import project2 from './pictures/cssbattle.png';
import project3 from './pictures/mixtube.png';

const projects = [
  {
    title: 'CampusCodeHub',
    description: 'A web application built with React and Node.js this application used to store user projects and can be downloaded at any time and teach us how to develop a basic website from scratch the student with specific college email id can able to log into it for further information click the icons below.',
    // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
    image: project1,
    github: 'https://github.com/Sadvi2004/CampusCodeHub',
    demo: 'https://campuscodehub.vercel.app/'
  },
  {
    title: 'Frontend-Battel',
    description: 'Discover the magic of CSS through hands-on challenges, interactive learning, and a supportive community.Step into a world where CSS learning is fun and engaging. CodeFE offers an immersive experience filled with exciting challenges and a playground to hone your front-end skills.Begin your journey toward CSS mastery today. Join our vibrant community!',
    // image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image: project2,
    github: 'https://github.com/Sadvi2004/Frontend-battel',
    demo: 'https://frontend-battel.vercel.app/'
  },
  {
    title: 'MixTube',
    description: 'This application is a clone of the popular video streaming platform YouTube. It is built with React and the YouTube API. Users can search for videos, watch them it contains some default recommendations for users and it should not contain any ads while streaming, This application is fully responsive and works on all devices.',
    // image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image: project3,
    github: 'https://github.com/Sadvi2004/MixTube',
    demo: 'https://mix-tube-beta.vercel.app/'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fill"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;