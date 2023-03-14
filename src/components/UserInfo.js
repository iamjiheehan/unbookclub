import React, { useContext } from "react";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";

import AuthContext from "../hooks/AuthContext";
import { authService } from "fBase";
import { useNavigate } from "react-router-dom"

export default function UserInfo({ userObj, setUserObj }) {
  const navigate = useNavigate();
  const onSignOutClick = async () => {
    await authService.signOut();
    setUserObj(null);
    navigate("/");
  };
  const { displayName } = useContext(AuthContext);
  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextP>{displayName}님 안녕하세요</TextP>
          <FlexRow alignItems='center'>
          <Button onClick={onSignOutClick}>Log Out</Button>
          </FlexRow>
      </BackStyled>
    </FlexRow>
  );
}
