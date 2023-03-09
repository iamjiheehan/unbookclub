import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ButtonStyled';

const LinkButton = ({ to, children, ...rest }) => {
    return (
        <Link to={to}>
        <Button {...rest}>{children}</Button>
        </Link>
    );
};

export default LinkButton;
