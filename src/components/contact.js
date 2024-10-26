import React, { forwardRef } from 'react';
import '../css/contact.css';

const Contact = forwardRef((props, contactRef) => {
    return (
        <>
            <div ref={contactRef} className='ContactContainer'>
                <div className='Info'>
                    <p>CONTACT</p>
                </div>
                <div className='lineContainerContact'>
                    <div className='lineContact leftContact'></div>
                    <div className='content'>
                        <img src='./Contact/Name.png' />
                        <p>E-mail: juliusz.drojecki@gmail.com</p>
                        <p>Phone: +48 503-538-226</p>
                        <p>Linkedin: <a href='https://www.linkedin.com/in/juliusz-drojecki/'>linkedin.com/in/juliusz-drojecki/</a></p>
                        <p>Github: <a href='https://github.com/Drojecki'>github.com/Drojecki</a></p>
                        <p className='Resume'>&rarr;<a href="/Resume/Juliusz Drojecki.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a></p>
                    </div>
                    <div className='lineContact rightContact'></div>
                </div>
            </div>
        </>
    );
});

export default Contact;
