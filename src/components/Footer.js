import React from 'react';

// Icons
import linkedin from '../assests/icons/linkedin.svg';
import github from '../assests/icons/github.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="lg:w-1/5 lg:mr-auto mb-10 lg:mb-0">
          <div className="mb-2 text-white">Redes Sociales</div>
          <div className="flex space-x-4 items-center justify-center">
            <a href="https://www.linkedin.com/in/danitzabonilla/" target="_blank" rel="noopener noreferrer" className="h-8 w-8">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Danitzab" target="_blank" rel="noopener noreferrer" className="h-8 w-8">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center">Danitza Bonilla | Frontend Developer</div>
      </div>
    </footer>
  );
};

export default Footer;
