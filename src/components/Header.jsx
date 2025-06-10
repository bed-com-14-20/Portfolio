import { useState } from 'react';

const Header = () => {
  // Removed navOpen state as mobile menu toggle is no longer needed
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
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-white hover:bg-white/15 transition-all"
              >
                {link.name}
              </a>
              {/* Dropdown for About (add similar for other links as needed) */}
              {link.name === 'About' && (
                <div className="dropdown">
                  <a href="#about#bio" className="text-white">Bio</a>
                  <a href="#about#interests" className="text-white">Interests</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;