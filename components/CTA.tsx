import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 hero-gradient opacity-30"></div>
        <div className="absolute inset-0 z-10 bg-slate-50/70 dark:bg-[#0A0A0A]/70"></div>
        <div ref={ref} className={`relative z-20 container mx-auto px-6 text-center scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                Ready to Go with <span className="gradient-text">Learn & Earn Skills</span>?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Join thousands of others building their dream careers. Your future self will thank you.
            </p>
            <div className="mt-10">
                <a
                    href="https://chat.whatsapp.com/BYZaPFc7faNAz4eIwiV4TA?mode=wwt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white dark:bg-white dark:text-black font-bold text-lg px-8 py-4 rounded-xl inline-block
                                transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                    Start Your Journey Now
                </a>
            </div>
        </div>
    </section>
  );
};

export default CTA;