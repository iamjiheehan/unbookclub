import { BestSellers, BestSellersList } from "components/BestSellers";
import { NewBooks, NewBooksList } from "components/NewBooks";
import { SearchBoard, SearchBooks } from "components/Search";
import React, { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Button from "styled-components/ButtonStyled";
import { TextH1, TextH2, TextP } from "styled-components/TextStyled";
import bookImg from "../static/images/menu-icon-03.webp";
import ImgStyled from "../styled-components/ImgStyled";
import HR from "styled-components/LineStyled";
import FormStyled from "styled-components/FormStyled";
import DropdownBtn from "styled-components/DropDownBtnStyled";
import { FlexRow } from "styled-components/FlexStyled";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight} from "react-icons/fa";


export default function Books() {
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [mode, setMode] = useState("베스트셀러");

    const handleModeChange = (mode) => {
        setMode(mode);
    };

    return (
        <>
        <ImgStyled src={bookImg} alt="Top Image" height="500px" />
        <Container>
            <Button onClick={() => handleModeChange("베스트셀러")}>
                <TextP color="white">베스트셀러 <FaArrowRight /></TextP>
            </Button>
            <Button onClick={() => handleModeChange("신간도서")}>
                <TextP color="white">신간도서 <FaArrowRight /></TextP>
            </Button>
            <div style={{ overflow: "hidden" }}>
            <SearchBooks
                setSearchResults={setSearchResults}
                setHasSearched={setHasSearched}
            />
            <HR height="0" margin="4rem 0" />
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
            </div>
        </Container>
        </>
    );
}
