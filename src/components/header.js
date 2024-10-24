import React from 'react';

function Header({ currentSection, scrollToProjects, scrollToHome }) {
    return (
        <>
            <div className='header'>
                <div className='headerContent'>
                    <div className='headerIntroduction'>
                        <p onClick={scrollToHome} style={{ cursor: 'pointer', color: currentSection === 'HOME' ? '#C51DCE' : '' }}>
                            HOME
                        </p>
                        <p onClick={scrollToProjects} style={{ cursor: 'pointer', color: currentSection === 'PROJECTS' ? '#C51DCE' : '' }}>
                            PROJECTS
                        </p>
                        <p>ABOUT ME</p>
                        <p>CONTACT</p>
                    </div>
                    <div className='headerName'>
                        <a href='./'>
                            <p>Juliusz Drojecki</p>
                            <img className='LogoImg' src="/DLD.jpg" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;