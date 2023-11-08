// 도서 검색 게시판

import { BestSellersList } from "components/BestSellers";
import { NewBooksList } from "components/NewBooks";
import { SearchBooks } from "components/Search";
import React, { useState} from "react";
import { Container } from "react-bootstrap";
import Button from "styled-components/ButtonStyled";
import { TextH1, TextP } from "styled-components/TextStyled";
import bookImg from "../static/images/menu-icon-03.webp";
import { FirstImgStyled, ImgStyled } from "../styled-components/ImgStyled";
import HR from "styled-components/LineStyled";

import { FaArrowRight} from "react-icons/fa";
import { Btn2 } from "styled-components/BtnStyled";

export default function Books() {
    
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [mode, setMode] = useState("");
    const [show, setShow] = useState(false);


    const handleModeChange = (mode) => {
        setMode(mode);
        setShow(true);
    };

    return (
        <>
            <Container>
                <Btn2 onClick={() => handleModeChange("신간도서")} >
                    <p color="white">신간도서 <FaArrowRight /></p>
                </Btn2>
                <Btn2 onClick={() => handleModeChange("베스트셀러")} >
                    <p color="white">베스트셀러 <FaArrowRight /></p>
                </Btn2>
                <div style={{ overflow: "hidden" }}>
                    <SearchBooks
                        setSearchResults={setSearchResults}
                        setHasSearched={setHasSearched}
                    />
                    <hr />
                    <p margin="0 auto 3rem 0"> 읽고싶은 책을 찾아보고 목록에 추가해보세요</p>
                        { show && (
                                <>
                                    {mode === "베스트셀러" ? (
                                    <BestSellersList
                                        searchResults={searchResults}
                                        hasSearched={hasSearched}
                                    />
                                ) : (
                                    <NewBooksList
                                        searchResults={searchResults}
                                        hasSearched={hasSearched}
                                    />
                                )}
                            </>
                        )}
                </div>
            </Container>
        </>
    );
}