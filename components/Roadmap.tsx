import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RoadmapStep: React.FC<{ number: string; title: string; description: string; isLast?: boolean, delay?: number }> = ({ number, title, description, isLast = false, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={`flex scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms`}}>
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 font-bold flex items-center justify-center border-2 border-indigo-200 dark:border-indigo-500">
          {number}
        </div>
        {!isLast && <div className="w-1 h-full bg-slate-200 dark:bg-gray-800 mt-2"></div>}
      </div>
      <div className="pb-16">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
};


const Roadmap: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="roadmap" className="py-24 bg-slate-50 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
           <h2 ref={ref} className={`text-4xl md:text-5xl font-bold scroll-reveal ${isVisible ? 'visible' : ''}`}>
            Your Path to <span className="gradient-text">Freedom</span>
          </h2>
          <p ref={ref} className={`mt-4 text-lg text-slate-600 dark:text-slate-400 scroll-reveal ${isVisible ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
            A simple, proven three-step process to transform your career and life.
          </p>
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
            <RoadmapStep 
                number="01"
                title="Learn"
                description="Deep dive into foundational concepts with our project-based curriculum. Go from zero to proficient at your own pace."
                delay={0}
            />
            <RoadmapStep 
                number="02"
                title="Build"
                description="Apply your knowledge by building a portfolio of real-world projects. Solidify your skills and showcase your expertise."
                delay={200}
            />
            <RoadmapStep 
                number="03"
                title="Earn"
                description="Monetize your new skills through freelancing, creating digital products, or launching a full-fledged online business."
                isLast={true}
                delay={400}
            />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;