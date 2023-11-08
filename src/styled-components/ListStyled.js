import styled from "styled-components";
import backImg from "../static/images/nodata.jpg"

export const Container = styled.div`
    /* background-color: #f8f8f8; */

`;

export const Wrap = styled.div`
    /* width: 1260px; */
    width: 1030px;
    margin: 0 auto;
    padding: 30px 30px 64px;

    h1 {
        margin: 0;
        padding-top: 3rem;
        text-align: center !important;
    }

    .title-wrap {
        text-align: center !important;
        margin-bottom: 4rem;
        position: relative;
        
        button {
            position:absolute;
            top: -1rem;
            right: 0;
        }
    }

    .middle {
        text-align: center;
    }
`;

export const Content = styled.div`
    background: ${(props) => props.background || "#f8f8f8"};
    overflow: hidden;

    h1 {
        text-align: center;
    }
    
    .content-wrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* 각 열의 너비를 균일하게 1fr로 설정 */
        gap: 2.5rem;
        /* padding-top: 70px; */
        margin: 0 auto;

    }

    .content-wrap .content-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .item_info {
        margin-top: 17px;
        text-align: left;
        width: 200px;//-----------------너비 설정
        height: 300px;
        overflow: hidden;
    }

    .item_info .info_name {
        margin-top: 7px;
        height: 20px;
        overflow: hidden;
        word-break: break-all;
        line-height: 20px;
        font-weight: bold;
        font-size: 15px;
        color: #333;
    }

    .item_info .info_auth {
        margin-top: 0.5rem;
        display: block;
        height: 16px;
        overflow: hidden;
        line-height: 16px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
    }

    .item_info .info_readBox {
        margin-top: 11px;
        border-radius: 3px;
        height: 8rem;
        overflow: scroll;

        display: -webkit-box;
        word-break: break-all;
        overflow: hidden;
        line-height: 20px;
        color: #666;
        text-align: left;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        .info_desc {
            font-size: 13px;
        }
    }

    .item_canvas {
        text-align: center;
        /* padding-top: 1rem; */
        height: 300px;

        width: 200px;

        min-height: 234px;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

        .item_img {
            object-fit: cover;
            width: inherit;
            height: inherit;
        }

        .item_img:hover {
            cursor: pointer;
            padding-top: 0rem;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const Item = styled.div`
    position: relative;
`;

export const CartWrap = styled.div`
    color :white;

    padding: 4rem 1rem;
    min-height: 234px;
    height: 300px;

    /* margin-bottom: 2rem; */
    /* background-color: rgba(149, 165, 166, 0.9); */
    background-color: rgb(51, 175, 233);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    ${Item}:hover & {
        opacity: 0.9;
    }

    p {
        padding-left: 0.5;
    }


    .book-title {
        line-height: 1.5rem;
        font-weight: normal;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }

    .cart-wrap {
        color :white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap:2px;
    }

`;


export const Warning = styled.div`
    height: 500px;
    width: 1030px;
    margin: 0 auto;
    position: relative;

    .warning-box {
        background-image: url(${backImg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
        background-color: white;
        width: 100%;
        height: 100%;
    }

    h5 {
        margin-top: 2rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
