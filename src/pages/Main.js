import React from "react";
import Container from "react-bootstrap/Container";
import * as MainStyled from "../styled-components/MainStyled";

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

import { NewBooks } from "../components/NewBooks";
import { BestSellers } from "../components/BestSellers";

import Button from "../styled-components/ButtonStyled";
import { Btn1, Btn2 } from "styled-components/BtnStyled";

import {
    ImgStyled,
    LastImgStyled,
    FirstImgStyled,
} from "../styled-components/ImgStyled";
import { FlexRow, FlexCol } from "../styled-components/FlexStyled";
import BackStyled from "../styled-components/BackStyled";
import { TextH1, TextH2, TextP } from "../styled-components/TextStyled";
import GridStyled from "../styled-components/GridStyled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

export default function Main() {
    return (
        <>
            <MainStyled.Wrap>
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
                        <FirstImgStyled height="27rem" src={main2} alt="mainImage" />
                    </div>
                </div>
            </MainStyled.Wrap>
            {/* <div>
                <TextH1 bgColor='#61777F' padding='1.5rem' color='white' lineHeight='100%'>심플한 온라인 북클럽, THE UNBOOK CLUB</TextH1>
                    <Container>
                        <FlexRow style={{flexWrap:"wrap"}}>
                            <FlexCol flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon01} alt="icon-book" maxWidth="300px"/>
                                <TextH2 padding='0 1rem'>지금까지 읽은 책 목록을 기록 할 수 있어요.</TextH2>
                            </FlexCol>
                            <FlexCol flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon02} alt="icon-boy" maxWidth="300px"/>
                                <TextH2 padding='0 1rem'>불필요한 과정은 모두 생략했답니다.</TextH2>
                            </FlexCol>
                            <FlexCol flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon03} alt="icon-glasses" maxWidth="300px"/>
                                <TextH2 padding='0 1rem'>다른사람들과 생각을 공유하고 토론해보세요. </TextH2>
                            </FlexCol>
                            <FlexCol flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon04} alt="icon-file" maxWidth="300px"/>
                                <TextH2 padding='0 1rem'>읽은 책에 대해 평점을 매겨 추후 참고할 수 있어요.</TextH2>
                            </FlexCol>
                            <FlexCol flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon05} alt="icon-star" maxWidth="300px"/>
                                <TextH2 padding='0 1rem'>유저들이 추천하는 책들을 확인해보세요.</TextH2>
                            </FlexCol>
                        </FlexRow>
                    </Container>
                    <Button to="/board">독후감 쓰러가기</Button>
                    <Container>
                        <div>
                            <TextH1 padding='0 0 2rem 0'>이용 후기</TextH1>
                            <GridStyled>
                                <div>
                                    <BackStyled position = 'relative' height='100%' padding='30px 30px 40px' bgRadius='30px' bgShadow='0 4px 4px rgb(0 0 0 / 25%)'>
                                        <div>
                                            <TextH2 padding='0 0 1.5rem 0'>다양한 사람들</TextH2>
                                            <TextP>“공통의 관심사인 책으로 함께 시도해보는 실험으로 시작되었지만, 이젠 그 이상의 가치를 가지게 되었어요! 우리는 서로를 지지하며 나누고, 문학에서부터 사랑과 이별, 삶의 모든 것에 대해 도전하고 함께 성장하는 자신감 있는 사람들로 성장했어요."</TextP>
                                        </div>
                                    </BackStyled>
                                </div>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px' bgRadius='30px' bgShadow='0 4px 4px rgb(0 0 0 / 25%)'>
                                    <div>
                                        <div>
                                            <TextH2 padding='0 0 1.5rem 0'>시간 절약</TextH2>
                                            <TextP>“시각적인 측면을 고려해 책을 추가할 수 있어서 원하는 책을 찾지 못하는 횟수가 줄어들었어요! 읽고 싶은 책을 책장에 추가할 수 있게 되어 독서 목록을 더욱 다양하게 구성할 수 있어요.”</TextP>
                                        </div>
                                    </div>
                                </BackStyled>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px' bgRadius='30px' bgShadow='0 4px 4px rgb(0 0 0 / 25%)'> 
                                    <div>
                                        <div>
                                            <TextH2 padding='0 0 1.5rem 0'>자유로운 소통</TextH2>
                                            <TextP>“개인정보를 최소화 한 채로 글을 남기는 덕분에, 다른 사람들에게 저의 의견을 남기는 것이 두렵지 않아요. 예전에는 비판하는 반응이 두려워서 글을 남기기 많이 망설여졌지만, 현재는 꽤나 편하게 저의 생각을 나눌 수 있어요.”</TextP>
                                        </div>
                                    </div>
                                </BackStyled>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px' bgRadius='30px' bgShadow='0 4px 4px rgb(0 0 0 / 25%)'>
                                    <div>
                                        <div>
                                            <TextH2 padding='0 0 1.5rem 0'>심플한 이용방법</TextH2>
                                            <TextP>“불필요한 과정들이나 절차 없이 책을 읽으면 바로 적을 수 있어서, 저의 생각을 더욱 생생하게 기록할 수 있어요. 정말 편리해요. 저희 어머니도 함께 이용하실 수 있을 정도로 직관적인 메뉴들이 마음에 들어요.”</TextP>
                                        </div>
                                    </div>
                                </BackStyled>
                            </GridStyled>
                        </div>
                    </Container>
                    <div>
                        <LastImgStyled src={testimonial} alt="testimonial-image" />
                    </div>
                    <div>
                        <Container>
                            <div style={{overflow:'hidden'}}>
                                <TextH1 padding= '0 0 1rem 0'>베스트셀러</TextH1>
                                <TextH2 padding='0 0 2rem 0'>수십만 명의 독자들이 선택한 책들을 만나보세요!</TextH2>
                                <BestSellers/>
                            </div>
                            <div style={{overflow:'hidden',marginTop:"2rem"}} >
                                <TextH1 padding= '0 0 1rem 0'>신간 도서</TextH1>
                                <TextH2 padding='0 0 2rem 0'>새로운 도서들을 독자들과 함께 읽어보세요!</TextH2>
                                <NewBooks />
                            </div>
                            <Button to="/books" margin="0 0 3rem 0">도서 검색하러 가기</Button>
                        </Container>
                    </div>
            </div> */}
        </>
    );
}
