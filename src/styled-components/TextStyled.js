import styled, { css } from 'styled-components';
import Pretendard from '../static/fonts/PretendardVariable.woff2';
import Montserrat from '../static/fonts/Montserrat.ttf';

const commonStyles = css`
    margin: ${(props) => props.margin || '0'};
    color: ${(props) => props.color || 'black'};
    line-height: ${(props) => props.lineHeight || '1.5'};
    padding: ${(props) => props.padding || '0'};
    background-color: ${(props) => props.bgColor || 'none'};
    font-family: ${(props) => props.font || 'Pretendard, sans-serif, Arial'};
    text-align: ${(props) => props.textAlign || 'center'};
    

    @font-face {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        src: url(${Pretendard}) format('truetype');
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url(${Montserrat}) format('truetype');
    }
`;

const TextH1 = styled.h1`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '32px'};
    font-weight: ${(props) => props.fontWeight || '400'};

    @media (max-width: 412px) {
        font-size: 0.9em;
    }
`;

const TextH2 = styled.h2`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '24px'};
    font-weight: ${(props) => props.fontWeight || '400'};

    @media (max-width: 412px) {
        font-size: 0.9em;
    }
`;

const TextP = styled.p`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '22px'};
    font-weight: ${(props) => props.fontWeight || '400'};

    @media (max-width: 412px) {
        font-size: 0.9em;
    }
`;

export {TextH1,TextH2,TextP};
