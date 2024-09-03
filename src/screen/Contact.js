import React from 'react';
import Header from '../components/Header';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-10 md:container md:mx-auto md:my-20 md:mt-40">
        <div className="flex flex-col md:flex-row justify-center px-5 items-center gap-4">
          <div className="flex-1 w-full p-6 md:p-10 bg-transparent border border-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white rounded-full">
                <FaInstagram className="text-2xl md:text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-center text-lg md:text-4xl font-semibold text-white mb-4">Instagram</h3>
            <p className="text-center text-sm md:text-base text-white">Instagram.</p>
          </div>
          <div className="flex-1 w-full p-6 md:p-10 bg-transparent border border-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white rounded-full">
                <FaGithub className="text-2xl md:text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-center text-lg md:text-4xl font-semibold text-white mb-4">GitHub</h3>
            <p className="text-center text-sm md:text-base text-white">GitHub</p>
          </div>
          <div className="flex-1 w-full p-6 md:p-10 bg-transparent border border-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white rounded-full">
                <FaLinkedin className="text-2xl md:text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-center text-lg md:text-4xl font-semibold text-white mb-4">LinkedIn</h3>
            <p className="text-center text-sm md:text-base text-white">LinkedIn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
