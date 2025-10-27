
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { LogoIcon, MoonIcon, SunIcon, MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
}

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#clients', label: 'Clients' },
  { href: '#skills', label: 'Skills' },
  { href: '#process', label: 'Process' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#awards', label: 'Awards' },
];

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);


  const handleNavClick = () => {
    // Smooth scrolling is handled by the browser via CSS (scroll-behavior: smooth).
    // This function's only job is to close the mobile menu if it's open.
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <a href="#top" onClick={handleNavClick} className="flex items-center gap-3 group">
          <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
            <LogoIcon />
          </div>
          <span className="text-lg font-extrabold text-gray-800 dark:text-white">JumpBoxx</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className={`relative font-semibold transition-colors ${activeSection === link.href.substring(1) ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'}`}>
              {link.label}
              {activeSection === link.href.substring(1) && (
                  <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-2/3 h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/adrianopezzella/" onClick={handleNavClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(link => (
               <a key={link.href} href={link.href} onClick={handleNavClick} className={`block py-2 px-3 rounded-md text-base font-medium ${activeSection === link.href.substring(1) ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{link.label}</a>
            ))}
            <a href="#contact" onClick={handleNavClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center mt-2 transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;