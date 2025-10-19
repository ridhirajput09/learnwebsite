import React from 'react';

const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-slate-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="https://wa.me/919917335000" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <WhatsAppIcon />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/pradeep991733?igsh=Z3Y2eHNudnU0NGx3" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <InstagramIcon />
            <span className="sr-only">Instagram</span>
          </a>
           <a href="https://www.facebook.com/thakur.shaabh.6682" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FacebookIcon />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
        <div className="text-xl md:text-2xl font-bold tracking-tighter mb-4">
          <a href="#/" onClick={(e) => handleNav(e, '/')} className="gradient-text">Learn & Earn Skills</a>
        </div>
        <p className="text-slate-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Learn & Earn Skills Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);


export default Footer;