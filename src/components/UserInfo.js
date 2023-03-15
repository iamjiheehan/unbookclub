import React, { useContext } from "react";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";

import AuthContext from "../hooks/AuthContext";
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import useSignOut from "../hooks/useSignOut";

export default function UserInfo() {
  const { userObj, refreshUser } = useContext(AuthContext);
  const { reviews, loading } = useFetchReviews(userObj);
  const { newDisplayName, onChange, onSubmit } = useUpdateProfile(userObj, refreshUser);
  const onSignOutClick = useSignOut();


  if (!userObj) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextP>{userObj.displayName}님 안녕하세요</TextP>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} type="update" placeholder="Update Nickname" value={newDisplayName} />
          <input type="submit" value="Update Profile" />
        </form>
        <FlexRow alignItems="center">
          <Button onClick={onSignOutClick}>Log Out</Button>
        </FlexRow>
        <div>
          <h3>Your Reviews:</h3>
          {reviews && reviews.map((review) => (
            <div key={review.id}>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </BackStyled>
    </FlexRow>
  );
}
