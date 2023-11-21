import styled from "styled-components";

import bg_search from "../static/images/bg_search.png";
import gray_arr from "../static/images/gray_arr.gif";
import i_arrdown from "../static/images/i_arrdown.gif";


export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #33afe9;
    /* margin-bottom: 9px; */

    body,
    td,
    tr {
        font-family: Malgun Gothic, Dotum, "돋움", Helvetica,
            "Apple SD Gothic Neo", sans-serif !important;
    }

    .banner img {
        border-radius: 20px;
        overflow: hidden;
        line-height: 0;
    }

    .roof_bnwrap .RE_banner_new .right {
        width: 475px;
        padding-left: 13px;
    }

    .roof_bnwrap .RE_banner_new .close {
        width: 50px;

        a {
            display: block;
            height: 100%;
            background: url(https://image.aladin.co.kr/img/bn/book/2022/04/roof_close_btn.png)
                no-repeat center / 100% auto;
            font-size: 25px;
            color: transparent;
        }
    }

    .roof_bnwrap .RE_banner_new {
        width: 1030px;
        height: 60px;
        margin: 0 auto;
        padding: 0;
        display: flex;
    }

    .roof_bnwrap .RE_banner_new .left {
        width: 475px;
        padding-right: 13px;
        text-align: left;
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 1px;
            height: 34px;
            background: rgba(255, 255, 255, 0.19);
            position: absolute;
            right: 0;
            top: 13px;
        }
    }

    .header_layer_box_s {
        min-width: 127px;
        width: 110px;
        height: auto;
        background-color: #fff;
        box-shadow: 0px 3px 16px #00000033;
        padding: 14px 18px 10px 18px;
        box-sizing: border-box;
        position: absolute;
        z-index: 10000;

        display: none;

        ul li {
            margin-bottom: 8px;
        }

        ul li a {
            display: block;
            font-size: 13px;
            padding: 0;
            color: #333;
            text-align: left;
            word-break: keep-all;
            letter-spacing: -0.5px;
        }
    }

    /* coffee 레이어 */
    #head_coffee_layer.header_layer_box {
        width: 660px;
        height: auto;
        left: 350px;
    }

    /* music 레이어 */
    #head_music_layer.header_layer_box {
        width: 660px;
        height: auto;
        left: 350px;

        display: none;
    }

    .header_layer_box {
        background-color: #fff;
        box-shadow: 0px 3px 16px #00000033;
        padding: 30px;
        box-sizing: border-box;
        position: absolute;
        top: 38px;
        z-index: 10000;
        display: flex;
        width: 1030px;
        left: 0px;

        display: none;
    }

    .header_layer_box ul {
        width: 150px;
        margin-top: 25px;
    }

    .header_layer_box ul > li {
        /* width: 150px; */
    }

    .header_layer_box .category {
        display: flex;
        font-weight: normal;
        padding-top: 40px;
        position: relative;
    }

    .header_layer_box .category > div h4 {
        font-size: 13px;
        font-weight: bold;
        margin: 0 0 8px 0;
        position: absolute;
        left: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        padding: 0;
        color: #333;
    }

    .header_layer_box .category h3 {
        position: absolute;
        left: 0;
        top: 0;
        margin: 0;
    }

    .header_layer_box .category a {
        display: block;
        font-size: 13px;
        padding: 0;
        color: #333;
        text-align: left;
        font-weight: normal;
        /* height: 30px; */
        height: 28px;
        line-height: normal;

        &:hover {
            text-decoration: underline;
        }
    }

    .header_layer_box .category h3 a {
        font-size: 15px;
        background: url(https://image.aladin.co.kr/img/header/2023/arr_go.svg)
            no-repeat center right 1px / 6px auto;
        padding-right: 12px;
        letter-spacing: -0.01em;
        font-weight: bold;
    }

    /* bookstore 레이어 */
    #head_bookstore_layer.header_layer_box_s {
        width: 110px;
        height: auto;
        left: 688px;
        background-color: #fff;
        box-shadow: 0px 3px 16px #00000033;
        padding: 14px 18px 10px 18px;
        box-sizing: border-box;
        position: absolute;
        top: 38px;
        z-index: 10000;
    }

    .header_layer_box_s a {
        color: black;
    }

    #head_bookstore_layer.header_layer_box_s a {
        line-height: normal;
        font-weight: normal;
    }
`;

export const Top = styled.div`
    height: 38px;
    background-color: #33afe9;
    border-bottom: 1px solid #4496d9;

    .header_on {
        background-color: #fff;
        border: 1px solid #4496d9;
        border-bottom: none;

        a {
            color: #0f4e8a !important;
        }

    }

    .gnb li {
        white-space: nowrap;
    }

    a,
    .gnb > li > a {
        width: max-content;
        display: inline-block;
        padding: 0 7px;
        line-height: 37px;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        overflow: hidden;
        letter-spacing: -0.5px;
        font-family: Malgun Gothic, Dotum, "돋움", Helvetica,
            "Apple SD Gothic Neo", sans-serif !important;
        /* border: 1px solid transparent; */
    }

    .util > li > a,
    .util > li > button,
    .util > li > span {
        font-family: Malgun Gothic, Dotum, "돋움", Helvetica,
            "Apple SD Gothic Neo", sans-serif !important;
        width: max-content;
        display: inline-block;
        height: 38px;
        padding: 0 4px;
        line-height: 37px;
        color: #fff;
        font-size: 11px;
        font-weight: bold;
        box-sizing: border-box;
    }

    .util > li > button {
        border: none;
        background: none !important;
        height: auto !important;
    }

    .inner {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 9999;

        width: 1030px !important;
        margin: 0 auto;
    }

    .inner,
    .gnb,
    .util {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 9999;
    }

    .banner img,
    #head_coffee_layer.header_layer_box .banner img {
        border-radius: 15px;
    }

    .usedfaq {
        margin-bottom: 35px;
    }
`;

export const Bottom = styled.div`
    width: 1030px;
    height: 115px;
    margin: 0 auto;
    display: flex;
    position: relative;
    align-items: baseline;

    padding-top: 0.5rem;

    h1 > a {
        display: block;
        width: 100%;
        height: 100%;
        color: transparent;
        font-size: 0;
    }

    .header_middle-logo {
        width: 212px;
        height: 100%;
        flex-shrink: 0;
        font-size: 0px;
        margin: 0;
        color: transparent;
        padding: 0;

        .middle-logo-img {
            width: 145px;
        }
    }

    #global_search {
        background: url(${bg_search}) no-repeat !important;
        width: 535px;
        top: 28px;
        height: 41px;
        position: relative;
    }

    .search_btn {
        width: 56px;
        height: 40px;
        font-size: 15px;
        font-weight: bold;
        background-color: transparent;
        color: #fff;
        border: 0;
        position: absolute;
        right: 64px;
        top: 28px;
    }

    #global_search dl {
        float: left;
        width: 78px;
        margin: 7px 0px 0px 10px;

    }

    #global_search dt {
        background: url(${i_arrdown}) no-repeat right 5px bottom 2px;
        color: #2f9ddc;
        font-weight: bold;
        float: left;
        width: 78px;
        padding: 0.3em 0.3em 0.3em 0.6em;

        
    }

    #searchTarget {
        font-family: Malgun Gothic, Dotum, "돋움", Helvetica,
            "Apple SD Gothic Neo", sans-serif !important;
        height: 18px;
        /* overflow: hidden; */
        position: relative;

        &:hover {
            cursor: pointer;
        }
        
        .dropdown {
            position: absolute;
            z-index: 99;
            /* height: 200px; */
            background-color: white;
            outline: 0;
            color: rgb(83, 151, 208);
            top: 22px;
            left: 0;
        }

        .dropbtn_icon {
            font-family: "Material Icons";
        }


        .dropdown-content {
            border: 2px solid #5397d0;
            font-weight: bold;
            z-index: 1; /*다른 요소들보다 앞에 배치*/
            font-weight: 400;
        }

        .dropdown-content button {
            background: none;
            border: none;
            font-weight: bold;
            display: block;
            text-decoration: none;
            color: rgb(83, 151, 208);
            font-size: 12px;
            padding: 0.5rem;
            margin: 0;
            width: 100%;
            text-align: left;

            &:hover{
                background-color: #ececec;
            }
        }
    }

    #serachInput-box {
        float: left;
        width: 282px;
        margin-top: 7px;
        padding-left: 10px;
    }

    #serachInput-txt {
        border: 0px solid transparent;
        background-color: transparent;
        width: 280px;
        color: #006699;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        display: inline;
        outline-style: none;
        font-family: "Apple SD Gothic Neo", Malgun Gothic, "돋움", "굴림", Gulim,
            dotum, "Segoe WPC", "Segoe UI", Helvetica, AppleGothic, Sans-serif;
        background-position-y: 3px;
    }

    .detail_search {
        font-family: Malgun Gothic, Dotum, "돋움", Helvetica,
            "Apple SD Gothic Neo", sans-serif !important;
        font-size: 11px;
        background: url(${gray_arr}) no-repeat center right;
        padding: 0 8px 2px 0;
        margin: 0 0 0 8px;
        letter-spacing: -0.5px;
        color: #737373;
        position: absolute;
        right: 0;
        top: 37px;
    }

    .ad_box {
        width: 192px;
        position: absolute;
        right: 0;
        top: 27px;
        text-align: right;
    }
`;
