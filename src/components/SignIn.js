import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import HR from "../styled-components/LineStyled";
import GoogleLogo from "../static/images/google-logo.webp";
import Googlebtn from "../styled-components/GoogleBtnStyled";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextH1>로그인 페이지</TextH1>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={onChange}
              value={email}
              name = "email"
              type="email"
              placeholder="이메일을 입력해주세요"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={onChange}
              value={password}
              name = "password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
        </Form>
        <Button type="submit" bgColor="#e67e22" fontWeight="500">
          로그인 하기
        </Button>
        <TextP>소셜 계정으로 로그인 하기</TextP>
        <Googlebtn backgroundUrl={GoogleLogo} />
      </BackStyled>
      <HR isVertical height="500px" />
      <BackStyled padding="3rem" bgColor="white" style={{ width: "33.3%" }}>
        <TextH1>처음 오셨나요?</TextH1>
        <TextP>
          함께하는 독서,
          <br /> THE UNBOOK CLUB에서 시작하세요.
        </TextP>
        <Button type="submit" fontWeight="500">
          회원가입 하기
        </Button>
      </BackStyled>
    </FlexRow>
  );
}
