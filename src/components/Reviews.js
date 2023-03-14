import React from "react";
import Button from "../styled-components/ButtonStyled";

const Reviews = ({reviewObj, isOwner}) => (
    <div>
        <div>
            <h3> {reviewObj.review} </h3>
            <h3>글쓴이 : {reviewObj.creatorId}</h3>
            {isOwner && (
                <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                </>
            )}
        </div>
    </div>  
);


export default Reviews;