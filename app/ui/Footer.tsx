import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsBlockquoteRight } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-black text-white backdrop-blur-lg backdrop-opacity-30 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
        
        {/* Logo and Product Name */}
        <div className="flex items-center space-x-3">
          <BsBlockquoteRight className="text-fuchsia-500 text-3xl animate-pulse" />
          <div className="flex flex-col text-center md:text-left">
            <span className="text-xl font-semibold text-white">Student Credential System</span>
            <p className="text-sm text-gray-400 italic">"Empowering Data Security with Blockchain"</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" aria-label="GitHub" className="text-gray-400 hover:text-fuchsia-500 transition-transform transform hover:scale-110">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Student Credential System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
