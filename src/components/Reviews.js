import { dbService } from "fBase";
import React, { useState } from "react";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled"
import { TextP,TextH2 } from "../styled-components/TextStyled";
import ReactStars from 'react-rating-stars-component';
import { FlexRow } from "../styled-components/FlexStyled";

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
};

const Reviews = ({ reviewObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.review);
    const [newNickname, setNewNickname] = useState(reviewObj.creatorNickname);
    // const [newTitle, setnewTitle] = useState(reviewObj.creatorNickname);
    // const [newAuthor, setnewAuthor] = useState(reviewObj.creatorNickname);
    const [newRating, setNewRating] = useState(0);
    
    
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this review?");
        if (ok) {
        await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
        }
    };

    const toggleEiditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(reviewObj, newReview);
        await dbService.doc(`unBookClub/${reviewObj.id}`).update({
            review: newReview,
            createdAt: Date.now(),
            creatorNickname: newNickname,
            selectedRating: newRating
        });
        setEditing(false);
    }


    const onChange = (event) => {
        const {target : {value},}= event;
        setNewReview(value);
    };


    return (
        <>
            {editing ? (
                <>
                    <form onSubmit = {onSubmit}>
                        <input type = "text" placeholder="Edit your review" value={newReview} required onChange={onChange} />
                        <input type="text" placeholder="Edit your nickname" value={newNickname} required onChange={(event) => setNewNickname(event.target.value)} />
                        <input type="submit" value="Update Review" />
                    </form>
                    <Button>Cancel</Button>
                </>
                ) : (
                    <BackStyled padding="1rem" margin="1rem" bgRadius='30px' bgShadow='0 4px 4px rgb(0 0 0 / 25%)'> 
                        <TextH2> {reviewObj.review} </TextH2>
                        <TextP>닉네임 : {reviewObj.creatorNickname}</TextP>
                        <TextP>작성일시 : {formatDate(reviewObj.createdAt)}</TextP>
                        <TextP>평점 : </TextP>
                        <FlexRow>
                            <ReactStars count={5} size={24} edit={false} value={reviewObj.selectedRating} />
                        </FlexRow>
                        {isOwner && (
                        <>
                            <Button onClick={toggleEiditing} margin="0 0.5rem" radius="none" fontColor="#61777F" bgColor="transparent" border="0.3rem solid"><TextP>수정</TextP></Button>
                            <Button onClick={onDeleteClick} margin="0 0.5rem" radius="none" fontColor="#61777F" bgColor="transparent" border="0.3rem solid"><TextP>삭제</TextP></Button>
                        </>
                        )}
                    </BackStyled>
            )}
        </>
    );
};

export default Reviews;
