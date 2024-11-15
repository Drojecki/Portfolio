import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Chess.css';
import { FaClipboard, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const Chess = () => {
    const [copied, setCopied] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(id);
            setTimeout(() => setCopied(null), 1500);
        }).catch((err) => {
            console.error('Błąd kopiowania: ', err);
        });
    };

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="background">
            <div className='ContainerChess'>
                <div className="ChessContainer">
                <div className='flex gap'>
                        <span className='Chessdisplay' onClick={handleGoBack}>
                            <FaArrowLeft className='arrowleftChess' style={{ color: 'white', fontSize: '24px' }} />
                        </span>
                        <p>Design</p>
                    </div>
                    <div>
                        <div className='text-center mt'>
                            <img src='Projects/ChessLogin.png' alt='ChessLogin' className='imgChessDisplay' onClick={() => openModal('Projects/ChessLogin.png')}/>
                            <img src='Projects/ChessGame.png' alt='ChessGame' className='imgChessDisplay' onClick={() => openModal('Projects/ChessGame.png')}/>
                        </div>
                        <div className='text-center mt'>
                            <img src='Projects/ChessMove.png' alt='ChessMove' className='imgChessDisplay' onClick={() => openModal('Projects/ChessMove.png')}/>
                            <img src='Projects/ChessStart.png' alt='ChessStart' className='imgChessDisplay' onClick={() => openModal('Projects/ChessStart.png')}/>
                        </div>
                    </div>
                    {modalImage && (
                        <div className="modal" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <img src={modalImage} alt="Full Screen Chess" className="modal-image" />
                            </div>
                        </div>
                    )}
                    <p className='mt'>Steps to Run the Application</p>
                    <p className='mt'>Clone the Repository:</p>
                    <div className='CopyArea mt' onClick={() => handleCopy('git clone git@github.com:Dab-Lisc-Delfin/Chess.git cd ChessDLD', 'repo')}>
                        <div>
                            <p>git clone git@github.com:Dab-Lisc-Delfin/Chess.git</p>
                            <p>cd ChessDLD</p>
                        </div>
                        {copied === 'repo' ? <FaCheckCircle className="copy-icon" style={{ color: 'green' }} /> : <FaClipboard className="copy-icon" />}
                    </div>
                    <p className='mt'>Run the Application:</p>

                    <div className='CopyArea mt' onClick={() => handleCopy('docker-compose up', 'docker')}>
                        <div>
                            <p>docker-compose up</p>
                        </div>
                        {copied === 'docker' ? <FaCheckCircle className="copy-icon" style={{ color: 'green' }} /> : <FaClipboard className="copy-icon" />}
                    </div>
                    <p className='mt'>Acces the application:</p>
                    <div className='RepoChess mt'>
                        <p>Frontend: Open <a target='_' href='http://localhost:4200'>http://localhost:4200</a> in your browser to view the Angular frontend.</p>
                        <p className='mt'>Backend API: The backend API runs on <a target='_' href=' http://localhost:8080'> http://localhost:8080</a>.</p>
                        <p className='mt'>Troubleshooting If you encounter issues on the first run, try:</p>
                    </div>
                    <div className='CopyArea mt' onClick={() => handleCopy('docker-compose down docker-compose up --build', 'dockerdown')}>
                        <div>
                            <p>docker-compose down</p>
                            <p>docker-compose up --build</p>
                        </div>
                        {copied === 'dockerdown' ? <FaCheckCircle className="copy-icon" style={{ color: 'green' }} /> : <FaClipboard className="copy-icon" />}
                    </div>
                    <p className='mt'>HOW TO USE</p>
                    <p className='RepoChess mt'>If the application starts successfully, open <a target='_' href='http://localhost:4200/login'>http://localhost:4200/login</a> and log in using one of the available accounts:</p>
                    <div className='CopyArea mt' onClick={() => handleCopy('Login: test Password: test', 'dockertest')}>
                        <div>
                            <p>Login: test</p>
                            <p>Password: test</p>
                        </div>
                        {copied === 'dockertest' ? <FaCheckCircle className="copy-icon" style={{ color: 'green' }} /> : <FaClipboard className="copy-icon" />}
                    </div>
                    <div className='CopyArea mt' onClick={() => handleCopy('Login: admin Password: admin', 'dockeradmin')}>
                        <div>
                            <p>Login: admin</p>
                            <p>Password: admin</p>
                        </div>
                        {copied === 'dockeradmin' ? <FaCheckCircle className="copy-icon" style={{ color: 'green' }} /> : <FaClipboard className="copy-icon" />}
                    </div>
                    <div className='mt imgCHessTEst'>
                        <img src='Projects/ChessLogin.png' className='imgChess' alt='imgChess'/>
                    </div>
                    <p className='mt'>Alternatively, you can register your own account.</p>
                    <p>Once logged in, click on CREATE GAME.</p>
                    <div className='mt imgCHessTEst'>
                        <img src='Projects/ChessHome.png' className='imgChess' alt='imgChess'/>
                    </div>
                    <p className='RepoChess mt'>During the loading screen, you can copy the full game link and share it with a friend, or alternatively, you can share the last part of the link (the game code) with your friend.</p>
                    <div className='mt imgCHessTEst'>
                        <img src='Projects/ChessGame.png' className='imgChess' alt='imgChess'/>
                    </div>
                    <p className='RepoChess mt'>They can then join the game by clicking JOIN GAME and entering the game code included in the link</p>
                    <div className='mt imgCHessTEst'>
                        <img src='Projects/ChessJoin.png' className='imgChess' alt='imgChess'/>
                    </div>
                    <p className='RepoChess mt'>When the second player connects, the game will automatically start.</p>
                    <div className='mt imgCHessTEst'>
                        <img src='Projects/ChessStart.png' className='imgChess' alt='imgChess'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chess;
