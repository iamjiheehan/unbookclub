import React from 'react'
import styled from 'styled-components';

const commonStyles = `
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
`;

const FlexRowStyled = styled.div`
    ${commonStyles}
    align-items: ${(props) => props.alignItems || 'flex-end'};
    flex-basis: ${(props) => props.flexBasis || 'auto'};
`;

const FlexColStyled = styled.div`
    ${commonStyles}
    flex-direction: column;
    align-items: ${(props) => props.alignItems || 'stretch'};
`;

function FlexRow({ children, ...rest }) {
    return <FlexRowStyled {...rest}>{children}</FlexRowStyled>;
}

function FlexCol({ children, ...rest }) {
    return <FlexColStyled {...rest}>{children}</FlexColStyled>;
}

export { FlexRow, FlexCol };
