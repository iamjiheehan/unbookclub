import styled from "styled-components";


const TableStlyed = styled.th`
    width: ${(props) => props.width || '200px'};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export default TableStlyed;

