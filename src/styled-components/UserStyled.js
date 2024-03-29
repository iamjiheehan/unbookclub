//UserInfo와 ReviewTable에 적용됨.

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
        font-size: 1rem;
        padding: 1rem 5rem 1rem 1rem;
        border: none;
        border-bottom: 1px solid #333;
        width: 500px;
        height: 50px;

        input:focus-visible{
            border: none;
            border-bottom: 1px solid #333;
        }
    }

    .top-wrap .name-change {
        position: absolute;
        top: 2px;
        right: 17rem;
    }

    .bottom-wrap {
        margin: 3rem auto;
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

export const Table = styled.table`
    width: 100%;

    thead > tr > th {
        padding-bottom: 1rem;
    }

    tr {
        border-bottom: 1px solid #dee2e6;
    }

    td {
        padding: 1rem;
    }
`;
