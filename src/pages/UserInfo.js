import React, { useContext } from "react";
import { TextH1 } from "../styled-components/TextStyled";
import BackStyled from "../styled-components/BackStyled";
import ReviewTable from "../components/ReviewTable";

import Container from 'react-bootstrap/Container';
import AuthContext from "../hooks/AuthContext";
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Loading } from "../hooks/useLoading";
import { FlexRow, FlexCol } from "../styled-components/FlexStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";

export default function UserInfo() {
  const { userObj, setUserObj } = useContext(AuthContext);
  const { reviews, loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile();

  

  if (!userObj) {
    return null;
  }

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
