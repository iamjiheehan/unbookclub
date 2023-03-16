import React, { useContext } from "react";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  return (
    <Container alignItems="flex-start" justify="space-evenly">
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
                <TextP>{review.review}</TextP>
              </Col>
            ))}
          </Row>
          
        </div>
      </BackStyled>
    </Container>
  );
}
