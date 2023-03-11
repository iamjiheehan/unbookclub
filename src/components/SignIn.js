import React from "react";
import Form from 'react-bootstrap/Form';
import { FlexRow} from "../styled-components/FlexStyled";
import { TextH1, TextP } from "../styled-components/TextStyled";
import Button from '../styled-components/ButtonStyled'; 
import BackStyled from '../styled-components/BackStyled';
import HR from '../styled-components/LineStyled'


export default function SignIn() {
  return (
    <FlexRow alignItems='flex-start' justify='space-evenly'>
      <BackStyled bgColor='white' padding='3rem' style={{width:'33.3%'}}>
        <TextH1>로그인 페이지</TextH1>
        <TextP>소셜 계정으로 로그인 하기</TextP>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="이메일을 입력해주세요" style={{textAlign:'left'}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호를 입력해주세요" style={{textAlign:'left'}}/>
          </Form.Group>
        </Form>
        <Button type="submit" bgColor='#e67e22' fontWeight='500'>로그인 하기</Button>
      </BackStyled>
      <HR isVertical height='500px' />
      <BackStyled padding='3rem' bgColor='white'style={{width:'33.3%'}}>
        <TextH1>처음 오셨나요?</TextH1>
        <TextP>함께하는 독서, THE UNBOOK CLUB에서 시작하세요.</TextP>
        <Button type="submit" fontWeight='500'>회원가입 하기</Button>
      </BackStyled>
    </FlexRow>
  );
}
