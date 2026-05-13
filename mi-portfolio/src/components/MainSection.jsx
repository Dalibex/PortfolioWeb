import { lazy, Suspense } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import EducationExperience from './EducationExperience';
import Contact from './Contact';

const MainSection = ({ isAppLoading }) => {
  return (
    <div className="relative">
      <Header isAppLoading={isAppLoading} />
      
      <main className="relative z-10">
        <About isAppLoading={isAppLoading} />
        <Skills isAppLoading={isAppLoading} />
        <Projects isAppLoading={isAppLoading} />
        <EducationExperience isAppLoading={isAppLoading} />
        <Contact isAppLoading={isAppLoading} />
      </main>
    </div>
  );
};

export default MainSection;