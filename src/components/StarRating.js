import React, { useState, useEffect } from "react";
import { StarStyled, StarWrapper } from "../styled-components/StarStyled";

const Star = ({ selected = false, onClick = () => {} }) => (
    <span onClick={onClick} style={{ cursor: "pointer" }}>
        {selected ? "★" : "☆"}
    </span>
    );

    const StarRating = ({ totalStars, initialRating, onRatingSelected, readOnly }) => {
    const [rating, setRating] = useState(initialRating || 0);

    useEffect(() => {
        if (onRatingSelected) {
        onRatingSelected(rating);
        }
    }, [rating, onRatingSelected]);

    return (
        <StarWrapper>
        {[...Array(totalStars)].map((_, i) => (
            <StarStyled key={i}>
            <Star
                selected={i < rating}
                onClick={readOnly ? null : () => setRating(i + 1)}
            />
            </StarStyled>
        ))}
        </StarWrapper>
    );
};

export default StarRating;
