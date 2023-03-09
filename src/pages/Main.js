import React from 'react';
import '../styles/Main.css';

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

import LinkButton from '../styled-components/LinkBtnStyled'; 
import ImgStyled from '../styled-components/ImgStyled';

function Main() {
    return (
        <>
            <Container>
                <div className="main__top">
                        <ImgStyled src={main} alt="mainImage" height="500px" />
                    <div className="main__top-text">
                        <h2 className="main__title"> Your Book club, made simple.</h2>
                        <p className="main__content"> Organize your club, start a new one,<br/> and find your book people. For free.</p>
                        <LinkButton to="/board">글 쓰러가기</LinkButton>
                    </div>
                </div>
            </Container>
                <div className="main__icon">
                <h1 className="main__icon-title">Organize your book club...and your bookshelves. All for free.</h1>
                    <Container>
                        <div className="icon-flexbox">
                            <div className="icon-item">
                                <ImgStyled src={icon01} alt="icon-book" maxWidth="300px"/>
                                <p>View all the books your club has read in one place</p>
                            </div>
                            <div className="icon-item">
                                <ImgStyled src={icon02} alt="icon-boy" maxWidth="300px"/>
                                <p>Manage your club membership online — no more email chains!</p>
                            </div>
                            <div className="icon-item">
                                <ImgStyled src={icon03} alt="icon-glasses" maxWidth="300px"/>
                                <p>Get inspired — see what other book clubs are reading</p>
                            </div>
                            <div className="icon-item">
                                <ImgStyled src={icon04} alt="icon-file" maxWidth="300px"/>
                                <p>Poll your members to select books and meeting dates</p>
                            </div>
                            <div className="icon-item">
                                <ImgStyled src={icon05} alt="icon-star" maxWidth="300px"/>
                                <p>Rate each book you read and save ratings</p>
                            </div>
                            <div className="icon-item">
                                <ImgStyled src={icon06} alt="icon-people" maxWidth="300px"/>
                                <p>Connect with others in the Bookclubs community</p>
                            </div>
                        </div>
                    </Container>
                    <LinkButton to="/board">글 쓰러가기</LinkButton>
                    <Container>
                        <div className="main__testimonials">
                            <h1>이용 후기</h1>
                            <div className="testimonial-wrapper">
                                <div className='testimonial-item'>
                                    <div className="testimotial-box">
                                        <div className="testimotial-text">
                                            <p><strong>다양한 사람들</strong></p>
                                            <p>“Our club started off as an experiment for me to bring together all the incredible women in my life together under a common interest (books), but it's turned into much more than that! Now after two years, we've come together as one group of friends and confidants who support, share, and challenge each other on everything from literature to love & loss to life in general.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-item'>
                                    <div className="testimotial-box">
                                        <div className="testimotial-text">
                                            <p><strong>시간 절약</strong></p>
                                            <p>“What has made it easier for our book club with your platform? Almost everything. From being able to add books with a visual aspect, which has helped cut down on the number of times members can’t find the right book, to being able to have members put books on shelves that they would like our group to read, to being able to have all our information in one easy resource. Thank you.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-item'>
                                    <div className="testimotial-box">
                                        <div className="testimotial-text">
                                            <p><strong>편리함 최고</strong></p>
                                            <p>“My first book club meeting went well and was ah-mazing. Thanks so much for following up. Bookclubs was great in facilitating the meeting set up with the reminders and the attendees loved it as much as I did. Thanks again for everything.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-item'>
                                    <div className="testimotial-box">
                                        <div className="testimotial-text">
                                            <p><strong>심플한 이용방법</strong></p>
                                            <p>“So many emails before Bookclubs! Now I can easily manage three book clubs, not just one, and it’s so fun and simple. Best service ever.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div className='main__testimonials-img'>
                        <ImgStyled src={testimonial} alt="testimonial-image" height= "400px"/>
                    </div>
                    <div className="main__trend">
                        <Container>
                            <div className="main__trend-container">
                                <h1>베스트셀러</h1>
                                <p>Hundreds of thousands of readers can not be wrong. Check out the most popular books that book clubs across the world are reading this week.</p>
                                <MainBestSellers/>
                            </div>
                            <LinkButton to="/search">도서 검색하러 가기</LinkButton>
                        </Container>
                    </div>
            </div>
        </>
    );
}

export default Main;
