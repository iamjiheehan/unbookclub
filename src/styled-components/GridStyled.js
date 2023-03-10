import styled from 'styled-components';

const GridStyled = styled.div `
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(2,minmax(0,1fr));
    grid-template-rows: 1fr 1fr;
`

export default GridStyled;