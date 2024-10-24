import React, { useState, useEffect, useRef } from 'react';
import Header from './header';
import Maincontent from './maincontent';

function Background() {
  const [currentSection, setCurrentSection] = useState('HOME');
  const introductionRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    setCurrentSection('HOME');
}, []);
const scrollToProjects = () => {
  document.querySelector('.containerProjects').scrollIntoView({ behavior: 'smooth' });
};
const scrollToHome = () => {
  if (introductionRef.current) {
      introductionRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};
const scrollToContact = () => {
  if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <div className="background">
      <Header scrollToHome={scrollToHome} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} currentSection={currentSection}/>
      <Maincontent setCurrentSection={setCurrentSection} introductionRef={introductionRef} contactRef={contactRef} />
    </div>
  );
}

export default Background;
