import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const InputStyled = styled.input`
    border: 4px solid rgb(230, 126, 34);
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: rgb(230, 126, 34);
    background-color: white;
    font-size: ${(props) => props.fontSize || '1.5rem'};
    margin: ${(props) => props.margin || '2rem 0.5rem'};
    font-weight: ${(props) => props.fontWeight || '400'};
    &:hover {
        transform: scale(1.1);
        transform-origin: center;
    }
`

const Input = ({ children, ...rest }) => {
    return (
        <InputStyled {...rest}>{children}</InputStyled>
    );
};


const BoardInputStyled = styled(InputStyled)`
    overflow: ${(props) => props.overflow || 'hidden'};
    color: black;
    /* border-radius: 0 !important; */
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 4px solid rgb(230, 126, 34);
    width: ${(props) => props.width || '80%'};
    height: ${(props) => props.height || '3rem'};
    resize: none;
    &:hover {
        transform: none;
        transform-origin: center;
    }
`;

const BoardInput = ({ children, ...rest }) => {
    return (
        <BoardInputStyled as="textarea" {...rest}>{children}</BoardInputStyled>
    );
};


const InputLinkStyled = styled.input`
    color: black;
    text-decoration: none;
    color: #d35400;
    border: 4px solid rgb(230, 126, 34);
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border-radius: 50px;
    font-weight: 900;

    &:hover {
        transform: scale(1.5);
        transform-origin: center;
        background-color: rgb(230, 126, 34);
        color: white;
        
    }
`;

const InputLink = ({ children, ...rest }) => { 
    return (
        <InputLinkStyled as={Link} {...rest}>{children}</InputLinkStyled>
    );
};

export { Input, BoardInput, InputLink };
