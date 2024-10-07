import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover-grow">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">ConsultPro</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover-text">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover-text">Services</Link></li>
            <li><Link to="/team" className="text-gray-600 hover-text">Team</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover-text">Contact</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover-text">Blog</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link to="/" className="text-gray-600 hover-text block py-2" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover-text block py-2" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/team" className="text-gray-600 hover-text block py-2" onClick={toggleMenu}>Team</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover-text block py-2" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover-text block py-2" onClick={toggleMenu}>Blog</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header