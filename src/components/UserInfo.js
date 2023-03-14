import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import HR from "../styled-components/LineStyled";
import { authService, firebaseInstance } from "fBase";

export default function UserInfo() {
  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextP>님 안녕하세요</TextP>
          <FlexRow alignItems='center'>

          </FlexRow>
      </BackStyled>
      <HR isVertical height="500px" />
      <BackStyled padding="3rem" bgColor="white" style={{ width: "33.3%" }}>
        <TextH1>북마크해 둔 도서 목록</TextH1>
        <TextH1>글 쓴 목록</TextH1>
        <TextP>
          함께하는 독서,
          <br /> THE UNBOOK CLUB에서 시작하세요.
        </TextP>
        
      </BackStyled>
    </FlexRow>
  );
}
