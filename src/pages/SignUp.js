//로그인 페이지
import React from "react";

//커스텀 훅 임포트
import useSignInForm from "../hooks/useSignInForm";

// 부트스트랩 라이브러리
import Form from "react-bootstrap/Form";

//커스텀 이미지 임포트
import * as SignInStyled from "../styled-components/SignInStyled";
import leftImg from "../static/images/signUp_img_big.webp";
import { Btn2 } from "styled-components/BtnStyled";

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
        <SignInStyled.Container alignItems="flex-start" justify="space-evenly">
            <h1>회원가입 페이지</h1>
            <div className="wrap">
                <div className="img-wrap">
                    <img src={leftImg} alt="" />
                </div>
                <div className="form-wrap">
                    <p>함께하는 독서,</p>
                    <p>
                        <strong>THE UNBOOK CLUB</strong>에서 시작하세요.
                    </p>
                    <Form onSubmit={onCreateAccountSubmit}>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail-create"
                        >
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
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword-create"
                        >
                            <Form.Control
                                onChange={onChange}
                                value={createPassword}
                                name="createPassword"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                style={{ textAlign: "left" }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword-confirm"
                        >
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
                    <div className="btn-wrap">
                        <Btn2
                            align="right"
                            type="submit"
                            fontWeight="500"
                            onClick={onCreateAccountSubmit}
                        >
                            계정 만들기
                        </Btn2>
                    </div>
                </div>
            </div>
        </SignInStyled.Container>
    );
}
