import React, { useState } from 'react';
import styled from 'styled-components';
import { TextH2, TextP } from '../styled-components/TextStyled';
import Button from '../styled-components/ButtonStyled';
import { FaShoppingCart } from 'react-icons/fa';
import ImgStyled from '../styled-components/ImgStyled';

const BookItemContainer = styled.div`
    position: relative;
    width: 250px;
    height: 400px;
    overflow: hidden;
`;

const BookImage = styled(ImgStyled)`
    width: 100%;
    height: 70%;
`;

const BookInfo = styled.div`
    padding: 1rem;
    height: 30%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    ${BookItemContainer}:hover & {
        opacity: 1;
    }
`;

const BookItem = ({ post }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
    };

    return (
        <BookItemContainer>
            <BookImage src={post.coverLargeUrl} alt={post.title} style={{width:"250px"}} />
            <BookInfo>
                <TextH2>{post.author}</TextH2>
                <TextP>{post.title}</TextP>
                <Button onClick={handleAddToCart} disabled={isAdded}>
                    {isAdded ? 'Added to Cart' : <><FaShoppingCart /> Add to Cart</>}
                </Button>
            </BookInfo>
        </BookItemContainer>
    );
};

export default BookItem;
