import React, { useContext, useEffect, useState, useCallback } from "react";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";

import AuthContext from "../hooks/AuthContext";
import { authService, dbService } from "fBase";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const navigate = useNavigate();
  const { userObj, refreshUser } = useContext(AuthContext);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onSignOutClick = async () => {
    await authService.signOut();
    // setUserObj(null);
    navigate("/");
  };

  const getMyReviews = async () => {
    const reviews = await dbService
      .collection("unBookClub")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createAt", "desc")
      .get();
      console.log(reviews.docs.map(doc => doc.data()));
  };

  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setNewDisplayName(value);
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName){
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };


  useEffect(()=> {
    getMyReviews();
  },[]);

  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextP>{userObj.displayName}님 안녕하세요</TextP>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} type="update" placeholder="Update Nickname" value={newDisplayName}/>
          <input type="submit" value="Update Profile" />
        </form>
        <FlexRow alignItems="center">
          <Button onClick={onSignOutClick}>Log Out</Button>
        </FlexRow>
      </BackStyled>
    </FlexRow>
  );
}
