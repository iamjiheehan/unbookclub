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

    .input-wrap {
        position: relative;
    }


    .btn-wrap {
        display: flex;
        justify-content: center;
    }
`;