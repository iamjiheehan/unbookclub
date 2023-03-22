import MainBestSellers from 'components/MainBestSellers';
import NewBooks from 'components/NewBooks';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'styled-components/ButtonStyled';
import { TextH1, TextH2 } from 'styled-components/TextStyled';
import bookImg from '../static/images/menu-icon-03.webp';
import ImgStyled from '../styled-components/ImgStyled';

export default function Books() {
    const [books, setBooks] = useState([]);

    return (
        <>
            <ImgStyled src={bookImg} alt="Top Image" height="500px" />
            <Container>
                <div style={{overflow:'hidden'}}>
                    <TextH1 padding= '0 0 1rem 0'>신간 도서</TextH1>
                    <NewBooks />
                </div>
                {/* <div style={{overflow:'hidden'}}>
                    <TextH1 padding= '0 0 1rem 0'>베스트셀러</TextH1>
                    <MainBestSellers />
                </div>
                <div style={{overflow:'hidden'}}>
                    <TextH1 padding= '0 0 1rem 0'>추천 도서</TextH1>
                    <NewBooks />
                </div> */}
            </Container>
        </>
    );
}
