import React, { useState, useEffect} from 'react';
import bestSeller from '../data/bestSeller.json'
import { FlowAniForward, FlowAniReverse } from '../styled-components/AniStyled';
import {TextH2,TextP} from '../styled-components/TextStyled';
import ImgStyled from '../styled-components/ImgStyled';
import { BookItemContainer, BookImage, BookInfo } from '../styled-components/BookStyled';
import Button from '../styled-components/ButtonStyled';
import { FaShoppingCart } from 'react-icons/fa';

export default function MainBestSellers() {
    const [posts, setPosts] = useState([]);
    const [addedBooks, setAddedBooks] = useState([]);

    const handleAddToCart = (bookId) => {
        setAddedBooks([...addedBooks, bookId]);
    };

    useEffect(() => {
        setPosts(bestSeller);
    }, []);

    return (
        <>
            <FlowAniForward>
                {posts.map(post => (
                        <BookItemContainer key={post.itemId} >
                            <ImgStyled src={post.coverLargeUrl} alt={post.title} width= "250px" />
                            <BookInfo>
                                <TextP>{post.title}</TextP>
                                <TextH2 padding = '1rem 0 0 0'>{post.author}</TextH2>
                                <Button onClick={() => handleAddToCart(post.itemId)} disabled={addedBooks.includes(post.itemId)}>
                                    {addedBooks.includes(post.itemId) ? '추가된 도서' : <><FaShoppingCart /> 읽을 목록에 추가하기</>}
                                </Button>
                            </BookInfo>
                        </BookItemContainer>
                    ))}
            </FlowAniForward>
        </>
    );
}
