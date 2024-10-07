import React from 'react'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">ConsultPro</h3>
            <p className="text-gray-400">Empowering businesses with expert consulting services.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover-text">Services</a></li>
              <li><a href="/team" className="text-gray-400 hover-text">Our Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover-text">Contact Us</a></li>
              <li><a href="/blog" className="text-gray-400 hover-text">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover-text"><Facebook /></a>
              <a href="#" className="text-gray-400 hover-text"><Twitter /></a>
              <a href="#" className="text-gray-400 hover-text"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 ConsultPro. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Crafted with care by <a href="https://www.fiverr.com/asaced" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">asaced</a>
          </p>
          <p className="text-gray-400 mt-2">
            ConsultPro: A showcase of React, TypeScript, and Tailwind CSS skills.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer