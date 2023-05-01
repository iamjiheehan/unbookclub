import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';

import LoginBtn from '../styled-components/LoginBtnStyled';
import { ImgStyled, LogoImgStyled } from '../styled-components/ImgStyled';
import Button from '../styled-components/ButtonStyled';
import { TextP } from '../styled-components/TextStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useSignOut from "../hooks/useSignOut";
import { LoadingBack, LoadingText } from '../styled-components/LoadingStyled';
import Cube from "../static/images/cube.gif";

import AuthContext from "contexts/AuthContext";
import { firebaseInstance } from 'fBase';

function Header({reviewObj}) {
    const { userObj } = useContext(AuthContext);
    const displayName = userObj?.displayName;
    const onSignOutClick = useSignOut();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged((user) => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <LoadingBack>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
        <img src={Cube} alt="로딩중" width="5%" />
    </LoadingBack>;
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <LogoImgStyled src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/board"><TextP>독후감 게시판</TextP></Nav.Link>
                        <Nav.Link href="/books"><TextP>도서 검색</TextP></Nav.Link>
                        <Nav.Link href="/guide"><TextP>독후감 가이드</TextP></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {reviewObj}
                {displayName ? (
                    <>
                        <TextP><strong>{displayName}</strong> 님 반가워요!</TextP>
                        <LoginBtn variant="secondary" to='/signIn' bgColor="transparent" fontColor="#e67e22" fontSize="2rem"><FontAwesomeIcon icon={faUser} /></LoginBtn>
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
