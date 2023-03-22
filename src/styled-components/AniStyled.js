import styled from "styled-components";

const FlowAniForward = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    animation: marqueeForward 48s linear infinite;

    @keyframes marqueeForward {
        0% {
        transform: translateX(-100%);
        }
        100% {
        transform: translateX(0%);
        }
    }
`;

const FlowAniReverse = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    animation: marqueeReverse 48s linear infinite;

    @keyframes marqueeReverse {
        0% {
        transform: translateX(0%);
        }
        100% {
        transform: translateX(-100%);
        }
    }
`;

export { FlowAniForward, FlowAniReverse };
