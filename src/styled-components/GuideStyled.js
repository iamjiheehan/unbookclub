import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    margin-bottom: 5rem;

    .Banner-wrap {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: flex-start;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .Banner-text {
        font-weight: bold;
        color: #e0e2b0;
        font-size: 40px;
        position: absolute;
        z-index: 2;
    }

    .Banner-img {
        height: 200px;
        /* transform: translateX(-50%); */
        display: flex;

    }
`;

export const Wrap = styled.div`

    width: 1030px;
    margin: 0 auto;
    letter-spacing: 1px;

    .title {
        margin: 5rem auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .content-wrap {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .content-wrap .content {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    .content-wrap .content .question {
        display: flex;
        gap: 1rem;
        font-weight: bold;
    }

    .content-wrap .content .question .text-wrap .text{
        display: flex;
    }

    .content-wrap .content .answer {
        padding-left: 2.1rem;
    }
`;


