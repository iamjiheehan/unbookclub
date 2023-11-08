import styled from "styled-components";

export const Wrap = styled.div`
    /* width: 1030px;
    margin: auto 0; */

    .outForm {
        color: #333;
        border-color: #ccc;
        padding: 0.5rem 1rem;
        font-weight: ${(props) => props.fontWeight || "400"};
        border-radius: ${(props) => props.radius || "50px"};
        display: inline-block;
        margin-top: 1.5rem;
        text-align: center;
        &:hover {
            border-color: #aaa;
        }
    }

    input {
        background-color: none !important;
    }

    .searchInput{
        border: none;
        color: #333;
        border-color: #ccc;
        padding: 0.5rem 1rem;
        font-weight: 400;
        border-radius: 50px;
        width: 20rem;
        font-size: 1rem;
        background-color:transparent;
        @media (max-width: 412px) {
            padding: 0%;
            width: 100%;
        }
    }

    .input-wrap {
        display: flex;
        border: 1px solid #ccc;
        border-radius: 50px;
        align-items: center;
        padding: 0.5rem;
        display: inline-block;
        width: 100%;

        @media (max-width: 412px) {
            padding: 0%;
            width: 100%;
        }

        .input-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`;
