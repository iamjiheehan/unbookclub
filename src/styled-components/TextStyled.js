import styled, { css } from 'styled-components';
import Pretendard from '../static/fonts/PretendardVariable.woff2';

const commonStyles = css`
    margin: 0;
    color: ${(props) => props.color || 'black'};
    line-height: ${(props) => props.lineHeight || '1.5'};
    padding: ${(props) => props.padding || '0'};
    background-color: ${(props) => props.bgColor || 'none'};
    font-family: Pretendard, sans-serif, Arial;

    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url(${Pretendard}) format('truetype');
    }
`;

const TextH1 = styled.h1`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '32px'};
    font-weight: ${(props) => props.fontWeight || '400'};
`;

const TextH2 = styled.h2`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '24px'};
    font-weight: ${(props) => props.fontWeight || '400'};
`;

const TextP = styled.p`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '22px'};
    font-weight: ${(props) => props.fontWeight || '400'};
`;

export {TextH1,TextH2,TextP};
