import styled from 'styled-components';

const commonStyles = `
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    margin: ${(props) => props.margin || '0'};
`;

const FlexRowStyled = styled.div`
    ${commonStyles}
    align-items: ${(props) => props.alignItems || 'flex-end'};
    flex-basis: ${(props) => props.flexBasis || 'auto'};
    justify-content: ${(props) => props.justify || 'center'};
`;

const FlexColStyled = styled.div`
    ${commonStyles}
    flex-direction: ${(props) => props.direction || 'column'};
    align-items: ${(props) => props.alignItems || 'stretch'};
`;

export { FlexRowStyled as FlexRow, FlexColStyled as FlexCol };
