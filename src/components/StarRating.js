import React, { useState } from 'react';
import { StarStyled } from '../styled-components/StarStyled';

const Star = ({ selected = false, onClick = () => {} }) => (
    <StarStyled onClick={onClick} selected={selected}>
        {selected ? '★' : '☆'}
    </StarStyled>
);

const StarRating = ({ totalStars = 5, onRatingSelected = () => {} }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
        onRatingSelected(index + 1);
    };
    return (
        <div>
        {Array.from({ length: totalStars }, (v, i) => (
            <Star key={i} selected={i < rating} onClick={() => handleClick(i)} />
        ))}
        </div>
    );
};

export default StarRating;
