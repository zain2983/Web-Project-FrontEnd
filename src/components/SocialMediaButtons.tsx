// src/components/SocialMediaButtons.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import icons

interface SocialMediaButtonsProps {
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
}

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({ githubUrl, linkedinUrl, portfolioUrl }) => {
  return (
    <div className="flex gap-2 mt-4 flex-wrap justify-center"> {/* Added flex-wrap for responsiveness */}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition duration-200 text-sm md:text-base" // Adjusted padding and font size
      >
        <FaGithub className="mr-1" />
        GitHub
      </a>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition duration-200 text-sm md:text-base" // Adjusted padding and font size
      >
        <FaLinkedin className="mr-1" />
        LinkedIn
      </a>
      <a 
        href={portfolioUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition duration-200 text-sm md:text-base" // Adjusted padding and font size
      >
        <FaGlobe className="mr-1" />
        Portfolio
      </a>
    </div>
  );
};

export default SocialMediaButtons;