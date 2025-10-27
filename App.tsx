
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Skills from './components/Skills';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Overlay from './components/Overlay';
import { CaseStudyContent, ProjectContent } from './components/content/Content';

import type { CaseStudy, Project } from './types';
import { CASE_STUDIES, PROJECTS } from './constants';

const getInitialTheme = (): 'light' | 'dark' => {
  // The theme is now set in a script in index.html before React loads.
  // This function just reads the class from the <html> element to sync React's state.
  if (document.documentElement.classList.contains('dark')) {
    return 'dark';
  }
  return 'light';
};


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [activeOverlay, setActiveOverlay] = useState<{ type: 'case' | 'project'; data: CaseStudy | Project } | null>(null);

  useEffect(() => {
    // This effect now only syncs the theme to localStorage and the DOM when the user toggles it.
    localStorage.setItem('jb-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const handleOpenOverlay = (type: 'case' | 'project', id: string) => {
    const data = type === 'case' 
      ? CASE_STUDIES.find(c => c.id === id) 
      : PROJECTS.find(p => p.id === id);
    if (data) {
      setActiveOverlay({ type, data });
    }
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  const renderOverlayContent = () => {
    if (!activeOverlay) return null;

    if (activeOverlay.type === 'case') {
      return <CaseStudyContent study={activeOverlay.data as CaseStudy} />;
    }
    if (activeOverlay.type === 'project') {
      return <ProjectContent project={activeOverlay.data as Project} />;
    }
    return null;
  };
  
  return (
    <div className="transition-colors duration-300 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header theme={theme} setTheme={setTheme} />
      <main id="top" className="pt-24 max-w-6xl mx-auto px-6 pb-24 space-y-6">
        <Hero />
        <About />
        <Clients />
        <Skills />
        <Process />
        <CaseStudies onOpenOverlay={handleOpenOverlay} />
        <Projects onOpenOverlay={handleOpenOverlay} />
        <Awards />
        <Contact />
      </main>
      <Overlay 
        isOpen={!!activeOverlay} 
        onClose={handleCloseOverlay}
        title={activeOverlay?.data.title}
        subtitle={activeOverlay?.type === 'case' ? (activeOverlay.data as CaseStudy).subtitle : "Project Details"}
      >
        {renderOverlayContent()}
      </Overlay>
    </div>
  );
};

export default App;