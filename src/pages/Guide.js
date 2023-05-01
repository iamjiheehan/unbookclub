import React from 'react'
import { Container } from 'react-bootstrap';
import { FlexCol } from 'styled-components/FlexStyled';
import { FirstImgStyled, ImgStyled } from 'styled-components/ImgStyled';
import HR from 'styled-components/LineStyled';
import { TextH1, TextH2 } from 'styled-components/TextStyled';
import bookImg from "../static/images/menu-icon-02.webp";

export default function Guide() {
    return (
        <Container>
            <FirstImgStyled src={bookImg} alt="Top Image" />
            <FlexCol alignItems="center" margin="0 auto 2rem auto">
                <TextH1 padding="0 0 2rem 0">어떻게 쓸 지 모르겠다면 아래의 질문에 대해 써보세요</TextH1>
                <TextH2 padding="0 0 1rem 0">1. 이 책을 다른 사람들에게 추천하시겠어요?</TextH2>
                <TextH2 padding="0 0 1rem 0">2. 책을 어떻게 생각하셨나요? 즐겁게 읽으셨나요?</TextH2>
                <TextH2 padding="0 0 1rem 0">3. 글쓰기 스타일은 어땠나요? 읽기 쉬웠나요?</TextH2>
                <TextH2 padding="0 0 1rem 0">4. 책에서 가장 좋아하는 장면은 무엇이었나요?</TextH2>
                <TextH2 padding="0 0 1rem 0">5. 이 책이 여러분의 선입견이나 믿음에 도전했나요?</TextH2>
                <TextH2 padding="0 0 1rem 0">6. 특별히 눈에 띄는 주제나 메시지가 있었나요?</TextH2>
                <TextH2>7. 엔딩에 대해서는 어떻게 생각하셨나요?</TextH2>
            </FlexCol>
            <HR height="0" margin="4rem 0" />
            <FlexCol alignItems="center" margin="0 auto 2rem auto">
                <TextH1 padding="0 0 2rem 0">책을 읽고 자유롭게 의견을 공유해보세요 !</TextH1>
            </FlexCol>
        </Container>
    )
}
