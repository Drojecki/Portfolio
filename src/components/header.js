import React from 'react';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='headerContent'>
                    <div className='headerIntroduction'>
                        <p className='color'>HOME</p>
                        <p>ABOUT ME</p>
                        <p>PROJECTS</p>
                        <p>CONTACT</p>
                    </div>
                    <div className='headerName'>
                        <a href='./'>
                        <p>Juliusz Drojecki</p>
                        <img className='LogoImg' src="/DLD.jpg" alt="Logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;