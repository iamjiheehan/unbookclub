import styled from 'styled-components';
import ImgStyled from '../styled-components/ImgStyled';

const BookItemContainer = styled.div`
    position: relative;
    width: 250px;
    height: 400px;
    overflow: hidden;
`;

const BookImage = styled(ImgStyled)`
    width: 100%;
    height: 70%;
`;

const BookInfo = styled.div`
    padding: 1rem;
    height: 30%;
    background-color: #fff;
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

export { BookItemContainer, BookImage, BookInfo }