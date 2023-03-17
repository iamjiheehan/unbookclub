import React, { useState } from 'react';
import { StarStyled, StarWrapper } from '../styled-components/StarStyled';

const Star = ({ selected = false, onClick = () => {} }) => (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
        {selected ? '★' : '☆'}
    </span>
    );

    const StarRating = ({ totalStars = 5, onRatingSelected = () => {} }) => {
    const [selectedRating, setSelectedRating] = useState(3);

    const handleClick = (index) => {
        setSelectedRating(index + 1);
        onRatingSelected(index + 1);
    };
    return (
    <StarWrapper>
        <StarStyled>
        {Array.from({ length: totalStars }, (v, i) => (
            <Star key={i} selected={i < selectedRating} onClick={() => handleClick(i)} />
        ))}
        </StarStyled>
    </StarWrapper>
    );
};

export default StarRating;
