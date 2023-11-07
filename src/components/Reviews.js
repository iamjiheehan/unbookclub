import React from "react";
import ReactStars from "react-rating-stars-component";

import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import { TextP, TextH2 } from "../styled-components/TextStyled";
import { FlexRow } from "../styled-components/FlexStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";

import useFormatDate from "hooks/useFormatDate";
import { useReview } from "hooks/useReview";


    const Reviews = ({ reviewObj, isOwner, bookTitle, bookAuthor }) => {

    const formattedDate = useFormatDate(reviewObj.createdAt);

    const {
        editing,
        errorMessage,
        newReview,
        newNickname,
        setNewNickname,
        newTitle,
        newAuthor,
        onDeleteClick,
        toggleEditing,
        onSubmit,
        onCancel,
        onChange,
        newRating, 
        setNewRating,
    } = useReview(reviewObj); 

    console.log(newReview);

    return (
        <>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <BackStyled
                            padding="1rem"
                            margin="1rem"
                            bgRadius="30px"
                            bgShadow="0 4px 4px rgb(0 0 0 / 25%)">
                            <FlexRow>
                                <ReactStars
                                count={5}
                                size={24}
                                edit={true}
                                value={reviewObj.selectedRating}
                                onChange={(newRating) => setNewRating(newRating)}
                                />
                            </FlexRow>
                            <BoardInput
                                name="bookTitle"
                                value={newTitle}
                                onChange={onChange}
                                type="text"
                                placeholder="책 제목을 입력해주세요"
                                maxLength={200}
                            />
                            <BoardInput
                                name="bookAuthor"
                                value={newAuthor}
                                onChange={onChange}
                                type="text"
                                placeholder="작가 이름을 입력해주세요"
                                maxLength={200}
                            />
                            <BoardInput
                                name="newReview"
                                type="text"
                                placeholder="감상평을 입력해주세요"
                                value={newReview}
                                required
                                onChange={onChange}
                            />
                            <BoardInput
                                type="text"
                                placeholder="닉네임 변경이 가능합니다"
                                value={newNickname}
                                required
                                onChange={(event) => setNewNickname(event.target.value)}
                            />
                            {errorMessage && (
                                <TextP style={{ color: "red" }}>{errorMessage}</TextP>
                            )}
                            <Input type="submit" value="수정 완료" bgColor="rgb(230, 126, 34)" style={{color:"white"}} onClick={onSubmit}/>
                            <Input type="button" value="취소" onClick={onCancel} bgColor="rgb(230, 126, 34)" style={{color:"white"}}/>
                        </BackStyled>
                    </form>
                </>
            ) : (
                <BackStyled
                padding="1rem"
                margin="1rem"
                bgRadius="30px"
                bgShadow="0 4px 4px rgb(0 0 0 / 25%)"
                >
                <FlexRow>
                    <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={reviewObj.selectedRating}
                    />
                </FlexRow>
                <TextP>책 제목: {bookTitle}</TextP>
                <TextP>작가: {bookAuthor}</TextP>
                <TextP>닉네임 : {reviewObj.creatorNickname}</TextP>
                <TextP>작성일시 : {formattedDate}</TextP>
                <TextH2> {reviewObj.review} </TextH2>
                {isOwner && (
                    <>
                        <Button
                            onClick={toggleEditing}
                            margin="0 0.5rem"
                            radius="none"
                            fontColor="#61777F"
                            bgColor="transparent"
                            border="0.3rem solid"
                        >
                            <TextP>수정</TextP>
                        </Button>
                        <Button
                            onClick={onDeleteClick}
                            margin="0 0.5rem"
                            radius="none"
                            fontColor="#61777F"
                            bgColor="transparent"
                            border="0.3rem solid"
                        >
                            <TextP>삭제</TextP>
                        </Button>
                    </>
                )}
                </BackStyled>
            )}
        </>
    );
};

export default Reviews;
