import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    display: flex;
    gap: 2rem;
    width: 1000px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    `;

    export default function DraggableCarousel({ children }) {
        return (
            <Draggable axis="x" bounds="parent">
                <CarouselContainer>{children}</CarouselContainer>
            </Draggable>
    );
}
