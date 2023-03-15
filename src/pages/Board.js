import React, { useState, useContext } from "react";
import Button from "../styled-components/ButtonStyled";
import AuthContext from "../hooks/AuthContext";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";


import { useReviewForm } from "../hooks/useReviewForm"

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { inputReview, reviewList, onSubmit, onChange } = useReviewForm(userObj);
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingSelected = (rating) => {
        setSelectedRating(rating);
    };
    return (
        <>
        <div>Board</div>
        <div>
            <h2>마 이거 왜 안되노</h2>
            <Button to="/create">글쓰기</Button>
        </div>
        <form onSubmit={onSubmit}>
            <input
            value={inputReview}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={200}
            />
            <div>
                <h3>Rate:</h3>
                <StarRating totalStars={5} onRatingSelected={handleRatingSelected} />
            </div>
            <input type="submit" value="review" />
        </form>
        <div>
            {reviewList.map((review) => (
            <Reviews
                key={review.id}
                reviewObj={review}
                isOwner={userObj && review.creatorId === userObj.uid}
            />
            ))}
        </div>
        </>
    );
}
