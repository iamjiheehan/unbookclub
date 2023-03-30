import React, { useContext } from "react";
import { TextH1, TextP } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import ReviewTable from "../components/ReviewTable";

import Container from 'react-bootstrap/Container';
import AuthContext from "../contexts/AuthContext";
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Loading } from "../hooks/useLoading";
import { FlexRow, FlexCol } from "../styled-components/FlexStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";
import { useSelector, useDispatch } from "react-redux";
import Button from "styled-components/ButtonStyled";
import ImgStyled from "styled-components/ImgStyled";
import { removeBook } from "store";
import HR from "styled-components/LineStyled";

export default function UserInfo() {
  const { userObj, setUserObj } = useContext(AuthContext);
  const { reviews, loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile();
  const dispatch = useDispatch();

  let addedBooks = useSelector((state) => state.book);


  if (!userObj) {
    return null;
  }

  const handleRemoveFromCart = (book) => {
    dispatch(removeBook(book.itemId));
    console.log("remove button works");
  };

  return (
    <Container>
      <BackStyled bgColor="white" padding="4rem" >
        <TextH1><strong>{userObj.displayName}</strong> 님 안녕하세요</TextH1>
        <form onSubmit={onSubmit}>
          <FlexCol >
            <BoardInput margin="2rem auto" width="60%" onChange={onChange} type="update" placeholder="변경된 닉네임은 기존 작성 게시글에도 적용됩니다." value={newDisplayName} />
            <Input margin="2rem auto 3rem auto" type="submit" value="닉네임 변경하기" />
          </FlexCol>
          
        </form>
          {addedBooks.length === 0 && <TextH1>읽을 목록에 추가된 책이 없습니다.</TextH1>}
          {addedBooks.length !== 0 && (
            <>
              <TextH1>읽을 목록에 추가된 책이 {addedBooks.length}권 있습니다.</TextH1>
              {addedBooks.map((book) => (
                <FlexRow key={book.itemId} alignItems="center">
                  <ImgStyled src={book.coverLargeUrl} alt={book.title} width="100px" />
                  <FlexCol>
                    <TextP>{book.title}</TextP>
                    <TextP>{book.author}</TextP>
                    <Button onClick={() => handleRemoveFromCart(book.itemId)}>삭제하기</Button>
                  </FlexCol>
                </FlexRow>
              ))}
            </>
          )}
          <HR height="0" margin="4rem 0" />
          <TextH1 padding="0 0 3rem 0">작성한 리뷰 목록</TextH1>
          {loading ? (
            <Loading />
          ) : (
            <ReviewTable reviews={reviews} />
          )}
      </BackStyled>
    </Container>
  );
}
