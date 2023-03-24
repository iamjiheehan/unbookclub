import styled from 'styled-components';

const HR = styled.hr`
    margin: ${(props) => props.margin || '0'};
    border: 2px solid rgb(97, 119, 127);
    height: ${(props) => props.height || '100vh'};
    ${({ color }) => color && `color: ${color}`};
    ${({ isVertical }) => isVertical && `
        margin: 2rem 0;
        width: 0px;
    `}
`;

export default HR;

