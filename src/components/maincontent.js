import React, { useRef, useEffect } from 'react';
import '../css/maincontent.css'
import Projects from './projects';
import Contact from './contact';

function Maincontent({ setCurrentSection, introductionRef, contactRef, projectRef }) {
    let currentSection = 'HOME';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let newSection = currentSection;

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === projectRef.current) {
                            newSection = 'PROJECTS';
                            console.log("PROJects");
                        } else if (entry.target === contactRef.current) {
                            newSection = 'CONTACT';
                            console.log("contact");
                        } else if (entry.target === introductionRef.current) {
                            newSection = 'HOME';
                            console.log("home");
                        }
                    }
                });

                currentSection = newSection; 
                setCurrentSection(currentSection);

                // const isMobile = window.matchMedia("(max-width: 768px)").matches;
                // if (isMobile) {
                //     const anySectionVisible = entries.some(entry => entry.isIntersecting);
                //     console.log('Czy jakakolwiek sekcja jest widoczna:', anySectionVisible);
                
                //     if (!anySectionVisible) {
                //         console.log('Żadna sekcja nie jest widoczna. Ustawienie sekcji na PROJECTS.');
                //         setCurrentSection('PROJECTS');
                //     } else {
                //         console.log('Wykryta sekcja:', currentSection); 
                //     }
                // }
            },
            { threshold: 0.4 }
        );

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }
        if (contactRef.current) {
            observer.observe(contactRef.current);
        }
        if (introductionRef.current) {
            observer.observe(introductionRef.current);
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
            if (introductionRef.current) {
                observer.unobserve(introductionRef.current);
            }
        };
    }, [setCurrentSection, projectRef, contactRef, introductionRef]);
    return (
        <>
            <div ref={introductionRef} className='maincontent'>
                <div  className='introduction'>
                    <div className='introductionText'>
                        <p className='HeaderIntText'>Introduction</p>
                        <p>I'm a Fullstack Developer with experience in building web applications, specializing in React, JavaScript, and Angular.<br /> I have strong analytical skills, creativity, and the ability to work effectively under pressure.</p>
                    </div>
                    <div className='introductionImg'>
                        <img className='LogoImgIntroduction' src="/nunu.png" alt="Logo" />
                    </div>
                </div>
                <div className='gitlinked'>
                <img className='Gitimg' src="/Links/Github.png" alt="Logo" />
                <img className='Gitimg' src="/Links/Linkedin.png" alt="Logo" />
                </div>
                <div className='lineContainer'>
                    <div className='line left'></div>
                    <p>TechStack</p>
                    <div className='line right'></div>
                </div>
                <div className='techStack'>
                    <img className='TechImg' src="Tech/PHP.png" alt="Logo" />
                    <img className='TechImg' src="Tech/HTML.png" alt="Logo" />
                    <img className='TechImg' src="Tech/JS.png" alt="Logo" />
                    <img className='TechImg' src="Tech/React.webp" alt="Logo" />
                    <img className='TechImg' src="Tech/Angular.png" alt="Logo" />
                    <img className='TechImg' src="Tech/NODEJS.png" alt="Logo" />
                    <img className='TechImg' src="Tech/CSS.png" alt="Logo" />
                    <img className='TechImg' src="Tech/MYSQL.png" alt="Logo" />
                </div>
                <div className='Line1'>
                    <div className='line left'></div>
                    <div className='line right'></div>
                </div>
                <div>
                    <Projects ref={projectRef} />
                </div>
                <div>
                    <Contact ref={contactRef} />
                </div>

            </div>
        </>
    );
}

export default Maincontent;