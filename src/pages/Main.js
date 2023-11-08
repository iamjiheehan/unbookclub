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
import circle01 from "../static/images/circle01.png";
import circle02 from "../static/images/circle02.png";
import circle03 from "../static/images/circle03.png";
import cardBook1 from "../static/images/cardBook01.jpg";
import cardBook2 from "../static/images/cardBook02.jpg";
import cardBook3 from "../static/images/cardBook03.jpg";

// 스타일컴포넌트 임포트
import * as MainStyled from "../styled-components/MainStyled";
import Button from "../styled-components/ButtonStyled";
import { Btn1, Btn2 } from "styled-components/BtnStyled";

// 커스텀 훅
import useScrollToTopButton from "hooks/useScrollTopBtn";

import {
    FirstImgStyled,
    SecondImgStyled,
} from "../styled-components/ImgStyled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

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
                            <h1>자유롭게 전하는 독서의 즐거움</h1>
                            <p>
                                책을 읽고 난 후의 느낀점 혹은 생각을 솔직하게
                                남겨보세요
                            </p>
                            <div className="wrap-button">
                                <Btn1 to="/board">리뷰게시판 둘러보기</Btn1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="content">
                        {" "}
                        <img src={imgCategory1} alt="" />
                        <Btn2 to="/board" bgColor="#333">
                            자유롭게 전하는 독서 감상문
                        </Btn2>
                    </div>
                    <div className="content">
                        {" "}
                        <img src={imgCategory2} alt="" />
                        <Btn2 to="/board" bgColor="#333">
                            기록으로 남겨보세요
                        </Btn2>
                    </div>
                    <div className="content">
                        {" "}
                        <img src={imgCategory3} alt="" />
                        <Btn2 to="/board" bgColor="#333">
                            유저들과 의견을 공유해보세요
                        </Btn2>
                    </div>
                </div>
                <div className="center">
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={circle01} alt="프로필" />
                            </div>
                            <div className="card-desc">
                                <p>
                                    그저, 좋은 글들만 가득한 책들이 줄 수 없는
                                    개인의 이야기까지 담겨 있는 자전적 에세이
                                    형식의 책을 읽노라면, 세상을 사는 사람들은
                                    저마다의 이유와 아픔이 있구나 하면서, 다시
                                    힘을 내게 됩니다
                                </p>
                            </div>
                            <div className="card-discuss">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    flip="horizontal"
                                    style={{ color: "#000000" }}
                                />
                                <span>&nbsp; 화제의 도서</span>
                            </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title">
                                <span>
                                    <strong>Currently reading</strong>
                                </span>
                            </div>
                            <div className="card-book_img">
                                <img src={cardBook1} alt="프로필" />
                            </div>
                        </div>
                    </MainStyled.Card>
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={circle02} alt="프로필" />
                            </div>
                            <div className="card-desc">
                                <p>
                                    이 세상엔 참 많은 사랑이 있다. 사랑이
                                    서로에게 불가능하다고 느껴지는 사람들. 그런
                                    남녀들에게도 사랑은 찾아오나 보다. 이 책은
                                    기다림과 아픔 끝에 찾아오는 사랑에 대해서
                                    말하고 있었다.
                                </p>
                            </div>
                            <div className="card-discuss">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    flip="horizontal"
                                    style={{ color: "#000000" }}
                                />
                                <span>&nbsp; 화제의 도서</span>
                            </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title">
                                <span>
                                    <strong>Currently reading</strong>
                                </span>
                            </div>
                            <div className="card-book_img">
                                <img src={cardBook2} alt="프로필" />
                            </div>
                        </div>
                    </MainStyled.Card>
                    <MainStyled.Card className="card-wrap">
                        <div className="card-center">
                            <div className="card-img">
                                <img src={circle03} alt="프로필" />
                            </div>
                            <div className="card-desc">
                                <p>
                                    인생의 지혜, 충분한 건강과 휴식, 인간관계
                                    등이 중요함을 우리도 알지만 일상에서는
                                    귀찮다는 핑계로 무심코 넘겨 버리는 이런
                                    요소들을, 꼼꼼하게 되짚고 그 순간에 최선을
                                    다할 것을 저자는 우리에게 가르쳐 주고
                                    있습니다.
                                </p>
                            </div>
                            <div className="card-discuss">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    flip="horizontal"
                                    style={{ color: "#000000" }}
                                />
                                <span>&nbsp; 화제의 도서</span>
                            </div>
                        </div>
                        <div className="card-book">
                            <div className="card-book_title">
                                <span>
                                    <strong>Currently reading</strong>
                                </span>
                            </div>
                            <div className="card-book_img">
                                <img src={cardBook3} alt="프로필" />
                            </div>
                        </div>
                    </MainStyled.Card>
                </div>
                <MainStyled.WideBanner className="wide-banner">
                    <h4>심플한 온라인 북클럽 UNBOOKCLUB</h4>
                </MainStyled.WideBanner>
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
                        <div style={{ overflow: "hidden" }}>
                            <Link to="/bestSellers">
                                <h1 className="display-title">베스트셀러</h1>
                            </Link>
                            <p className="display-content">
                                수십만 명의 독자들이 선택한 책들을 만나보세요
                            </p>
                            <BestSellers />
                        </div>
                        <div style={{ overflow: "hidden", marginTop: "2rem" }}>
                            <Link to="/newbooks">
                                <h1 className="display-title">신간 도서</h1>
                            </Link>
                            <p className="display-content">
                                새로운 도서들을 독자들과 함께 읽어보세요
                            </p>
                            <NewBooks />
                        </div>
                    </Container>
                </div>
            </MainStyled.Wrap>
        </>
    );
}
