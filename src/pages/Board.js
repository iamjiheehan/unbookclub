import React, { useState, useContext } from "react";
import AuthContext from "../hooks/AuthContext";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { TextP, TextH1 } from "../styled-components/TextStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";
import GridStyled from "../styled-components/GridStyled";
import { FlexCol, FlexRow } from "../styled-components/FlexStyled";
import { Container } from "react-bootstrap";
import { useReviewForm } from "../hooks/useReviewForm"

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { inputReview, reviewList, onSubmit, onChange, selectedRating, setSelectedRating,onRatingSelected  } = useReviewForm(userObj);
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");

    return (
        <Container>
        <TextH1 margin="2.5rem 0 auto auto">감상평 게시판</TextH1>
        <form onSubmit={onSubmit}>
            <FlexCol>
                <FlexRow alignItems="baseline">
                    <StarRating totalStars={5} onRatingSelected={onRatingSelected} />
                </FlexRow>
                <BoardInput
                    value={bookTitle}
                    onChange={(event) => setBookTitle(event.target.value)}
                    type="text"
                    placeholder="책 제목을 입력해주세요"
                    maxLength={200}
                    margin="auto"
                />
                <BoardInput
                    value={bookAuthor}
                    onChange={(event) => setBookAuthor(event.target.value)}
                    type="text"
                    placeholder="작가 이름을 입력해주세요"
                    maxLength={200}
                    margin="auto"
                />
                <BoardInput
                value={inputReview}
                onChange={onChange}
                type="text"
                placeholder="감상평을 입력해주세요"
                margin="auto"
                height="25rem"
                overflow="auto"
                />
                
                <Input type="submit" value="게시하기" margin="1.5rem auto 0 auto"/>
            </FlexCol>
        </form>
        <GridStyled rows="auto" columns="repeat(3,minmax(0,1fr))" margin="0 3rem 3rem 3rem">
            {reviewList.map((review) => (
            <Reviews
                key={review.id}
                reviewObj={review}
                isOwner={userObj && review.creatorId === userObj.uid}
                rating={review.selectedRating}
            />
            ))}
        </GridStyled>
        </Container>
    );
}
