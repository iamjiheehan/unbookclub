import styled, { css } from 'styled-components';

const commonStyles = css`
    margin: 0;
    color: ${(props) => props.color || 'black'};
    line-height: ${(props) => props.lineHeight || '1.5'};
    padding: ${(props) => props.padding || '0'};
    background-color: ${(props) => props.bgColor || 'none'};
`;

const TextH1 = styled.h1`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '32px'};
`;

const TextH2 = styled.h2`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '24px'};
`;

const TextP = styled.p`
    ${commonStyles}
    font-size: ${(props) => props.fontSize || '16px'};
`;

export {TextH1,TextH2,TextP};
