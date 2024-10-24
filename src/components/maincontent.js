import React, { useRef, useEffect } from 'react';
import '../css/maincontent.css'
import Projects from './projects';
function Maincontent({ setCurrentSection , introductionRef}) {
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCurrentSection('PROJECTS');
                } else {
                    setCurrentSection('HOME');
                }
            },
            { threshold: 0.4 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, [setCurrentSection]);
    return (
        <>
            <div className='maincontent'>
                <div ref={introductionRef} className='introduction'>
                    <div className='introductionText'>
                        <p className='HeaderIntText'>Introduction</p>
                        <p>I'm a Fullstack Developer with experience in building web applications, specializing in React, JavaScript, and Angular.<br /> I have strong analytical skills, creativity, and the ability to work effectively under pressure.</p>
                    </div>
                    <div className='introductionImg'>
                        <img className='LogoImgIntroduction' src="/nunu.png" alt="Logo" />
                    </div>
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
                <div className='lineContainer'>
                    <div className='line left'></div>
                    <div className='line right'></div>
                </div>
                <Projects ref={projectsRef} />
            </div>
        </>
    );
}

export default Maincontent;