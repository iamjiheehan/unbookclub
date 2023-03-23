import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    /* display: flex; */
    overflow : hidden;
    overflow-x: scroll;
    background-color: red;
    ::-webkit-scrollbar {
        display: none;
    }
`;


const SliderWrap = styled.div`
    background-color: blue;
    width: 250px;
    display: flex;
    align-items: flex-start;

    gap: 2rem;
    flex-wrap: nowrap;
    transform: ${({ transX }) => `translate3d(${transX}px, 0, 0)`};
    transition: ${({ transX }) => (transX === 0 ? 'none' : 'transform 0.3s ease-in-out')};
`;

const SliderItem = styled.div`
    /* width: 250px; */
`;


export { CarouselContainer, SliderWrap, SliderItem };
