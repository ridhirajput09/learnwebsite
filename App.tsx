import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';
import ContactPage from './components/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';

const routes: { [key: string]: React.FC } = {
  '/': HomePage,
  '/about': AboutPage,
  '/features': FeaturesPage,
  '/contact': ContactPage,
};

const getPathnameFromHash = () => window.location.hash.substring(1) || '/';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(getPathnameFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setPathname(getPathnameFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const CurrentPage = routes[pathname] || HomePage;

  return (
    <div className="bg-slate-50 dark:bg-[#0A0A0A] text-slate-700 dark:text-slate-200 antialiased overflow-x-hidden">
      <Header currentPath={pathname} />
      <main>
        <CurrentPage />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;