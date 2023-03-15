import { dbService } from "fBase";
import React, { useState } from "react";
import Button from "../styled-components/ButtonStyled";

const Reviews = ({ reviewObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.review);
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
            review: newReview
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
                    <input type="submit" value="Update Review" />
                </form>
                <Button>Cancel</Button>
            </>
            ) : (
            <>
                <h3> {reviewObj.review} </h3>
                <h3>글쓴이 : {reviewObj.creatorId}</h3>
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
