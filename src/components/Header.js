import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../static/images/logo.webp';

import ImgStyled from '../styled-components/ImgStyled';
import Button from '../styled-components/ButtonStyled';
import {TextH2, TextP} from '../styled-components/TextStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useSignOut from "../hooks/useSignOut";


import AuthContext from "hooks/AuthContext";


function Header({reviewObj}) {
    const { userObj } = useContext(AuthContext);
    const displayName = userObj?.displayName;
    const onSignOutClick = useSignOut();
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <ImgStyled width = "150px" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/board"><TextP>감상평 쓰러가기</TextP></Nav.Link>
                        <NavDropdown title={<TextP style={{ display: 'inline' }}>감상평 검색하기</TextP>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><TextP>검색어로 찾기</TextP></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><TextP>도서로 찾기</TextP></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link"><TextP>토론 가이드</TextP></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {reviewObj}
                {displayName ? (
                    <>
                        <TextP><strong>{displayName}</strong> 님 반가워요!</TextP>
                        <Button variant="secondary" to='/signIn' bgColor="transparent" fontColor="#e67e22" fontSize="2rem"><FontAwesomeIcon icon={faUser} /></Button>
                        <Button onClick={onSignOutClick}>로그아웃</Button>
                    </>
                    ) : (
                    <>
                        <Button bgColor='transparent' fontColor='#e67e22' fontWeight='900' variant="link" to='/signIn'>로그인</Button>
                        <Button variant="secondary" to='/signIn'>회원가입</Button>
                    </>
                )}
            </Container>
        </Navbar>
    );
}

export default Header;