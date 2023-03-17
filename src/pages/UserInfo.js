import React, { useContext } from "react";
import { TextH1 } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import ReviewTable from "../components/ReviewTable";

import Container from 'react-bootstrap/Container';
import AuthContext from "../hooks/AuthContext";
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Loading } from "../hooks/useLoading";


export default function UserInfo() {
  const { userObj, setUserObj } = useContext(AuthContext);
  const { reviews, Loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile();

  

  if (!userObj) {
    return null;
  }

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
          <ReviewTable reviews={reviews} />
        </div>
      </BackStyled>
    </Container>
  );
}
