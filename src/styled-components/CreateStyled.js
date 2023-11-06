import styled from "styled-components";

export const Wrap = styled.div`
    width: 1030px;
    margin: 5rem auto;

    h1 {
        text-align: center;
        margin-bottom: 3rem;
    }

    a {
        margin: 2rem auto;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        font-size: 1rem;
    }

    input, textarea {
        margin-top: 2rem;
        border: none;
        border-bottom: 2px solid rgb(68, 150, 217);
        padding: 0.5rem 0.5rem;
        width: 100%;
    }

    textarea {
        resize: none;
        height: 300px;
    }

    .img-canvas {
        text-align: center;
        margin-top: 2rem;
    }

    .input-wrap {
        position: relative;
    }

    .result {
        width: 100%;
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background-color: #fff;
        box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);
        z-index: 1;
        position: absolute;
    }

    .result-title {
        margin-bottom: 1rem;
    }

    #result-title{
        /* display: none; */
    }

    #result-author{
        display: none;
    }
`;