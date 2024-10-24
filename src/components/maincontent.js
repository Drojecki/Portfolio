import React from 'react';
import '../css/maincontent.css'

function Maincontent() {
    return (
        <>
            <div className='maincontent'>
                <div className='introduction'>
                    <div className='introductionText'>
                        <p className='HeaderIntText'>Introduction</p>
                        <p>I'm a Fullstack Developer with experience in building web applications, specializing in React, JavaScript, and Angular.<br /> I have strong analytical skills, creativity, and the ability to work effectively under pressure.</p>
                    </div>
                    <div className='introductionImg'>
                    <img className='LogoImgIntroduction' src="/nunu.png" alt="Logo"/>
                    </div>
                </div>
                <div className='techStack'>
                    <img className='TechImg' src="/Tech.png" alt="Logo"/>
                </div>
            </div>
        </>
    );
}

export default Maincontent;