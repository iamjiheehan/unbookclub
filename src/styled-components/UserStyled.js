import styled from "styled-components";

export const Wrap = styled.div`
    width: 1030px;
    margin: 0 auto;

    div {
        text-align: center;
    }

    .top-wrap {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        margin: 2rem auto;
    }


    .top-wrap .name-wrap {
        position: relative;
        width: auto;
    }

    .top-wrap .name-input {
        font-size: 1.2rem;
        padding: 1rem 5rem 1rem 1rem;
        border: none;
        border-bottom: 1px solid #333;
        width:500px;
    }

    .top-wrap .name-change {
        position: absolute;
        top: 0;
        right: 17rem;
    }

    .bottom-wrap {
        margin:3rem auto;
    }

    .bottom-wrap .dropdown-item {
        text-align: left;
    }

    .book-info {
        width: 40%;
        p {
            margin: 1rem auto;
        }
    }

`;
