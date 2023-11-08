import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from 'store';

import bestSeller from '../data/bestSeller.json';
import { FlowAniForward} from '../styled-components/AniStyled';
import {TextH1, TextH2,TextP} from '../styled-components/TextStyled';
import { ImgStyled } from '../styled-components/ImgStyled';
import { BookItemContainer, BookInfo, BookImg } from '../styled-components/BookStyled';
import Button from '../styled-components/ButtonStyled';
import { FaShoppingCart } from 'react-icons/fa';
import { FlexCol, FlexRow } from 'styled-components/FlexStyled';

function BestSellers() {
    const posts = bestSeller;

    let addedBooks = useSelector((state) => state.book);
    const dispatch = useDispatch();
    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        console.log("Adding book to cart:", itemId, title, author, coverLargeUrl);
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            console.log("Book already in cart:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        console.log("Book added to cart:", itemId);
    };

    return (
        <>
            <FlowAniForward>
                {posts.map(post => (
                        <BookItemContainer key={post.itemId} >
                            <BookImg src={post.coverLargeUrl} alt={post.title} width= "250px" />
                            <BookInfo>
                                <p className="book-title"><strong>{post.title}</strong></p>
                                <p padding = '1rem 0 0 0'>{post.author}</p>
                                <Button
                                    onClick={() => handleAddToCart(post.itemId, post.title, post.author, post.coverLargeUrl)}
                                    disabled={addedBooks.some((book) => book.itemId === post.itemId)}
                                >
                                {addedBooks.some((book) => book.itemId === post.itemId) ? (
                                    "추가된 도서"
                                    ) : (
                                    <>
                                        <div className="cart-wrap">
                                            <FaShoppingCart /><p className="cart-text">서재목록에 추가</p>
                                        </div>
                                    </>
                                    )}
                                </Button>
                            </BookInfo>
                        </BookItemContainer>
                    ))}
            </FlowAniForward>
        </>
    );
}

function BestSellersList() {
    const posts = bestSeller;
    let addedBooks = useSelector((state) => state.book);
    const dispatch = useDispatch();
    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        console.log("Adding book to cart:", itemId, title, author, coverLargeUrl);
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            console.log("Book already in cart:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        console.log("Book added to cart:", itemId);
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
                                    onClick={() => handleAddToCart(post.itemId, post.title, post.author, post.coverLargeUrl)}
                                    disabled={addedBooks.some((book) => book.itemId === post.itemId)}
                                >
                                {addedBooks.some((book) => book.itemId === post.itemId) ? (
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