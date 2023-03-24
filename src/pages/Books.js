import { BestSellers, BestSellersList } from 'components/BestSellers';
import { NewBooks, NewBooksList } from 'components/NewBooks';
import { SearchBoard, SearchBooks } from 'components/Search';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'styled-components/ButtonStyled';
import { TextH1, TextH2 } from 'styled-components/TextStyled';
import bookImg from '../static/images/menu-icon-03.webp';
import ImgStyled from '../styled-components/ImgStyled';
import HR from "styled-components/LineStyled";

export default function Books() {
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);


    return (
        <>
            <ImgStyled src={bookImg} alt="Top Image" height="500px" />
            <Container>
                <div style={{overflow:'hidden'}}>
                    <SearchBooks setSearchResults={setSearchResults} setHasSearched={setHasSearched} />
                    <HR height="0" margin="4rem 0"/>
                    <TextH1 padding= '0 0 1rem 0'>베스트셀러</TextH1>
                    <BestSellersList searchResults={searchResults} hasSearched={hasSearched} />
                    {/* <TextH1 padding= '0 0 1rem 0'>신간 도서</TextH1>
                    <NewBooksList searchResults={searchResults} hasSearched={hasSearched} /> */}
                </div>
            </Container>
        </>
    );
}
