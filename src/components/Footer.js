import React from 'react'

import FooterStyled from '../styled-components/FooterStyled';

export default function Footer() {
    return (
        <>
            <FooterStyled>
                    <div className="footer_menu">
                        <ul>
                            <li><a href="javascript:void(0);">회사소개</a></li>
                            <li><a href="javascript:void(0);">채용안내</a></li>
                            <li><a href="javascript:void(0);">이용약관</a></li>
                            <li><a href="javascript:void(0);" className="bold">개인정보처리방침</a></li>
                            <li><a href="javascript:void(0);">청소년 보호정책</a></li>
                            <li><a href="javascript:void(0);">제휴·마케팅 안내</a></li>
                            <li><a href="javascript:void(0);">판매자 매니저</a></li>
                            <li><a href="javascript:void(0);">출판사·공급사 안내</a></li>
                            <li><a href="javascript:void(0);">광고 안내</a></li>
                            <li><a href="javascript:void(0);">학교·기업·기관 대량구매</a></li>
                        </ul>
                    </div>
                    <div className="footer_bottom inner">
                        <div className="aladin_box">
                            <h3>UNBOOKCLUB</h3>
                            <address>
                                <span>대표이사 한지희</span>
                                <span>고객정보보호 책임자 한지희</span>
                                <span>
                                    <a href="javascript:void(0);">사업자등록 000-00-0000</a>
                                </span>
                                <span>통신판매업신고 중구01520호</span>
                                <span>이메일 hatrix1014@gmail.com</span>
                                <span>호스팅 제공자 UNBOOKCLUB</span>
                                <span>(본사) 서울특별시</span>
                                <div className="copyright">
                                    ⓒ Aladin Communication. All Rights Reserved.
                                </div>
                            </address>
                            <div className="certify">
                                <a href="javascript:void(0);" className="escrow">
                                    구매안전 에스크로<br />서비스 가입 확인
                                </a>
                                <a href="javascript:void(0);" alt="ISMS 인증획득" className="isms">
                                    정보보호 관리체계<br />ISMS 인증획득
                                </a>
                            </div>
                        </div>
                        <div className="cscenter_box">
                            <h3>고객센터 010-0000-0000 (발신자 부담)</h3>
                            <address>
                                <span>서울특별시</span>
                                <span>Fax 02-0000-0000</span>
                            </address>
                            <div className="cs_link">
                                <a href="javascript:void(0);">1:1 문의</a>
                                <a href="javascript:void(0);">FAQ</a>
                            </div>
                            <div className="shop_info">
                                <a href="javascript:void(0);">매장 위치, 영업시간 안내</a>
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
