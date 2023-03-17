import { dbService } from "fBase";
import React, { useState } from "react";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import { TextP, TextH2 } from "../styled-components/TextStyled";
import ReactStars from "react-rating-stars-component";
import { FlexRow } from "../styled-components/FlexStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";
import useFormatDate from "../hooks/useFormatDate";

    const Reviews = ({ reviewObj, isOwner, bookTitle, bookAuthor }) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.review);
    const [newNickname, setNewNickname] = useState(reviewObj.creatorNickname);
    const [newTitle, setnewTitle] = useState(reviewObj.title);
    const [newAuthor, setnewAuthor] = useState(reviewObj.author);
    const [newRating, setNewRating] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const formattedDate = useFormatDate(reviewObj.createdAt);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제하실건가요?");
        if (ok) {
        await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
        }
    };

    const toggleEiditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (
            newReview === reviewObj.review &&
            newTitle === reviewObj.title &&
            newAuthor === reviewObj.author &&
            newNickname === reviewObj.creatorNickname &&
            newRating === reviewObj.selectedRating
        ) {
            setErrorMessage("수정 할 내용이 없다면 취소 버튼을 눌러주세요.");
            return;
        }
        setErrorMessage("");
        await dbService.doc(`unBookClub/${reviewObj.id}`).update({
        review: newReview,
        title: newTitle,
        author: newAuthor,
        // createdAt: Date.now(), 일시는 업데이트에서 제외
        creatorNickname: newNickname,
        selectedRating: newRating,
        });
        setEditing(false);
    };
    const onCancel = () => {
        setEditing(false);
    };
    
    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
        case "bookTitle":
            setnewTitle(value);
            break;
        case "bookAuthor":
            setnewAuthor(value);
            break;
        case "inputReview":
            setNewReview(value);
            break;
        default:
            break;
        }
    };

    return (
        <>
        {editing ? (
            <>
            <form onSubmit={onSubmit}>
                <BoardInput
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
                {errorMessage && (
                    <TextP style={{ color: "red" }}>{errorMessage}</TextP>
                )}
                <Input type="submit" value="수정 완료" />
                <Input type="button" value="취소" onClick={onCancel} />
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
                    onClick={toggleEiditing}
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
