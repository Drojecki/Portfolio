import React, {forwardRef} from 'react';
import '../css/Projects.css'
const Projects = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className='containerProjects'>
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
                        <p className='displayFlex'><p className='Front'>Techs:&nbsp;</p>PHP, SQL, CSS <br/></p>
                        <p className='displayRuby'><p className='Front'>Functionalities:&nbsp;</p> User Authentication, Database Management, Session Management, Financial Transactions</p>
                    </div>
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
            </div>
        </>
    );
});

export default Projects;