import React from 'react';
import { Link } from 'react-router-dom';

export default class MobileHeader extends React.Component {

    openNav = () => {
        document.getElementById("mySideNav").style.width = "250px";
    };

    closeNav = () => {
        document.getElementById("mySideNav").style.width = "0";
    };

    render() {
        return (
            <header className='header'>
                <div className='content-container-header'>
                    <div className='header__content'>
                        <div>
                            <a className='header__content__logo'>CDK</a>
                        </div>
                        <div className='header__content__pages'>
                            <i className="mobile_dropdown fa fa-bars fa-2x" aria-hidden="true" onClick={this.openNav}></i>
                        </div>
                        <div id="mySideNav" className="sideNav">
                            <a className="closebtn sidenav__link" onClick={this.closeNav}>&times;</a>
                            <Link className='sidenav__link' to="/">Home</Link>
                            <Link className='sidenav__link' to="/About">About Me</Link>
                            <Link className='sidenav__link' to="/projects">Projects</Link>
                            <Link className='sidenav__link' to="contact">Contact</Link>
                            <div className='header__content__recources mobile__header__recources'>
                                <i className="fab fa-linkedin-in header--icon header--icon--mobile"></i>
                                <i className="fab fa-github header--icon header--icon--mobile header--icon--spacing"></i>
                                <i className="fas fa-file header--icon header--icon--mobile header--icon--spacing"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}