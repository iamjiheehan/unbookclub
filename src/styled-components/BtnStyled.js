
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button1Styled = styled.button`
    border-radius: ${(props) => props.radius || "50px"};
    border: ${(props) => props.border || "none"};
    padding: 15px 25px;
    text-decoration: none;
    color: ${(props) => props.fontColor || "white"};
    background-color: ${(props) => props.bgColor || "#61777F"};
    font-size: ${(props) => props.fontSize || "1.1rem"};
    margin: ${(props) => props.margin || "2rem 0.5rem"};
    font-weight: ${(props) => props.fontWeight || "400"};

    &:hover {
        transition: all 0.3s ease;
        transform: scale(1.05);
        transform-origin: center;
    }

    @media (max-width: 412px) {
        font-size: 1rem;
    }
`;
export const Btn1 = ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <Button1Styled {...rest}>{children}</Button1Styled>
        </Link>
    );
};

const Button2Styled = styled.button`
    align-items: center;
    border: ${(props) => props.border || "1px solid #333"};
    border-radius: 30px;
    color: ${(props) => props.fontColor || "#fff"};
    background-color: ${(props) => props.bgColor || "#333"};
    display: -moz-inline-flex;
    display: inline-flex;
    font-size: 14px;
    -moz-justify-content: center;
    justify-content: center;
    letter-spacing: .1em;
    line-height: 20px;
    line-height: 1.25rem;
    padding: 12px 25px!important;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        transition: all 0.3s ease;
        transform-origin: center;
        background-color: #fff;
        color: #333;
    }

    @media (max-width: 412px) {
        font-size: 1rem;
    }
`;

export const Btn2= ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <Button2Styled {...rest}>{children}</Button2Styled>
        </Link>
    );
};

const Button3Styled = styled.button`
    align-items: center;
    border: none;
    border-radius: 30px;
    background-color: #fff;
    color: #000000;
    display: -moz-inline-flex;
    display: inline-flex;
    font-size: 14px;
    -moz-justify-content: center;
    justify-content: center;
    line-height: 1.25rem;
    text-transform: uppercase;

    &:hover {
        transform-origin: center;
        color: rgb(51, 175, 233);
    }

    &.on {
        transform: rotate(180deg);
    }

    @media (max-width: 412px) {
        /* font-size: 1rem; */
    }
`;

export const Btn3= ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <Button3Styled {...rest}>{children}</Button3Styled>
        </Link>
    );
};

const Button4Styled = styled.button`
    align-items: center;
    border: ${(props) => props.border || "1px solid #333"};
    border-radius: 30px;
    color: ${(props) => props.fontColor || "#fff"};
    background-color: rgb(51, 175, 233);
    display: -moz-inline-flex;
    display: inline-flex;
    font-size: 14px;
    -moz-justify-content: center;
    justify-content: center;
    letter-spacing: .1em;
    line-height: 20px;
    line-height: 1.25rem;
    padding: 12px 25px!important;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        transition: all 0.3s ease;
        transform-origin: center;
        background-color: #fff;
        color: rgb(51, 175, 233);
        border: 1px solid rgb(51, 175, 233);
    }

    @media (max-width: 412px) {
        /* font-size: 1rem; */
    }
`;

export const Btn4= ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
            <Button4Styled {...rest}>{children}</Button4Styled>
        </Link>
    );
};

export const BtnInput = styled.input`
    align-items: center;
    background-color: #333;
    border: 1px solid #333 !important;
    border-radius: 30px;
    color: #fff;
    display: -moz-inline-flex;
    display: inline-flex;
    font-size: 14px;
    -moz-justify-content: center;
    justify-content: center;
    letter-spacing: 0.1em;
    line-height: 20px;
    padding: 12px 25px!important;
    text-transform: uppercase;
    font-weight: bold;
    width: fit-content !important;
    &:hover {
        transition: all 0.3s ease;
        /* transform-origin: center; */
        background-color: white !important;
        /* color: #333 !important; */
        color: #333 !important;
        border: 1px solid #333 !important;
        border-bottom: 1px solid #333 !important;
    }

    @media (max-width: 412px) {
        font-size: 1rem;
    }
`;

export const Btn2Input = styled.input`
    align-items: center;
    border: 1px solid #333 !important;
    color: #333 !important;
    display: -moz-inline-flex;
    display: inline-flex;
    font-size: 14px;
    -moz-justify-content: center;
    justify-content: center;
    letter-spacing: 0.1em;
    line-height: 20px;
    padding: 12px 25px!important;
    text-transform: uppercase;
    font-weight: bold;
    width: fit-content !important;
    &:hover {
        transition: all 0.3s ease;
        /* transform-origin: center; */
        background-color: white !important;
        /* color: #333 !important; */
        color: #333 !important;
        border: 1px solid #333 !important;
        border-bottom: 1px solid #333 !important;
    }

    @media (max-width: 412px) {
        font-size: 1rem;
    }
`;