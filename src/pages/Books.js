// 도서 검색 게시판
import React, { useState} from "react";

// 컴포넌트 임포트
import { BestSellersList } from "components/BestSellers";
import { NewBooksList } from "components/NewBooks";
import { SearchBooks } from "components/Search";

// 부트스트랩 라이브러리
import { Container } from "react-bootstrap";

// 스타일컴포넌트 임포트

import Button from "styled-components/ButtonStyled";
import { TextH1, TextP } from "styled-components/TextStyled";
import { FirstImgStyled, ImgStyled } from "../styled-components/ImgStyled";
import HR from "styled-components/LineStyled";

// 이미지 임포트
import bookImg from "../static/images/menu-icon-03.webp";
import { FaArrowRight} from "react-icons/fa";

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
        <FirstImgStyled src={bookImg} alt="Top Image" height="500px" />
            <Container>
                <Button onClick={() => handleModeChange("신간도서")} >
                    <TextP color="white">신간도서 <FaArrowRight /></TextP>
                </Button>
                <Button onClick={() => handleModeChange("베스트셀러")} >
                    <TextP color="white">베스트셀러 <FaArrowRight /></TextP>
                </Button>
                <div style={{ overflow: "hidden" }}>
                    <SearchBooks
                        setSearchResults={setSearchResults}
                        setHasSearched={setHasSearched}
                    />
                    <HR height="0" margin="4rem 0" />
                    <TextH1 margin="0 auto 3rem 0"> 읽고싶은 책을 찾아보고 목록에 추가해보세요</TextH1>
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
