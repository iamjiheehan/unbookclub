import React, { useState } from 'react';
import { StarStyled } from '../styled-components/StarStyled';

const Star = ({ selected = false, onClick = () => {} }) => (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
        {selected ? '★' : '☆'}
    </span>
);

const StarRating = ({ totalStars = 5, onRatingSelected = () => {} }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
        onRatingSelected(index + 1);
    };
    return (
        <StarStyled>
        {Array.from({ length: totalStars }, (v, i) => (
            <Star key={i} selected={i < rating} onClick={() => handleClick(i)} />
        ))}
        </StarStyled>
    );
};

export default StarRating;
