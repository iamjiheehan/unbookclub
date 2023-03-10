import React from 'react';

import Container from 'react-bootstrap/Container';

import main from '../static/images/main-01.webp';
import icon01 from '../static/images/main-icon-01.webp';
import icon02 from '../static/images/main-icon-02.webp';
import icon03 from '../static/images/main-icon-03.webp';
import icon04 from '../static/images/main-icon-04.webp';
import icon05 from '../static/images/main-icon-05.webp';
import icon06 from '../static/images/main-icon-06.webp';
import testimonial from '../static/images/main-testimonial.webp';

import MainBestSellers from '../components/MainBestSellers';

import Button from '../styled-components/ButtonStyled'; 
import ImgStyled from '../styled-components/ImgStyled';
import { FlexRow, FlexCol } from '../styled-components/FlexStyled'
import BackStyled from '../styled-components/BackStyled';
import {TextH1,TextH2,TextP} from '../styled-components/TextStyled';
import GridStyled from '../styled-components/GridStyled';


function Main() {
    return (
        <>
            <Container>
                <div>
                    <ImgStyled src={main} alt="mainImage" height="500px" />
                    <div>
                        <h2> Your Book club, made simple.</h2>
                        <p> Organize your club, start a new one,<br/> and find your book people. For free.</p>
                        <Button to="/board">글 쓰러가기</Button>
                    </div>
                </div>
            </Container>
                <div>
                <TextH1 bgColor='#61777F' padding='1.5rem' color='white' lineHeight='100%'>Organize your book club...and your bookshelves. All for free.</TextH1>
                    <Container>
                        <FlexRow margin = '2rem auto'>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon01} alt="icon-book" maxWidth="300px"/>
                                <p>View all the books your club has read in one place</p>
                            </FlexRow>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon02} alt="icon-boy" maxWidth="300px"/>
                                <p>Manage your club membership online — no more email chains!</p>
                            </FlexRow>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon03} alt="icon-glasses" maxWidth="300px"/>
                                <p>Get inspired — see what other book clubs are reading</p>
                            </FlexRow>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon04} alt="icon-file" maxWidth="300px"/>
                                <p>Poll your members to select books and meeting dates</p>
                            </FlexRow>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon05} alt="icon-star" maxWidth="300px"/>
                                <p>Rate each book you read and save ratings</p>
                            </FlexRow>
                            <FlexRow flexBasis='33.3%' alignItems='flex-end'>
                                <ImgStyled src={icon06} alt="icon-people" maxWidth="300px"/>
                                <p>Connect with others in the Bookclubs community</p>
                            </FlexRow>
                        </FlexRow>
                    </Container>
                    <Button to="/board">글 쓰러가기</Button>
                    <Container>
                        <div>
                            <h1>이용 후기</h1>
                            <GridStyled>
                                <div>
                                    <BackStyled position = 'relative' height='100%' padding='30px 30px 40px'>
                                        <div>
                                            <p><strong>다양한 사람들</strong></p>
                                            <p>“Our club started off as an experiment for me to bring together all the incredible women in my life together under a common interest (books), but it's turned into much more than that! Now after two years, we've come together as one group of friends and confidants who support, share, and challenge each other on everything from literature to love & loss to life in general.”</p>
                                        </div>
                                    </BackStyled>
                                </div>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px'>
                                    <div>
                                        <div>
                                            <p><strong>시간 절약</strong></p>
                                            <p>“What has made it easier for our book club with your platform? Almost everything. From being able to add books with a visual aspect, which has helped cut down on the number of times members can’t find the right book, to being able to have members put books on shelves that they would like our group to read, to being able to have all our information in one easy resource. Thank you.”</p>
                                        </div>
                                    </div>
                                </BackStyled>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px'>
                                    <div className="testimotial-box">
                                        <div className="testimotial-text">
                                            <p><strong>편리함 최고</strong></p>
                                            <p>“My first book club meeting went well and was ah-mazing. Thanks so much for following up. Bookclubs was great in facilitating the meeting set up with the reminders and the attendees loved it as much as I did. Thanks again for everything.”</p>
                                        </div>
                                    </div>
                                </BackStyled>
                                <BackStyled position = 'relative' height='100%' padding='30px 30px 40px'>
                                    <div>
                                        <div>
                                            <p><strong>심플한 이용방법</strong></p>
                                            <p>“So many emails before Bookclubs! Now I can easily manage three book clubs, not just one, and it’s so fun and simple. Best service ever.”</p>
                                        </div>
                                    </div>
                                </BackStyled>
                            </GridStyled>
                        </div>
                    </Container>
                    <div>
                        <ImgStyled src={testimonial} alt="testimonial-image" height= "400px"/>
                    </div>
                    <div>
                        <Container>
                            <div style={{overflow:'hidden'}}>
                                <h1>베스트셀러</h1>
                                <p>Hundreds of thousands of readers can not be wrong. Check out the most popular books that book clubs across the world are reading this week.</p>
                                <MainBestSellers/>
                            </div>
                            <Button to="/search">도서 검색하러 가기</Button>
                        </Container>
                    </div>
            </div>
        </>
    );
}

export default Main;
