import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from 'store';

import newBooks from "data/newBooks.json";
import { FlowAniReverse } from "styled-components/AniStyled";
import { TextH1, TextH2, TextP } from "styled-components/TextStyled";
import { ImgStyled  } from "styled-components/ImgStyled";
import { FlexCol, FlexRow } from "styled-components/FlexStyled";
import { BookItemContainer, BookInfo, BookImg } from "styled-components/BookStyled";
import Button from "styled-components/ButtonStyled";
import { FaShoppingCart } from "react-icons/fa";

function NewBooks() {
  const posts = newBooks;
  let addedBooks = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
    const bookToAdd = posts.find((book) => book.itemId === itemId);
    if (addedBooks.find((book) => book.itemId === itemId)) {
      return;
    }
    dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
  };
  

  return (
    <>
      <FlowAniReverse>
        {posts.map((post) => (
          <BookItemContainer key={post.itemId}>
            <BookImg
              src={post.coverLargeUrl}
              alt={post.title}
            />
            <BookInfo>
              <p className="book-title">{post.title}</p>
              <p padding="1rem 0 0 0">{post.author}</p>
              <Button
                    onClick={() => handleAddToCart(post.itemId, post.title, post.author, post.coverLargeUrl)}
                    disabled={addedBooks.some((book) => book.itemId === post.itemId)}
                  >
                  {addedBooks.some((book) => book.itemId === post.itemId) ? (
                      "추가된 도서"
                    ) : (
                      <>
                        <div className="cart-wrap">
                          <FaShoppingCart /> <p className="cart-text">서재에 추가</p>
                        </div>
                      </>
                    )}
              </Button>
            </BookInfo>
          </BookItemContainer>
        ))}
      </FlowAniReverse>
    </>
  );
}


function NewBooksList() {
  const posts = newBooks;
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
      <TextH1 padding="0 0 1rem 0">신간도서</TextH1>
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


export { NewBooks, NewBooksList }

// NewBooks 컴포넌트:

// newBooks 데이터를 가져와 posts에 할당합니다.
// addedBooks를 Redux의 useSelector를 사용하여 가져옵니다.
// dispatch를 Redux의 useDispatch를 사용하여 가져옵니다.
// handleAddToCart 함수는 독서 목록에 도서를 추가하는 기능을 수행합니다.
// Button 컴포넌트를 클릭하면 handleAddToCart 함수가 호출됩니다.
// posts 배열을 순회하며 도서 정보를 렌더링합니다.
// NewBooksList 컴포넌트:

// newBooks 데이터를 가져와 posts에 할당합니다.
// addedBooks를 Redux의 useSelector를 사용하여 가져옵니다.
// dispatch를 Redux의 useDispatch를 사용하여 가져옵니다.
// handleAddToCart 함수는 독서 목록에 도서를 추가하는 기능을 수행합니다.
// FlexRow와 FlexCol 컴포넌트를 사용하여 도서 정보를 레이아웃합니다.
// posts 배열을 순회하며 도서 정보를 렌더링합니다.