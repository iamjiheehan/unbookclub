import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyled = styled.button`
    border-radius: ${(props) => props.radius || '50px'};
    border: ${(props) => props.border || 'none'};
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.fontColor || 'white'};
    background-color: ${(props) => props.bgColor || '#61777F'};
    font-size: ${(props) => props.fontSize || '1.5rem'};
    margin: ${(props) => props.margin || '2rem 0.5rem'};
    font-weight: ${(props) => props.fontWeight || '400'};
    &:hover {
        transform: scale(1.1);
        transform-origin: center;
        color: #2c3e50;
    }
`
const LoginBtn = ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <ButtonStyled {...rest}>{children}</ButtonStyled>
        </Link>
    );
};

export default LoginBtn;
