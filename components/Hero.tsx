import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 hero-gradient opacity-70"></div>
      <div className="absolute inset-0 z-10 dark:bg-black/20"></div>
      
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-tight animate-[fadeInUp_1s_ease-out_forwards]">
          Seekho, <span className="gradient-text">Kamao</span>, Grow karo
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0">
          Join Us! Skills Seekho, Income Kamao, Apni Life Apne Rules Pe Chalao.
        </p>
        <div className="mt-12 animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0">
          <a
            href="https://chat.whatsapp.com/BYZaPFc7faNAz4eIwiV4TA?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white dark:bg-white dark:text-black font-bold text-lg px-8 py-4 rounded-xl inline-block
                       transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            Start Your Journey
          </a>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">No commitment. Start learning for free.</p>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;