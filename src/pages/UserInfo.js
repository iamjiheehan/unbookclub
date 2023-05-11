import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from '../store';

import { TextH1, TextP } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import ReviewTable from "../components/ReviewTable";
import Button from "../styled-components/ButtonStyled";

import Container from 'react-bootstrap/Container';

import AuthContext from "../contexts/AuthContext";

import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Loading } from "../hooks/useLoading";

import { FlexRow, FlexCol } from "styled-components/FlexStyled";
import { Input, BoardInput } from "styled-components/InputStyled";
import HR from "styled-components/LineStyled";
import { ImgStyled } from "styled-components/ImgStyled";

import Dropdown from 'react-bootstrap/Dropdown';

export default function UserInfo() {
  const { userObj, setUserObj } = useContext(AuthContext);
  const { reviews, loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile();
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [sortingCriteria, setSortingCriteria] = useState("");
  const dispatch = useDispatch();
  let addedBooks = useSelector((state) => state.book);
  
  useEffect(() => {
    setFilteredReviews(reviews);
  }, [reviews]);
  
  if (!userObj) {
    return null;
  }

  const sortByDateDescending = () => {
    const sortedReviews = [...filteredReviews].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setFilteredReviews(sortedReviews);
    setSortingCriteria("최신 순");
    console.log("sort by date descending works");
  };
  
  const sortByDateAscending = () => {
    const sortedReviews = [...filteredReviews].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    setFilteredReviews(sortedReviews);
    setSortingCriteria("오래된 순");
    console.log("sort by date ascending works");
  };
  
  const sortByRating = () => {
    const sortedReviews = [...filteredReviews].sort((a, b) => b.selectedRating - a.selectedRating);
    setFilteredReviews(sortedReviews);
    setSortingCriteria("별점 순");
    console.log("sort by rating works");
  };

  const deleteBook = (itemId) => {
    dispatch(removeBook(itemId));
};


  return (
    <Container>
      <BackStyled bgColor="white" padding="4rem" >
        <TextH1><strong>{userObj.displayName}</strong> 님 안녕하세요</TextH1>
        <form onSubmit={onSubmit}>
          <FlexCol >
            <BoardInput margin="2rem auto" width="60%" onChange={onChange} type="update" placeholder="닉네임을 설정해주세요." value={newDisplayName} />
            <Input margin="2rem auto 3rem auto" type="submit" value="닉네임 변경하기" />
          </FlexCol>
        </form>
        {addedBooks.length === 0 && <TextH1>읽을 목록에 추가된 책이 없습니다.</TextH1>}
        {addedBooks.length !== 0 && (
          <>
            <TextH1>읽을 목록에 추가된 책이 {addedBooks.length}권 있습니다.</TextH1>
            {addedBooks.map((book) => (
              <FlexRow key={book.isbn} alignItems="center">
                <ImgStyled src={book.coverLargeUrl} alt={book.title} width="100px" margin="1rem"/>
                <FlexCol width="40%">
                  <TextP>{book.title}</TextP>
                  <TextP>{book.author}</TextP>
                </FlexCol>
                <Button onClick={() => deleteBook(book.itemId)}>삭제</Button>
              </FlexRow>
            ))}
          </>
        )}
        <HR height="0" margin="4rem 0" />
        <TextH1 padding="0 0 3rem 0">작성한 리뷰 목록</TextH1>
        <Dropdown style={{textAlign:"right", marginBottom:"2rem"}}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{backgroundColor:"white", color:"black"}}>
            {sortingCriteria === "" ? "정렬 기준" : sortingCriteria}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={sortByDateDescending} href="#/action-1">최신 순</Dropdown.Item>
            <Dropdown.Item onClick={sortByDateAscending} href="#/action-3">오래된 순</Dropdown.Item>
            <Dropdown.Item onClick={sortByRating} href="#/action-2">별점 순</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {loading ? (
          <Loading />
        ) : (
          <>
            {filteredReviews.length === 0 && <TextH1>작성한 리뷰가 없습니다.</TextH1>}
            {filteredReviews.length !== 0 && <ReviewTable reviews={filteredReviews} setFilteredReviews={setFilteredReviews} />}
          </>
        )}
      </BackStyled>
    </Container>
  );
}
