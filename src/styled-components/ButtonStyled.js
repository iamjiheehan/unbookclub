import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyled = styled.button`
    border-radius: 50px;
    border: none;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.fontColor || 'white'};
    background-color: ${(props) => props.bgColor || '#61777F'};
    font-size: 24px;
    margin: 2rem auto;
    font-weight: ${(props) => props.fontWeight || '400'};

    &:hover {
        transform: scale(1.1);
        transform-origin: center;
        color: #f1c40f;
    }
`

const Button = ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <ButtonStyled {...rest}>{children}</ButtonStyled>
        </Link>
    );
};

export default Button;
