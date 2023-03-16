import styled from 'styled-components';

const GridStyled = styled.div `
    display: grid;
    gap: ${(props) => props.gap || '2.5rem'};
    grid-template-columns: ${(props) => props.columns || 'repeat(2,minmax(0,1fr))'};
    grid-template-rows: ${(props) => props.rows || '1fr 1fr'};
    margin: ${(props) => props.margin || 'auto'};
    flex-wrap: wrap;
    @media (max-width: 1280px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }

`

export default GridStyled;
