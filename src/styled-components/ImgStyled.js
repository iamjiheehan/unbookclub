import styled from 'styled-components';

export const ImgStyled = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    box-shadow: ${(props) => props.bgShadow || 'rgba(0, 0, 0, 0.3) 9px 11px 20px 1px'};

    @media (max-width: 412px) {
        padding: 1rem;
        height: ${(props) => props.height || '145px'};
    }
`;

export const LogoImgStyled = styled.img`
    width: 150px;
    height: ${(props) => props.height || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    box-shadow: ${(props) => props.bgShadow || '0'};

    @media (max-width: 412px) {
        width: 100px;

    }
`;

export const FirstImgStyled = styled.img`
    width: auto;
    height: 16rem;
    
    @media (min-width: 768px) {
        display: block;
    }
`;

export const SecondImgStyled = styled.img`
margin-top: 3rem;
    width: auto;
    height: 20rem;
    
    @media (min-width: 768px) {
        display: block;
    }
`;

export const LastImgStyled = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: 400px;
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    box-shadow: ${(props) => props.bgShadow || '0'};

    @media (max-width: 768px) {
        height: 120px;
    }
`;
