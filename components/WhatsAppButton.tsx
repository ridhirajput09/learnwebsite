import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const AnimatedBotIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-bot">
        <g clipPath="url(#clip0_bot)">
            <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" fill="url(#paint0_linear_bot)" stroke="url(#paint1_linear_bot)" strokeWidth="2"/>
            <path d="M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z" fill="white" className="bot-eye"/>
            <path d="M21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13C20 13.5523 20.4477 14 21 14Z" fill="white" className="bot-eye"/>
            <path d="M22 18H10C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_bot" x1="16" y1="1" x2="16" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
            <linearGradient id="paint1_linear_bot" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A5B4FC"/>
                <stop offset="1" stopColor="#C4B5FD"/>
            </linearGradient>
            <clipPath id="clip0_bot">
                <rect width="32" height="32" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const HeaderBotIcon: React.FC = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_bot_header)">
            <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" fill="url(#paint0_linear_bot_header)" stroke="url(#paint1_linear_bot_header)" strokeWidth="2"/>
            <path d="M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z" fill="white"/>
            <path d="M21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13C20 13.5523 20.4477 14 21 14Z" fill="white"/>
            <path d="M22 18H10C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_bot_header" x1="16" y1="1" x2="16" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
            <linearGradient id="paint1_linear_bot_header" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A5B4FC"/>
                <stop offset="1" stopColor="#C4B5FD"/>
            </linearGradient>
            <clipPath id="clip0_bot_header">
                <rect width="32" height="32" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const ChatAvatarBotIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_bot_avatar)">
            <path d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" fill="url(#paint0_linear_bot_avatar)" stroke="url(#paint1_linear_bot_avatar)" strokeWidth="2"/>
            <path d="M11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14Z" fill="white" className="bot-eye"/>
            <path d="M21 14C21.5523 14 22 13.5523 22 13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13C20 13.5523 20.4477 14 21 14Z" fill="white" className="bot-eye"/>
            <path d="M22 18H10C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_bot_avatar" x1="16" y1="1" x2="16" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
            <linearGradient id="paint1_linear_bot_avatar" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A5B4FC"/>
                <stop offset="1" stopColor="#C4B5FD"/>
            </linearGradient>
            <clipPath id="clip0_bot_avatar">
                <rect width="32" height="32" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);


const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [position, setPosition] = useState({ bottom: '1.5rem', right: '1.5rem' });

  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768; // Tailwind's 'md' breakpoint
      setPosition({
        bottom: isDesktop ? '2rem' : '1.5rem', // md:bottom-8 vs bottom-6
        right: isDesktop ? '2rem' : '1.5rem',  // md:right-8 vs right-6
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, isClient]);

  const toggleChat = () => setIsOpen(!isOpen);

  const chatUI = (
    <>
    <div
      className="fixed z-50"
      style={{
        bottom: position.bottom,
        right: position.right,
      }}
    >
      <div className="relative">
        {/* Chat Window */}
        <div 
          className={`absolute bottom-full mb-4 right-0 w-[calc(100vw-3rem)] max-w-sm rounded-xl shadow-2xl transition-all duration-300 ease-in-out origin-bottom-right
                      bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                      ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}`}
        >
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4">
                  <HeaderBotIcon />
                  <div>
                      <p className="font-bold text-slate-800 dark:text-white">Learn&Earn Skills</p>
                      <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Online</p>
                      </div>
                  </div>
                  <button onClick={toggleChat} className="ml-auto p-1 text-slate-500 hover:text-slate-800 dark:hover:text-white" aria-label="Close chat">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
              </div>
          </div>
          <div className="p-4 space-y-4 h-64 overflow-y-auto">
              <div className="flex gap-3">
                  <ChatAvatarBotIcon />
                  <div className="p-3 rounded-lg rounded-tl-none bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      <p>Hi there! 🌟</p>
                      <p>How can I help you?</p>
                  </div>
              </div>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <a 
                  href="https://wa.me/919917335000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors hover:bg-indigo-700"
              >
                  Start a Chat
              </a>
          </div>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={toggleChat}
          className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-white shadow-lg
                    transform transition-all duration-300 ease-in-out hover:scale-110"
          aria-label="Toggle chat"
        >
          <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
              <AnimatedBotIcon />
          </div>
          <div className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-600 dark:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </button>
      </div>
    </div>
    <style>{`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        @keyframes blink {
            0%, 50%, 100% { transform: scaleY(1); }
            25%, 75% { transform: scaleY(0.1); }
        }
        .animated-bot {
            animation: float 3s ease-in-out infinite;
        }
        .bot-eye {
            transform-origin: center;
            animation: blink 4s ease-in-out infinite;
            animation-delay: 1s;
        }
    `}</style>
    </>
  );

  if (!isClient) {
    return null;
  }

  return createPortal(chatUI, document.body);
};

export default WhatsAppButton;