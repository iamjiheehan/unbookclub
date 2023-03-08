import React from 'react'
import '../styles/Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';

export default function Footer() {
    return (
        <>
            <div bg="light" expand="lg" className='footer__container navbar-light bg-light'>
                <Navbar.Brand href="#home" className='footer__top'>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <div className="footer__middle">
                    
                </div>
                <p>© 2023 THE UNBOOK CLUB, Inc. All rights reserved</p>
                <div className="footer__bottom"></div>
            </div>
        </>
    )
}
