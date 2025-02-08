import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDiscord, FaGlobe } from 'react-icons/fa';

const person = {
  name: 'Santhosh Raj',
  role: 'Full-Stack Developer',
  imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  linkedin: 'https://www.linkedin.com/in/santhoshraj/',
  github: 'https://github.com/santhoshraj',
  discord: 'https://discord.com/users/your-discord-id',
  portfolio: 'https://yourportfolio.com',
  about: "I'm a passionate Full-Stack Developer with expertise in building scalable web applications. I love solving complex problems with modern technologies and continuously learning to stay ahead in the tech world."
};

const Team = () => {
  return (
    <motion.div 
      className="relative overflow-hidden py-24 sm:py-32 bg-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-50 blur-xl animate-gradient" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl drop-shadow-lg">Meet the Developer</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate about building innovative and impactful web applications, using modern technologies to solve real-world problems.
        </p>
      </div>

      <div className="relative z-10 mt-16 flex flex-col items-center space-y-6">
        <img
          alt={person.name}
          src={person.imageUrl}
          className="w-32 h-32 rounded-full shadow-md border-4 border-gray-300"
        />
        <h3 className="text-2xl font-semibold text-gray-900">{person.name}</h3>
        <p className="text-indigo-600 text-lg font-medium">{person.role}</p>
        <p className="text-gray-700 max-w-xl px-6">{person.about}</p>
        <div className="flex space-x-6">
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={30} />
          </a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
            <FaGithub size={30} />
          </a>
          <a href={person.discord} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
            <FaDiscord size={30} />
          </a>
          <a href={person.portfolio} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
            <FaGlobe size={30} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
