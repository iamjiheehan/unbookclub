//로그인 페이지
import React from "react";

//커스텀 훅 임포트
import useSignInForm from "../hooks/useSignInForm";

// 부트스트랩 라이브러리
import Form from "react-bootstrap/Form";

// 스타일컴포넌트 임포트
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import HR from "../styled-components/LineStyled";
import SocialBtn from "../styled-components/SocialBtnStyled";

//커스텀 이미지 임포트
import GoogleLogo from "../static/images/google-logo.webp";
import GithubLogo from "../static/images/github-logo.webp";
import * as SignInStyled from "../styled-components/SignInStyled";

export default function SignUp() {
  const {
    onPasswordRecoverySubmit,
    loginEmail,
    loginPassword,
    loginErrorMessage,
    createErrorMessage,
    createEmail,
    createPassword,
    confirmPassword,
    onChange,
    onSocialClick,
    onLoginSubmit,
    onCreateAccountSubmit,
    handleAnonymousLogin,
  } = useSignInForm();
  
  return (
    <SignInStyled.Wrap alignItems="flex-start" justify="space-evenly">
      <BackStyled bgColor="white" padding="3rem" style={{ width: "33.3%" }}>
        <TextH1 margin="0 auto 2rem auto">로그인 페이지</TextH1>
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
              autoComplete="current-password"
              name="loginPassword"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ textAlign: "left" }}
            />
            {loginErrorMessage}
          </Form.Group>
        </Form>
        <FlexRow> 
        <Button
            type="submit"
            bgColor="#7f8c8d"
            fontWeight="500"
            onClick={onPasswordRecoverySubmit}
          >
            비밀번호 찾기
          </Button>
          <Button
            type="submit"
            bgColor="#e67e22"
            fontWeight="500"
            onClick={onLoginSubmit}
          >
            로그인
          </Button>
          <Button
            type="submit"
            fontWeight="500"
            onClick={handleAnonymousLogin}
          >
            익명으로 이용
          </Button>
        </FlexRow>
          
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
        <TextH1 margin="0 auto 2rem auto">처음 오셨나요?</TextH1>
        <TextP margin="0 auto 1rem auto">
          함께하는 독서,
        </TextP>
        <TextP margin="0 auto 1rem auto">
          THE UNBOOK CLUB에서 시작하세요.
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
            {createErrorMessage}
          </Form.Group>
        </Form>
        <Button type="submit" fontWeight="500" onClick={onCreateAccountSubmit}>
          계정 만들기
        </Button>
      </BackStyled>
    </SignInStyled.Wrap>
  );
}
