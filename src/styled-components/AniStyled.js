import styled from "styled-components";

const FlowAni = styled.div `
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    animation: marquee 45s linear infinite;

    @keyframes marquee {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;

export default FlowAni;