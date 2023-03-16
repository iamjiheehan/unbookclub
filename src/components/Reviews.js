import { dbService } from "fBase";
import React, { useState } from "react";
import Button from "../styled-components/ButtonStyled";


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
    const [date, setDate] = useState(reviewObj.date)
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
            creatorNickname: newNickname
        });
        setEditing(false);
    }


    const onChange = (event) => {
        const {target : {value},}= event;
        setNewReview(value);
    };


    return (
        <>
        <div>
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
            <>
                <h3> {reviewObj.review} </h3>
                {/* <h3>글쓴이 : {reviewObj.creatorId}</h3> */}
                <h3>닉네임 : {reviewObj.creatorNickname}</h3>
                <h3>작성일시 : {formatDate(reviewObj.createdAt)}</h3> {/* Use formatDate function here */}
                {isOwner && (
                <>
                    <Button onClick={toggleEiditing}>수정</Button>
                    <Button onClick={onDeleteClick}>삭제</Button>
                </>
                )}
            </>
            )}
        </div>
        </>
    );
};

export default Reviews;
