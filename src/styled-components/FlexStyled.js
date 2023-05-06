import styled from 'styled-components';

const commonStyles = `
    display: flex;
    flex-wrap: ${(props) => props.wrap || 'wrap'};
    align-content: stretch;
    gap: ${(props) => props.gap || '0'};
`;

const FlexRowStyled = styled.div`
    ${commonStyles}
    align-items: ${(props) => props.alignItems || 'flex-end'};
    margin: ${(props) => props.margin || '0'}; 
    flex-basis: ${(props) => props.flexBasis || 'auto'};
    justify-content: ${(props) => props.justify || 'center'};

`;

const FlexRowMQStyled = styled.div`
    ${commonStyles}
    align-items: ${(props) => props.alignItems || 'flex-end'};
    margin: ${(props) => props.margin || '0'}; 
    flex-basis: ${(props) => props.flexBasis || 'auto'};
    justify-content: ${(props) => props.justify || 'center'};

    @media (max-width: 415px) {
        display: inline-block;
    }
`;

const FlexColStyled = styled.div`
    ${commonStyles}
    flex-direction: ${(props) => props.direction || 'column'};
    align-items: ${(props) => props.alignItems || 'stretch'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || 'auto'};
`;

export { FlexRowStyled as FlexRow, FlexColStyled as FlexCol, FlexRowMQStyled as FlexRowMQ };
