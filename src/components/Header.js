import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../static/images/logo.webp';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className='header'>
            <Container>
                <Navbar.Brand href="#home" className='header-logo'>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">JOIN A BOOK CLUB</Nav.Link>
                        <NavDropdown title="FIND A BOOK" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">SEARCH BOOKS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">TOP BOOKS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="COMMUNITY" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">BLOG</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ARTICLES</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">DISCUSSION GUIDES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="link" id = "signIn-btn">SIGN IN</Button>
                <Button variant="secondary" id= 'signUp-btn'>SIGN UP</Button>
            </Container>
        </Navbar>
    );
}

export default Header;