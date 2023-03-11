import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';
import ImgStyled from '../styled-components/ImgStyled';
import {TextH2} from '../styled-components/TextStyled';

export default function Footer() {
    return (
        <>
            <div bg="light" expand="lg" className='navbar-light bg-light'>
                <Navbar.Brand href="/" >
                    <ImgStyled src={logo} alt="Logo" width= "300px" margin="2rem"/>
                </Navbar.Brand>
                <TextH2 padding='0 0 2rem 0' color='#61777f'>© 2023 THE UNBOOK CLUB, Inc. All rights reserved</TextH2>
            </div>
        </>
    )
}
