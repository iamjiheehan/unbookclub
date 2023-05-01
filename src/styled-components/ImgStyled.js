import styled from 'styled-components';

export const ImgStyled = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    box-shadow: ${(props) => props.bgShadow || '0'};

    @media (max-width: 412px) {
        padding: 1rem;
        height: ${(props) => props.height || '145px'};
    }
`;

export const FirstImgStyled = styled.img`
    width: ${(props) => props.width || 'auto'};
    height: 500px;
    max-width: ${(props) => props.maxWidth || 'auto'};
    padding: ${(props) => props.padding || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    box-shadow: ${(props) => props.bgShadow || '0'};

    @media (max-width: 768px) {
        height: 250px;
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
