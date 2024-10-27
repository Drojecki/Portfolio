import React, { forwardRef } from 'react';
import '../css/Projects.css'
const Projects = forwardRef((props, projectRef) => {
    return (
        <div ref={projectRef} className='containerProjects'>
            <div className='ProjectsText'>
                <div><p className='Title'>Projects</p></div>
                <div className='LineSP'></div>
            </div>
            <div className='Project testtest'>
                <div className='ProjectInfo'>
                    <div className='ProjectHeader'>
                        <p className='ProjectName'>NFC TagApps</p>
                        <a target='_' href='https://github.com/pleewson/NFC-SocialApp-DisStream'>
                            <p>repository</p>
                        </a>
                    </div>
                    <p className='displayFlex'><span className='Front'>Techs:&nbsp;</span>React Native, NFC</p>
                    <p className='displayRuby'><span className='Front'>Functionalities:&nbsp;</span>The application allows data to be saved on NFC tags, such as Wi-Fi connections, mobile phone numbers, and URL links, making it easier to share and quickly access them.</p>
                </div>
                <div className='PreView'>
                    <a target='_' href='https://play.google.com/store/apps/details?id=com.smieszneitemki&hl=pl'>
                        <img className='ProjectImgTag' src="Projects/Tag1.png" alt="Logo" />
                    </a>
                    <a target='_' href='https://play.google.com/store/apps/details?id=com.nfcadult&hl=pl'>
                        <img className='ProjectImgTag' src="Projects/Tag2.png" alt="Logo" />
                    </a>
                </div>
            </div>
            <div className='Project testPHP'>
                <div className='PreView'>
                    <a target='_' href='https://juliuszdrojecki.pl/projekt_php_studia/The_Vault/logowanie.php'>
                        <img className='ProjectImg' src="Projects/Bank.png" alt="Logo" />
                    </a>
                </div>
                <div className='ProjectInfo'>
                    <div className='ProjectHeader'>
                        <p className='ProjectName'>Bank App</p>
                        <a target='_' href='https://github.com/Drojecki/PHP-SQL-BankApp'>
                            <p>repository</p>
                        </a>
                    </div>
                    <p className='displayFlex'><p className='Front'>Techs:&nbsp;</p>PHP, SQL, CSS <br /></p>
                    <p className='displayRuby'><p className='Front'>Functionalities:&nbsp;</p> User Authentication, Database Management, Session Management, Financial Transactions</p>
                </div>
            </div>
            <div className='SmallProjects'>
                <div><p className='Title'>Small projects</p></div>
                <div className='LineSP'></div>
            </div>
            <div className='SPContainer'>
                <div className='SmallProjectDisplay'>
                    <p className='projectTitle'>Notes</p>
                    <a target='_' href='https://juliuszdrojecki.pl/React/Notes/build/notes.html'>
                        <img className='x' src="SmallProjects/Notes.webp" alt="Logo" />
                    </a>
                </div>
                <div className='SmallProjectDisplay'>
                <p className='projectTitle'>E-commerce</p>
                    <a target='_' href='https://juliuszdrojecki.pl/React/e-commerce/index.html'>
                        <img className='x' src="SmallProjects/Ecc.png" alt="Logo" />
                    </a>
                </div>
                <div className='SmallProjectDisplay'>
                <p className='projectTitle'>Playground</p>
                    <a target='_' href='https://juliuszdrojecki.pl/hello.html'>
                        <img className='x' src="SmallProjects/JS.png" alt="Logo" />
                    </a>
                </div>
                <div className='SmallProjectDisplay'>
                <p className='projectTitle'>GitFinder</p>
                    <a target='_' href='https://juliuszdrojecki.pl/hello.html'>
                        <img className='x' src="SmallProjects/Git.png" alt="Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
});

export default Projects;