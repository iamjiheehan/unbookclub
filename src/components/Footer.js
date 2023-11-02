import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/images/logo.webp';
import { ImgStyled } from '../styled-components/ImgStyled';
import {TextH2} from '../styled-components/TextStyled';
import styled from 'styled-components';

import FooterStyled from '../styled-components/FooterStyled';

const styles = styled.div`
    bottom: 0;
    width: 100%;
    height: 3rem;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Footer() {
    return (
        <>
            <FooterStyled>
                    <div className="footer_menu">
                        <ul>
                            <li><a href="./sub.html">회사소개</a></li>
                            <li><a href="./sub.html">채용안내</a></li>
                            <li><a href="./sub.html">이용약관</a></li>
                            <li><a href="./sub.html" className="bold">개인정보처리방침</a></li>
                            <li><a href="./sub.html">청소년 보호정책</a></li>
                            <li><a href="./sub.html">중고매장</a></li>
                            <li><a href="./sub.html">제휴·마케팅 안내</a></li>
                            <li><a href="./sub.html">판매자 매니저</a></li>
                            <li><a href="./sub.html">출판사·공급사 안내</a></li>
                            <li><a href="./sub.html">광고 안내</a></li>
                            <li><a href="./sub.html">학교·기업·기관 대량구매</a></li>
                        </ul>
                    </div>
                    <div className="footer_bottom inner">
                        <div className="aladin_box">
                            <h3>(주)알라딘커뮤니케이션</h3>
                            <address>
                                <span>대표이사 최우경</span>
                                <span>고객정보보호 책임자 최우경</span>
                                <span>
                                    <a href="./sub.html">사업자등록 201-81-23094</a>
                                </span>
                                <span>통신판매업신고 중구01520호</span>
                                <span>이메일 privacy@aladin.co.kr</span>
                                <span>호스팅 제공자 알라딘커뮤니케이션</span>
                                <span>(본사) 서울시 중구 서소문로 89-31</span>
                                <div className="copyright">
                                    ⓒ Aladin Communication. All Rights Reserved.
                                </div>
                            </address>
                            <div className="certify">
                                <a href="./sub.html" className="escrow">
                                    구매안전 에스크로<br />서비스 가입 확인
                                </a>
                                <a href="./sub.html" alt="ISMS 인증획득" className="isms">
                                    정보보호 관리체계<br />ISMS 인증획득
                                </a>
                            </div>
                        </div>
                        <div className="cscenter_box">
                            <h3>고객센터 1544-2514 (발신자 부담)</h3>
                            <address>
                                <span>서울시 마포구 백범로 71 숨도빌딩 7층</span>
                                <span>Fax 02-6926-2600</span>
                            </address>
                            <div className="cs_link">
                                <a href="./sub.html">1:1 문의</a>
                                <a href="./sub.html">FAQ</a>
                            </div>
                            <div className="shop_info">
                                <a href="./sub.html">중고매장 위치, 영업시간 안내</a>
                            </div>
                        </div>
                    </div>
            </FooterStyled>
            {/* <div style={styles.footer} bg="light" expand="lg" className='navbar-light bg-light'>
                    <Navbar.Brand href="/" >
                        <ImgStyled src={logo} alt="Logo" width= "300px" margin="2rem"/>
                    </Navbar.Brand>
                    <TextH2 padding='0 0 2rem 0' color='#61777f'>© 2023 THE UNBOOK CLUB, Inc. All rights reserved</TextH2>
            </div> */}
        </>
    )
}
