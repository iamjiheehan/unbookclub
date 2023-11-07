import styled from "styled-components";


export const StarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export const StarStyled = styled.p`
    cursor: pointer;
    font-size: 2rem; 
    color: #f1c40f; 
    /* text-align: center; */
    
    &:hover,
    &:active {
    color: #f1c40f; 
    transition: color 0.3s ease;
    }

    & > svg {
    margin: 0 0.2rem;
    }
`;