import React from "react";

// 부트스트랩 라이브러리 임포트
import Container from "react-bootstrap/Container";

// 컴포넌트
import { NewBooks } from "../components/NewBooks";
import { BestSellers } from "../components/BestSellers";

// 이미지 임포트
import main from "../static/images/banner_home.webp";
import main2 from "../static/images/main-01.webp";

import imgCategory1 from "../static/images/img-category1.webp";
import imgCategory2 from "../static/images/img-category2.webp";
import imgCategory3 from "../static/images/img-category3.webp";
import cardBackground1 from "../static/images/cardBackground1.jpg";
import cardBook1 from "../static/images/cardBook1.jpg";
import icon01 from "../static/images/main-icon-01.webp";
import icon02 from "../static/images/main-icon-02.webp";
import icon03 from "../static/images/main-icon-03.webp";
import icon04 from "../static/images/main-icon-04.webp";
import icon05 from "../static/images/main-icon-05.webp";

import testimonial from "../static/images/main-testimonial.webp";

// 스타일컴포넌트 임포트
import * as MainStyled from "../styled-components/MainStyled";
import Button from "../styled-components/ButtonStyled";
import { Btn1, Btn2 } from "styled-components/BtnStyled";


// 커스텀 훅
import useScrollToTopButton from "hooks/useScrollTopBtn";

import {
    ImgStyled,
    LastImgStyled,
    FirstImgStyled,
    SecondImgStyled
} from "../styled-components/ImgStyled";
import { FlexRow, FlexCol } from "../styled-components/FlexStyled";
import BackStyled from "../styled-components/BackStyled";
import { TextH1, TextH2, TextP } from "../styled-components/TextStyled";
import GridStyled from "../styled-components/GridStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Main() {

    useScrollToTopButton();
    
    return (
        <>
            <MainStyled.Wrap>
            <button type="button" className="go_top btnScrollToTop">
                위로가기
            </button>
                <div className="home-banner">
                    <div className="home-banner-container">
                        <FirstImgStyled src={main} alt="mainImage" />
                        <div className="banner-content">
                            <h1>Building community through books</h1>
                            <p>
                                Organize your club, start a new one, or find
                                your book people
                            </p>
                            <div className="wrap-button">
                                <Btn1 to="/board">리뷰게시판 둘러보기</Btn1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="content"> <img src={imgCategory1} alt=""/>
                        <Btn2 to="/board" bgColor="#333">GET YOUR CLUB ORGANIZED</Btn2>
                    </div>
                    <div className="content"> <img src={imgCategory2} alt=""/>
                        <Btn2 to="/board" bgColor="#333">FIND A CLUB TO JOIN</Btn2>
                    </div>
                    <div className="content"> <img src={imgCategory3} alt=""/>
                        <Btn2 to="/board" bgColor="#333">DISCOVER NEW BOOKS</Btn2>
                    </div>
                </div>
                <div className="center">
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={cardBackground1} alt="프로필" />
                            </div>
                            <div className="card-title"><h4>Read the Classics</h4></div>
                            <div className="card-desc"><p>If you're looking for fellow bookworms to disc...</p></div>
                            <div className="card-discuss">
                            <FontAwesomeIcon icon={faMessage} flip="horizontal" style={{ color: "#000000" }} />
                            <span>&nbsp; DISCUSSES ONLINE</span>
                        </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title"><spans><strong>Currently reading</strong></spans></div>
                            <div className="card-book_img"><img src={cardBook1} alt="프로필" /></div>
                        </div>
                    </MainStyled.Card>
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={cardBackground1} alt="프로필" />
                            </div>
                            <div className="card-title"><h4>Read the Classics</h4></div>
                            <div className="card-desc"><p>If you're looking for fellow bookworms to disc...</p></div>
                            <div className="card-discuss">
                            <FontAwesomeIcon icon={faMessage} flip="horizontal" style={{ color: "#000000" }} />
                            <span>&nbsp; DISCUSSES ONLINE</span>
                        </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title"><spans><strong>Currently reading</strong></spans></div>
                            <div className="card-book_img"><img src={cardBook1} alt="프로필" /></div>
                        </div>
                    </MainStyled.Card>
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={cardBackground1} alt="프로필" />
                            </div>
                            <div className="card-title"><h4>Read the Classics</h4></div>
                            <div className="card-desc"><p>If you're looking for fellow bookworms to disc...</p></div>
                            <div className="card-discuss">
                            <FontAwesomeIcon icon={faMessage} flip="horizontal" style={{ color: "#000000" }} />
                            <span>&nbsp; DISCUSSES ONLINE</span>
                        </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title"><spans><strong>Currently reading</strong></spans></div>
                            <div className="card-book_img"><img src={cardBook1} alt="프로필" /></div>
                        </div>
                    </MainStyled.Card>
                </div>
                <MainStyled.WideBanner className="wide-banner"><h4>심플한 온라인 북클럽 UNBOOKCLUB</h4></MainStyled.WideBanner>
                <div className="mid-banner">
                    <div className="mid-banner-container">
                        <div className="mid-banner-content">
                            <div className="wrap-button">
                                <Btn2 to="/board">리뷰게시판 둘러보기</Btn2>
                            </div>
                        </div>
                        <SecondImgStyled src={main2} alt="mainImage" />
                    </div>
                </div>
                <div className="display">
                    <Container>
                        <div style={{overflow:'hidden'}}>
                            <a href="#!">
                                <h1 className="display-title">베스트셀러</h1>
                            </a>
                            <p className="display-content">수십만 명의 독자들이 선택한 책들을 만나보세요</p>
                            <BestSellers/>
                        </div>
                        <div style={{overflow:'hidden',marginTop:"2rem"}} >
                            <a href="#!">
                                <h1 className="display-title">신간 도서</h1>
                            </a>
                            <p className="display-content">새로운 도서들을 독자들과 함께 읽어보세요</p>
                            <NewBooks />
                        </div>
                    </Container>
                </div>
            </MainStyled.Wrap>
        </>
    );
}
