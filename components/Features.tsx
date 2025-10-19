import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string, delay?: number }> = ({ icon, title, description, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`dark:bg-slate-900/50 bg-white/50 backdrop-blur-lg gradient-border-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 ref={ref} className={`text-4xl md:text-5xl font-bold scroll-reveal ${isVisible ? 'visible' : ''}`}>
            How We <span className="gradient-text">Empower</span> You
          </h2>
          <p ref={ref} className={`mt-4 text-lg text-slate-600 dark:text-slate-400 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
            We provide the tools, knowledge, and community to turn your ambitions into reality.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BrainIcon />}
            title="Master In-Demand Skills"
            description="Access curated courses on coding, AI, digital marketing, and design, taught by industry experts."
            delay={0}
          />
          <FeatureCard
            icon={<RocketIcon />}
            title="Launch Your Business"
            description="Get step-by-step guidance on creating, validating, and scaling your own profitable venture from scratch."
            delay={200}
          />
          <FeatureCard
            icon={<NetworkIcon />}
            title="Join a Thriving Community"
            description="Connect with ambitious peers, find mentors, and collaborate on projects in our exclusive network."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

const BrainIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const RocketIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const NetworkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);


export default Features;
