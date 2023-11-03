import styled from 'styled-components';

const BookItemContainer = styled.div`
    position: relative;
    width: 100vw;
    padding-bottom: 2rem;

`;

const BookSlideContainer = styled.div`
    position: relative;
    width: 100vw;
    overflow: hidden;
    overflow-y: hidden;
`;

const BookImg = styled.img`
    box-shadow: ${(props) => props.bgShadow || 'rgba(0, 0, 0, 0.3) 9px 11px 20px 1px'};
    object-fit: cover center;
    height: 300px;
    width: 200px;
    
    @media (max-width: 412px) {
        padding: 1rem;
        height: ${(props) => props.height || '145px'};
    }
`;

const BookInfo = styled.div`
    color :white;

    padding: 4rem 1rem;
    height: 300px;
    margin-bottom: 2rem;
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
    p {
        padding-left: 0.5;
    }

    .book-title {
        line-height: 1.5rem;
        font-weight: normal;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }

    .cart-wrap {
        color :white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap:2px;
    }
`;

export { BookImg, BookItemContainer, BookInfo, BookSlideContainer }