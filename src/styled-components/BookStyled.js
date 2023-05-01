import styled from 'styled-components';
import { ImgStyled } from '../styled-components/ImgStyled';

const BookItemContainer = styled.div`
    position: relative;
    width: 100vw;
`;

const BookSlideContainer = styled.div`
    position: relative;
    width: 100vw;
`;

const BookImage = styled(ImgStyled)`
    width: 100%;
    height: 70%;
`;

const BookInfo = styled.div`
    padding: 4rem 1rem;
    height: 100%;
    background-color: rgba(149, 165, 166, 0.9);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    ${BookItemContainer}:hover & {
        opacity: 1;
    }
`;

export { BookItemContainer, BookImage, BookInfo, BookSlideContainer }