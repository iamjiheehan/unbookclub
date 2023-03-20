import React, { useContext, useState } from "react";
import AuthContext from "../hooks/AuthContext";
import Reviews from "../components/Reviews";
import GridStyled from "../styled-components/GridStyled";
import { useReviewForm } from "../hooks/useReviewForm";
import { InputLink } from "../styled-components/InputStyled";
import Search from "../pages/Search";
import ImgStyled from '../styled-components/ImgStyled';
import { Button } from "react-bootstrap";
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

    const handleLoadMore = () => {
        setNumReviewsToShow(numReviewsToShow + 12);
    };
    return (
        <BoardWrapper>
            <ImgStyled src={iconTop} alt="Top Image" height="500px" />
            <InputLink to="/create">글 쓰러 가기 <FontAwesomeIcon icon={faPencilAlt} /></InputLink>
            <div style={{ height: "2rem" }}></div>
            <Search />
            <GridStyled rows="auto" columns="repeat(3,minmax(0,1fr))" margin="3rem">
                {reviewList.slice(0, numReviewsToShow).map((review) => (
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
            {numReviewsToShow < reviewList.length && (
                    <Button variant="dark" onClick={handleLoadMore} style={{marginBottom:"4rem"}}>
                        더 보기
                    </Button>
                )}
        </BoardWrapper>
    );
}
