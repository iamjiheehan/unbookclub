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
                        <Nav.Link href="#link">감상평 쓰러가기</Nav.Link>
                        <NavDropdown title="도서 검색하기" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">검색어로 찾기</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">베스트셀러 보기</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">토론 가이드</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="link" id = "signIn-btn">로그인</Button>
                <Button variant="secondary" id= 'signUp-btn'>회원가입</Button>
            </Container>
        </Navbar>
    );
}

export default Header;