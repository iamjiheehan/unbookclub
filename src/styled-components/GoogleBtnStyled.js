import React from 'react';
import Button from '../styled-components/ButtonStyled'; 

const GoogleBtn = ({ backgroundUrl }) => (
    <Button
        style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: 'transparent',
            width: "60px",
            height: "60px",
            border: "none",
            padding: "0"
        }}
    >
    </Button>
);

export default GoogleBtn;
