import React from 'react'
import '../styles/Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Footer() {
    return (
        <>
            <div bg="light" expand="lg" className='footer__container navbar-light bg-light'>
                <Navbar.Brand href="#home" className='footer__top'>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <div className="footer__middle">
                    <div className="footer__nav">
                        <div className="footer__nav-item">
                            <p className="nav-title">Company</p>
                            <p className="nav-item"><a href="#" className='nav-link'>About Bookclubs</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>Privacy Policy</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>Terms of Use</a></p>
                        </div>
                        <div className="footer__nav-item">
                            <p className="nav-title">Support</p>
                            <p className="nav-item"><a href="#" className='nav-link'>Discussion Questions</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>Contact Us</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>FAQ</a></p>
                        </div>
                        <div className="footer__nav-item">
                            <p className="nav-title">Bookclubs for...</p>
                            <p className="nav-item"><a href="#" className='nav-link'>Business</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>Charities</a></p>
                            <p className="nav-item"><a href="#" className='nav-link'>Bookstores</a></p>
                        </div>
                    </div>
                    <div className="subscribe-block">
                        <p className="nav-title">Connect</p>
                        <p className="nav-item">Join THE UNBOOK CLUB newsletter for monthly reading recommendations,<br/>book club tips, giveaways, and more.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                    </div>
                </div>
                <p>© 2023 THE UNBOOK CLUB, Inc. All rights reserved</p>
                <div className="footer__bottom"></div>
            </div>
        </>
    )
}
