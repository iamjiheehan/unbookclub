import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';
import ImgStyled from '../styled-components/ImgStyled';


export default function Footer() {
    return (
        <>
            <div bg="light" expand="lg" className='footer__container navbar-light bg-light'>
                <Navbar.Brand href="#home" className='footer__top'>
                    <ImgStyled src={logo} alt="Logo" width= "300px" margin="2rem"/>
                </Navbar.Brand>
                <p>© 2023 THE UNBOOK CLUB, Inc. All rights reserved</p>
            </div>
        </>
    )
}
