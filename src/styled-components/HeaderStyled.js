import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #33AFE9;
    margin-bottom: 9px;

    .header_top {
        height: 38px;
        background-color: #33afe9;
        border-bottom: 1px solid #4496D9;
    }

    .header_middle {
        width: 1030px;
        height: 88px;
        margin: 0 auto;
        display: flex;
        position: relative;

        h1 > a {
            display: block;
            width: 100%;
            height: 100%;
            color: transparent;
            font-size: 0;
        }
    }


`;
export const wrap = styled.div`
`;


