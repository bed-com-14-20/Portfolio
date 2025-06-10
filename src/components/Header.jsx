import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Mike Sukwala
        </a>

        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-dark hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-dark"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block py-2 text-dark hover:text-primary transition"
              onClick={() => setNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
