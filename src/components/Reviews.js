import { dbService } from "fBase";
import React from "react";
import Button from "../styled-components/ButtonStyled";

const Reviews = ({reviewObj, isOwner}) => {
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this review?");
        if(ok) {
            await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
        }
    }
    return (
        <div>
        <div>
            <h3> {reviewObj.review} </h3>
            <h3>글쓴이 : {reviewObj.creatorId}</h3>
            {isOwner && (
                <>
                    <Button>수정</Button>
                    <Button onClick={onDeleteClick}>삭제</Button>
                </>
            )}
        </div>
    </div>  
    )
};


export default Reviews;