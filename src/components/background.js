import React, { useState, useEffect, useRef } from 'react';
import Header from './header';
import Maincontent from './maincontent';

function Background() {
  const [currentSection, setCurrentSection] = useState('HOME');
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const introductionRef = useRef(null);
  const isMobile = () => {
    return window.matchMedia("(max-width: 768px)").matches;
  };

  const scrollToProjects = () => {
  if (projectRef.current) {
    projectRef.current.scrollIntoView({ behavior: isMobile() ? 'auto' : 'smooth' });
  }
};

const scrollToHome = () => {
  if (introductionRef.current) {
    introductionRef.current.scrollIntoView({ behavior: isMobile() ? 'auto' : 'smooth' });
  }
};

const scrollToContact = () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: isMobile() ? 'auto' : 'smooth', block: 'center' });
  }
};
  return (
    <div className="background">
      <Header scrollToHome={scrollToHome} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} currentSection={currentSection} />
      <Maincontent setCurrentSection={setCurrentSection} introductionRef={introductionRef} contactRef={contactRef} projectRef={projectRef} />
    </div>
  );
}

export default Background;
