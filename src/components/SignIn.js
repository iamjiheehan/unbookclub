import Form from "react-bootstrap/Form";
import { FlexRow } from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from "../styled-components/ButtonStyled";
import BackStyled from "../styled-components/BackStyled";
import HR from "../styled-components/LineStyled";
import GoogleLogo from "../static/images/google-logo.webp";
import GithubLogo from "../static/images/github-logo.webp";
import SocialBtn from "../styled-components/SocialBtnStyled";

import useSignInForm from "../hooks/useSignInForm";

export default function SignIn() {

  const {
    loginEmail,
    loginPassword,
    createEmail,
    createPassword,
    confirmPassword,
    errorMessage,
    showAlert,
    setErrorMessage,
    setShowAlert,
    onChange,
    onSocialClick,
    onLoginSubmit,
    onCreateAccountSubmit,
  } = useSignInForm();
  
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
