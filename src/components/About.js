import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import helpers from '../utility/utils';

const About = () => (
    <div className='about-container'>
        <div className='desktop-header-container'><Header /></div>
        <div className='mobile-header-container'><MobileHeader /></div>
        <div className='about' onClick={helpers.navOutsideClick}>
            <div className='about__picture'>
                <img className='headshot'src='/images/headshot1.jpg' />
            </div>
            <div className='about__bio'>
                <h1>About Me</h1>
                <p>My name is Dimitri Kontos.  I am a Full-Stack Web Developer living in Charlotte, NC.  I have been exposed to code off and on every since middle school, where I took my first html class.  I attended the University of North Carolina at Charlotte where I studied Exercise Science and Mathematics.  My self-taught coding experience throughout my undergraduate studies led me to also get a graduate certificate in Web Development from a bootcamp at UNCC.</p>
                <p>My experience in health an wellness, both personal and professional, has given me a deep rooted sense of discipline that is the driving force behind everthing I do.  I love the process of planning and executing my way towards an end product.  The never ending knowledge as a developer is something I thrive on each day as I increase my competancy in familar and new technologies alike.  I have been able to help design my own start up business' web platform, and also handle quality assurance with a young company called Bellhops.  All while taking on personal projects and other freelance endeavors.</p>
                <p>I am skilled in many front and back end technologies. In terms of styling, I am strong with CSS, SCSS, and CSS frameworks such as Materialize and Bootstrap. On the front end, I am skilled with javascript(ES5/ES6), jQuery, and React JS/Redux.  On the back end I primarily work with node.js to construct my servers, and can work with storage systems such as SQL, MongoDB, and firebase databases.</p>
            </div>
        </div>
        <Footer />
    </div>
)

export default About;