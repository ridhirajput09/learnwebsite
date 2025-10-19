import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

// Navigation handler to prevent default browser navigation and manually update the hash
const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
};

const NavLink: React.FC<{ href: string; currentPath: string; children: React.ReactNode }> = ({ href, currentPath, children }) => {
    const isActive = href === currentPath;
    
    return (
        <a 
            href={`#${href}`}
            onClick={(e) => handleNav(e, href)}
            className={`relative text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors
                        ${isActive ? 'text-black dark:text-white font-medium' : ''}`}
        >
            {children}
            {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full"></span>}
        </a>
    );
};


const Header: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    handleNav(e, path);
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-slate-200/80 dark:border-gray-800' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" onClick={(e) => handleNav(e, '/')} className="text-xl md:text-2xl font-bold tracking-tighter whitespace-nowrap">
          <span className="gradient-text">Learn & Earn Skills</span>
        </a>
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8 items-center">
                <NavLink href="/" currentPath={currentPath}>Home</NavLink>
                <NavLink href="/about" currentPath={currentPath}>About</NavLink>
                <NavLink href="/features" currentPath={currentPath}>Features</NavLink>
                <NavLink href="/contact" currentPath={currentPath}>Contact</NavLink>
            </nav>
            <a 
              href="https://chat.whatsapp.com/BYZaPFc7faNAz4eIwiV4TA?mode=wwt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dark:bg-white dark:text-black dark:hover:bg-slate-200 bg-indigo-600 text-white hover:bg-indigo-500 font-semibold px-5 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Get Started
            </a>
            <ThemeToggle />
        </div>
        <button className="md:hidden text-slate-800 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
    </header>
    <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/90 dark:bg-black/90 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
             <a href="#/" onClick={(e) => handleMobileNav(e, '/')} className="text-2xl font-semibold">Home</a>
             <a href="#/about" onClick={(e) => handleMobileNav(e, '/about')} className="text-2xl font-semibold">About</a>
             <a href="#/features" onClick={(e) => handleMobileNav(e, '/features')} className="text-2xl font-semibold">Features</a>
             <a href="#/contact" onClick={(e) => handleMobileNav(e, '/contact')} className="text-2xl font-semibold">Contact</a>
             <a 
                href="https://chat.whatsapp.com/BYZaPFc7faNAz4eIwiV4TA?mode=wwt" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 dark:bg-white dark:text-black dark:hover:bg-slate-200 bg-indigo-600 text-white hover:bg-indigo-500 font-semibold px-8 py-3 rounded-lg text-lg"
             >
                Get Started
             </a>
        </div>
    </div>
    </>
  );
};

export default Header;