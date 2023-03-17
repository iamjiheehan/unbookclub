import styled from "styled-components";


export const StarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StarStyled = styled.p`
    cursor: pointer;
    font-size: 2.5rem; // You can adjust the font size as needed
    color: #f1c40f; // Change the hover color as needed
    text-align: center;
    
    &:hover,
    &:active {
    color: #f1c40f; // Change the hover color as needed
    transition: color 0.3s ease;
    }

    & > svg {
    margin: 0 0.2rem;
    }
`;