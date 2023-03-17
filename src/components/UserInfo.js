import React, { useContext } from "react";
import { TextH1, TextP } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FlexCol, FlexRow } from "../styled-components/FlexStyled";
import ReactStars from "react-rating-stars-component";
import AuthContext from "../hooks/AuthContext";
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";

export default function UserInfo() {
  const { userObj, setUserObj } = useContext(AuthContext);
  const { reviews, loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile();

  

  if (!userObj) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  return (
    <Container>
      <BackStyled bgColor="white" padding="3rem" >
        <TextH1>{userObj.displayName}님 안녕하세요</TextH1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} type="update" placeholder="Update Nickname" value={newDisplayName} />
          <input type="submit" value="Update Profile" />
        </form>
        <div>
          <TextH1>작성한 리뷰 목록</TextH1>
          <Row>
            {reviews && reviews.map((review) => (
              <Col key={review.id} md={4}>
                <FlexRow>
                    <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={review.selectedRating}
                    />
                </FlexRow>
                <TextP>제목 : {review.bookTitle}</TextP>
                <TextP>작가 : {review.bookAuthor}</TextP>
                <TextP>리뷰내용 : {review.review}</TextP>
                <TextP>작성일시: {formatDate(review.createdAt)}</TextP>
              </Col>
            ))}
          </Row>
          
        </div>
      </BackStyled>
    </Container>
  );
}
