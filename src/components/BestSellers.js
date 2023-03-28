import React, { useState, useEffect} from 'react';
import bestSeller from '../data/bestSeller.json'
import { FlowAniForward, FlowAniReverse } from '../styled-components/AniStyled';
import {TextH1, TextH2,TextP} from '../styled-components/TextStyled';
import ImgStyled from '../styled-components/ImgStyled';
import { BookItemContainer, BookImage, BookInfo } from '../styled-components/BookStyled';
import Button from '../styled-components/ButtonStyled';
import { FaShoppingCart } from 'react-icons/fa';
import { FlexCol, FlexRow } from 'styled-components/FlexStyled';

function BestSellers() {
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

function BestSellersList() {
    const [posts, setPosts] = useState([]);
    const [addedBooks, setAddedBooks] = useState([]);

    useEffect(() => {
        setPosts(bestSeller);
    }, []);

    const handleAddToCart = (bookId) => {
        setAddedBooks([...addedBooks, bookId]);
    };
    return (
        <>
            <TextH1 padding="0 0 1rem 0">베스트셀러</TextH1>
                {posts.map((post) => (
                    <FlexRow key={post.itemId} alignItems="center" justify="flex-start" margin="2rem">
                        <div>

                        <ImgStyled
                            src={post.coverLargeUrl}
                            alt={post.title}
                            width="250px"
                            bgShadow="0 0 10px 0 rgba(0, 0, 0, 0.5)"
                        />
                        </div>
                        <div>
                            <FlexCol alignItems="flex-start" margin="2rem" wrap="nowrap">
                                <TextH2>{post.title}</TextH2>
                                <TextP padding="1rem 0">{post.author}</TextP>
                                <TextP textAlign="left">{post.description}</TextP>
                                <Button
                                    onClick={() => handleAddToCart(post.itemId)}
                                    disabled={addedBooks.includes(post.itemId)}
                                >
                                {addedBooks.includes(post.itemId) ? (
                                    "추가된 도서"
                                ) : (
                                    <>
                                    <FaShoppingCart /> 읽을 목록에 추가하기
                                    </>
                                )}
                                </Button>
                            </FlexCol>
                        </div>
                    </FlexRow>
                    ))}
            </>
    )
}

export { BestSellers, BestSellersList };