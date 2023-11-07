//로그인 페이지
import { Link } from "react-router-dom";
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
import * as SignInStyled from "../styled-components/SignInStyled";

//커스텀 이미지 임포트
import GoogleLogo from "../static/images/google-logo.webp";
import GithubLogo from "../static/images/github-logo.webp";
import rightImg from "../static/images/signIn_img_big.webp";
import { Btn2, Btn3, Btn4 } from "styled-components/BtnStyled";

export default function SignIn() {
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
        <SignInStyled.Container alignItems="flex-start" justify="space-evenly">
            <h1>로그인 페이지</h1>
            <div className="wrap">
                <div className="form-wrap">
                    <Form onSubmit={onLoginSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail-login"
                        >
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
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword-login"
                        >
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
                    <div className="text-wrap">
                        <div className="btn-wrap">
                          <Link to="/signUp">
                            <Btn3 type="submit" fontWeight="500">
                                회원가입
                            </Btn3>
                            </Link>
                            <Btn3
                                type="submit"
                                fontWeight="500"
                                onClick={onPasswordRecoverySubmit}
                            >
                                비밀번호 찾기
                            </Btn3>
                        </div>

                        <div className="btn-wrap">
                            <Btn4
                                type="submit"
                                bgColor="#e67e22"
                                fontWeight="500"
                                border="none"
                                onClick={onLoginSubmit}
                            >
                                로그인
                            </Btn4>
                            <Btn2
                                type="submit"
                                fontWeight="500"
                                onClick={handleAnonymousLogin}
                            >
                                익명으로 이용
                            </Btn2>
                        </div>
                    </div>
                    <hr />
                    <div className="social-wrap">
                        <div className="social-btn-wrap">
                            <p>소셜 계정으로 로그인 하기</p>
                            <SocialBtn
                                backgroundUrl={GoogleLogo}
                                name="google"
                                onClick={onSocialClick}
                                margin="0 10px"
                            />
                            <SocialBtn
                                backgroundUrl={GithubLogo}
                                name="github"
                                onClick={onSocialClick}
                                width="60px"
                                height="100px"
                                margin="0 px"
                            />
                        </div>
                    </div>
                </div>
                <div className="img-wrap">
                    <img src={rightImg} alt="" />
                </div>
            </div>
        </SignInStyled.Container>
    );
}
