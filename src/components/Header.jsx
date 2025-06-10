 import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="nav fixed w-full z-50">
      <nav className="nav-container">
        <button
          className="text-[var(--primary)] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {menuOpen && (
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="hover:bg-[var(--accent)] hover:text-white transition-all block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
                {link.name === 'About' && (
                  <div className="dropdown">
                    <a
                      href="#about#bio"
                      className="hover:bg-[var(--accent)] hover:text-white transition-all block"
                      onClick={() => setMenuOpen(false)}
                    >
                      Bio
                    </a>
                    <a
                      href="#about#interests"
                      className="hover:bg-[var(--accent)] hover:text-white transition-all block"
                      onClick={() => setMenuOpen(false)}
                    >
                      Interests
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;