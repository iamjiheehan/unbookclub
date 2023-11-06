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
        padding-top: 2rem;
        font-weight: bold;
        color: #e0e2b0;
        font-size: 40px;
        position: absolute;
        z-index: 2;
    }

    .Banner-img {
        min-height: 200px;
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

        overflow: hidden;
    }

    .content-wrap .content .question {
        display: flex;
        gap: 1rem;
        font-weight: bold;

    }

    .content-wrap .content .question .text-wrap {
        width: 100%;
    }

    .content-wrap .content .question .text-wrap .text{
        display: flex;
        justify-content: space-between;
    }

    .content-wrap .content .question .text-wrap Btn3{
        &.on{
            transform: rotate(180deg);
            transition: height 0.3s ease;
        }
    }

    .content-wrap .content .answer {
        padding-top: 1rem;
        padding-left: 2.1rem;
        height: 0px;
        line-height: 1.5rem;

        &.on {
            height: auto;
            transition: height 0.3s ease;
        }
    }
`;


