import React from 'react';
import styled from 'styled-components';


const ButtonStyled = styled.button`
    border-radius: 50px;
    border: none;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.fontColor || 'white'};
    background-color: ${(props) => props.bgColor || '#61777F'};
    font-size: 24px;

    &:hover {
        transform: scale(1.1);
        transform-origin: center;
        color: #f1c40f;
    }
`

function Button({ children, ...rest }) {
    return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

export default Button;