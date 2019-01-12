import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='header'>
        <div className='content-container-header'>
            <div className='header__content'>
                <div>
                    <Link className='header__content__logo' to="/">CDK</Link>
                </div>
                <div className='header__content__pages'>
                    <Link className='header--link header--link--spacing' to="/">Home</Link>
                    <Link className='header--link header--link--spacing' to="/About">About Me</Link>
                    <Link className='header--link header--link--spacing' to="/projects">Projects</Link>
                    <Link className='header--link' to="contact">Contact</Link>
                </div>
                <div className='header__content__recources'>
                    <a href="https://www.linkedin.com/in/c-dimitri-kontos/" target="_blank"><i className="fab fa-linkedin-in header--icon"></i></a>
                    <a href="https://github.com/ckontos" target="_blank"><i className="fab fa-github header--icon header--icon--spacing"></i></a>
                    <a href="images/resume.pdf" target="_blank"><i className="fas fa-file header--icon header--icon--spacing"></i></a>
                </div>
            </div>
        </div>
    </header>
)

export default Header;