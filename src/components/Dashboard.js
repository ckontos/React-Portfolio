import React from 'react';
import Header from './Header';
import MobileHeader from './MobileHeader';
import helpers from '../utility/utils';

const Dashboard = () => (
    
    <div className='dash'>
        <div className='desktop-header-container'><Header /></div>
        <div className='mobile-header-container'><MobileHeader /></div>
        <div className='content-container dash__body' onClick={helpers.navOutsideClick}>
            <p className='dash__title'>Welcome! <br /> I'm Dimitri, <br /> a Web Developer.</p>
            <p className='dash__subTitle'> Front End Developer  /  Back End Developer</p>
        </div>
    </div>
);

export default Dashboard;

    
        


