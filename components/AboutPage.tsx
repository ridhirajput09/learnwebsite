import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const FounderHero: React.FC = () => {
  const handleScrollToRoadmap = () => {
    document.getElementById('mission-roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="pt-32 pb-16 text-center">
      <div className="container mx-auto px-6">
        <img 
          src="https://i.ibb.co/xqQ84gN2/Whats-App-Image-2025-10-19-at-1-05-36-PM.jpg"
          alt="Pradeep Thakur"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white dark:border-slate-700 shadow-xl object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Pradeep Thakur
        </h1>
        <p className="mt-2 text-xl text-indigo-500 dark:text-indigo-400 font-semibold">
          Founder & Digital Growth Mentor
        </p>
        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          “Humara mission ek hi hai — logon ko real skills seekh kar digital income sources banane mein help karna, aur unhein apni financial growth ka control dena.”
        </p>
        <button
            onClick={handleScrollToRoadmap}
            className="mt-8 bg-indigo-600 text-white dark:bg-white dark:text-black font-bold text-md px-6 py-3 rounded-lg
                       transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Humara Mission Dekho
        </button>
      </div>
    </section>
  );
};

const MissionRoadmap: React.FC = () => {
  const RoadmapStep: React.FC<{ icon: string; title: string; description: string; align: 'left' | 'right'; delay: number }> = ({ icon, title, description, align, delay }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
    
    return (
      <div className={`md:flex justify-between items-center w-full scroll-reveal ${isVisible ? 'visible' : ''} ${align === 'right' ? 'md:flex-row-reverse' : ''}`} ref={ref} style={{ transitionDelay: `${delay}ms`}}>
        <div className="md:w-5/12">
          <div className={`p-6 rounded-lg gradient-border-card dark:bg-slate-900/50 bg-white/50 backdrop-blur-lg md:text-${align}`}>
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-bold gradient-text">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{description}</p>
          </div>
        </div>
        <div className="hidden md:flex w-2/12 items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold shadow-lg z-10">
              {icon}
            </div>
        </div>
        <div className="md:w-5/12"></div>
      </div>
    );
  };
  
  return (
    <section id="mission-roadmap" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Humara Mission <span className="gradient-text">Roadmap</span>
                </h2>
            </div>
            <div className="relative flex flex-col items-center gap-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-gray-800 hidden md:block"></div>
              <RoadmapStep icon="🎯" title="Skills Seekho (Learn)" description="Expert-led, project-based curriculum se future-ready skills mein master bano." align="left" delay={0} />
              <RoadmapStep icon="🚀" title="Skills Lagao (Apply)" description="Apni knowledge ko real-world projects bana kar practice mein lao." align="right" delay={200} />
              <RoadmapStep icon="💰" title="Paise Kamao (Monetize)" description="Freelancing, digital products, ya apna business launch karke nayi income streams banao." align="left" delay={400} />
              <RoadmapStep icon="🌱" title="Network Badhao (Grow)" description="Peers aur mentors ki supportive community join karke apni journey ko speed do." align="right" delay={600} />
            </div>
        </div>
    </section>
  );
};

const VisionValues: React.FC = () => {
    const ValueCard: React.FC<{ title: string; subtitle: string; delay: number }> = ({ title, subtitle, delay }) => {
      const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
      return (
        <div ref={ref} className={`relative p-8 rounded-2xl bg-slate-800/20 text-center overflow-hidden transition-all duration-500 scroll-reveal group-hover:bg-slate-800/40 ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms`}}>
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                 style={{background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.3) 0%, transparent 70%)'}}></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
            </div>
        </div>
      );
    };

    return (
        <section className="py-24 bg-slate-100 dark:bg-black">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Humara <span className="gradient-text">Vision</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 group">
                    <ValueCard title="Skills Se Empowerment" subtitle="Future ke liye aasan aur practical skills dena." delay={0} />
                    <ValueCard title="Mentorship Se Success" subtitle="Learners ko experience aur expertise se guide karna." delay={200} />
                    <ValueCard title="Community Power" subtitle="Growth aur opportunity ke liye ek strong network banana." delay={400} />
                </div>
            </div>
        </section>
    );
};

const ImpactStats: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
    const learnersCount = useAnimatedCounter(1000, isVisible);
    const selfEarnersCount = useAnimatedCounter(800, isVisible);

    return (
        <section ref={ref} className="py-24">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Humara <span className="gradient-text">Impact</span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="text-center">
                        <p className="text-6xl md:text-7xl font-black gradient-text">{learnersCount}+</p>
                        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Students Ko Guide Kiya</p>
                    </div>
                    <div className="text-center">
                        <p className="text-6xl md:text-7xl font-black gradient-text">{selfEarnersCount}+</p>
                        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Self Earners Banaye</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto text-slate-900 dark:text-white">
          Apni financial freedom ki journey shuru karne ke liye taiyaar ho?
        </h2>
        <a
          href="https://chat.whatsapp.com/BYZaPFc7faNAz4eIwiV4TA?mode=wwt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-indigo-600 text-white dark:bg-white dark:text-black font-bold text-lg px-8 py-4 rounded-xl inline-block
                       transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
        >
          Apni Growth Journey Shuru Karein
        </a>
      </div>
    </section>
  );
};


const AboutPage: React.FC = () => {
  return (
    <>
      <FounderHero />
      <MissionRoadmap />
      <VisionValues />
      <ImpactStats />
      <AboutCTA />
    </>
  );
};

export default AboutPage;