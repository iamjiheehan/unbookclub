import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import HR from "../styled-components/LineStyled";
import GoogleLogo from "../static/images/google-logo.webp";
import GithubLogo from "../static/images/github-logo.webp";
import SocialBtn from "../styled-components/SocialBtnStyled";
import { authService, firebaseInstance } from "fBase";

export default function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  const onSocialClick = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } 
    else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    try {
      const data = await authService.signInWithPopup(provider);
      onLoginSubmit(null,data);
    } catch (error) {
      setErrorMessage("Failed to log in with social media account.");
    }
  };


  const onChange = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === "loginEmail") {
      setLoginEmail(value);
    } else if (name === "loginPassword") {
      setLoginPassword(value);
    } else if (name === "createEmail") {
      setCreateEmail(value);
    } else if (name === "createPassword") {
      setCreatePassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const onLoginSubmit = async (event) => {
    try {
      if (loginEmail && loginPassword) {
        const data = await authService.signInWithEmailAndPassword(
          loginEmail,
          loginPassword
        );
        console.log(data);
      } else {
        setErrorMessage("Please check your email or password.");
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to log in. Please try again.");
    }
  };

  const onCreateAccountSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      let data;
      if (createPassword === confirmPassword) {
        if (createEmail && createPassword) {
          data = await authService.createUserWithEmailAndPassword(
            createEmail,
            createPassword
          );
          console.log(data);
        } else if (createPassword !== confirmPassword) {
          setErrorMessage(" password is not matched");
          setShowAlert(true);
        }
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setErrorMessage("올바른 이메일 형식이 아닙니다.");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("이미 가입된 이메일입니다.");
      } else {
        setErrorMessage("비밀번호는 8글자 이상을 입력해주세요.");
      }
      setShowAlert(true);
    }
  };
  
  return (
    <FlexRow alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextH1>로그인 페이지</TextH1>
        <Form onSubmit={onLoginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail-login">
            <Form.Control
              onChange={onChange}
              required
              value={loginEmail}
              name="loginEmail"
              type="email"
              placeholder="이메일을 입력해주세요"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword-login">
            <Form.Control
              onChange={onChange}
              required
              value={loginPassword}
              name="loginPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ textAlign: "left" }}
            />
            {errorMessage}
          </Form.Group>
        </Form>
        <Button
          type="submit"
          bgColor="#e67e22"
          fontWeight="500"
          onClick={onLoginSubmit}
        >
          로그인 하기
        </Button>
        <TextP>소셜 계정으로 로그인 하기</TextP>
          <FlexRow alignItems='center'>
              <SocialBtn
                backgroundUrl={GoogleLogo}
                name="google"
                onClick={onSocialClick}
                margin='0 10px'
              />
            <SocialBtn
              backgroundUrl={GithubLogo}
              name="github"
              onClick={onSocialClick}
              width="60px"
              height="100px"
              margin='0 px'
            />
          </FlexRow>
      </BackStyled>
      <HR isVertical height="500px" />
      <BackStyled padding="3rem" bgColor="white" style={{ width: "33.3%" }}>
        <TextH1>처음 오셨나요?</TextH1>
        <TextP>
          함께하는 독서,
          <br /> THE UNBOOK CLUB에서 시작하세요.
        </TextP>
        <Form onSubmit={onCreateAccountSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail-create">
            <Form.Control
              onChange={onChange}
              required
              value={createEmail}
              name="createEmail"
              type="email"
              placeholder="이메일을 입력해주세요"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword-create">
            <Form.Control
              onChange={onChange}
              value={createPassword}
              name="createPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword-confirm">
            <Form.Control
              onChange={onChange}
              value={confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              style={{ textAlign: "left" }}
            />
            {errorMessage}
          </Form.Group>
        </Form>
        <Button type="submit" fontWeight="500" onClick={onCreateAccountSubmit}>
          계정 만들기
        </Button>
      </BackStyled>
    </FlexRow>
  );
}
