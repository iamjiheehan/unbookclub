// 독후감 게시판

import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Reviews from "../components/Reviews";
import GridStyled from "../styled-components/GridStyled";
import { useReviewForm } from "../hooks/useReviewForm";
import { InputLink } from "../styled-components/InputStyled";
import { SearchBoard } from "../components/Search";
import ImgStyled from '../styled-components/ImgStyled';
import { Button } from "react-bootstrap";
import BtnStyled from '../styled-components/ButtonStyled';
import iconTop from '../static/images/menu-icon-01.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const BoardWrapper = styled.div`
    min-height: 100vh;
`;

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [numReviewsToShow, setNumReviewsToShow] = useState(12);
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showUserReviewsOnly, setShowUserReviewsOnly] = useState(false);


    const handleLoadMore = () => {
        setNumReviewsToShow(numReviewsToShow + 12);
    };
    
    const handleShowUserReviewsOnly = () => {
        if (showUserReviewsOnly) {
            setHasSearched(false);
        } else {
            const filteredReviews = reviewList.filter((review) => review.creatorId === userObj.uid);
            setSearchResults(filteredReviews);
            setHasSearched(true);
        }
        setShowUserReviewsOnly(!showUserReviewsOnly);
    };

    useEffect(() => {
        console.log('searchResults changed', searchResults);
        console.log('hasSearched changed from board', hasSearched);
    }, [searchResults, hasSearched]);

    return (
        <BoardWrapper>
            <ImgStyled src={iconTop} alt="Top Image" height="500px" />
            <InputLink to="/create">
                글 쓰러 가기 <FontAwesomeIcon icon={faPencilAlt} />
            </InputLink>
            <div style={{ height: "2rem" }}></div>
            <BtnStyled onClick={handleShowUserReviewsOnly} variant="dark">
                {showUserReviewsOnly ? "모든 리뷰 보기" : "내 리뷰만 보기"}
            </BtnStyled>
            <SearchBoard setSearchResults={setSearchResults} setHasSearched={setHasSearched} />
            <GridStyled rows="auto" columns="repeat(3,minmax(0,1fr))" margin="3rem">
                {(hasSearched ? searchResults : reviewList)
                .slice(0, numReviewsToShow)
                .map((review) => (
                    <Reviews
                    key={review.id}
                    reviewObj={review}
                    isOwner={userObj && review.creatorId === userObj.uid}
                    rating={review.selectedRating}
                    bookTitle={review.title}
                    bookAuthor={review.author}
                    />
                ))}
            </GridStyled>
            {!hasSearched && numReviewsToShow < reviewList.length && (
                <Button
                variant="dark"
                onClick={handleLoadMore}
                style={{ marginBottom: "4rem" }}
                >
                더 보기
                </Button>
            )}
            </BoardWrapper>
    );
}
