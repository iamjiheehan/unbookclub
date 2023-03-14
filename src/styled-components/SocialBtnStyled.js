import React from 'react';
import Button from '../styled-components/ButtonStyled'; 

const SocialBtnStyled = ({ backgroundUrl, onClick, name, width, height, margin }) => (
    <Button
        style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: 'transparent',
            width: `${width || "60px"}`,
            height: `${height || "60px"}`,
            margin: `${margin || "0"}`,
            border: "none",
            padding: "0",
        }}
        onClick={onClick}
        name={name}
    >
    </Button>
);
const SocialBtn = ({ backgroundUrl, name, onClick, width, height, margin }) => {
    return <SocialBtnStyled type="button" backgroundUrl={backgroundUrl} name={name} onClick={onClick} width={width} height={height} margin={margin} />;
};

export default SocialBtn;
