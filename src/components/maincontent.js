import React, { useEffect, useRef } from 'react';
import '../css/maincontent.css'
import Projects from './projects';
import Contact from './contact';

function Maincontent({ setCurrentSection, introductionRef, contactRef, projectRef }) {
    const currentSectionRef = useRef('HOME');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let newSection = currentSectionRef.current;

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === projectRef.current) {
                            newSection = 'PROJECTS';
                        } else if (entry.target === contactRef.current) {
                            newSection = 'CONTACT';
                        } else if (entry.target === introductionRef.current) {
                            newSection = 'HOME';
                        }
                    }
                });

                if (newSection !== currentSectionRef.current) {
                    currentSectionRef.current = newSection;
                    setCurrentSection(newSection);
                }
            },
            { threshold: 0.4 }
        );

        const projectNode = projectRef.current;
        const contactNode = contactRef.current;
        const introductionNode = introductionRef.current;

        if (projectNode) {
            observer.observe(projectNode);
        }
        if (contactNode) {
            observer.observe(contactNode);
        }
        if (introductionNode) {
            observer.observe(introductionNode);
        }

        return () => {
            if (projectNode) {
                observer.unobserve(projectNode);
            }
            if (contactNode) {
                observer.unobserve(contactNode);
            }
            if (introductionNode) {
                observer.unobserve(introductionNode);
            }
        };
    }, [setCurrentSection, projectRef, contactRef, introductionRef]);

    return (
        <>
            <div ref={introductionRef} className='maincontent'>
                <div className='introduction'>
                    <div className='introductionText'>
                        <p className='HeaderIntText'>Introduction</p>
                        <p>I'm a Fullstack Developer with experience in building web applications, specializing in React, JavaScript, and Angular.<br /> I have strong analytical skills, creativity, and the ability to work effectively under pressure.</p>
                    </div>
                    <div className='introductionImg'>
                        <img className='LogoImgIntroduction' src="/nunu.png" alt="Logo" />
                    </div>
                </div>
                <div className='gitlinked'>
                    <a target='_' href='https://github.com/Drojecki'>
                        <img className='Gitimg' src="/Links/Github.png" alt="Logo" />
                    </a>
                    <a target='_' href='https://www.linkedin.com/in/juliusz-drojecki/'>
                        <img className='Gitimg' src="/Links/Linkedin.png" alt="Logo" />
                    </a>
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