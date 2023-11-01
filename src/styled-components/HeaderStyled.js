import styled from "styled-components";

import bg_search from "../static/images/bg_search.png";
import gray_arr from "../static/images/gray_arr.gif";
import i_arrdown from "../static/images/i_arrdown.gif";
import i_menu from "../static/images/i-menu.png";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #33afe9;
    margin-bottom: 9px;

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

        /* display:none; */


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

    .header_layer_box .category h3  a{
        font-size: 15px;
        background: url(https://image.aladin.co.kr/img/header/2023/arr_go.svg) no-repeat center right 1px / 6px auto;
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

    #head_bookstore_layer.header_layer_box_s a{
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
        color: #0f4e8a !important;
    }

    
    .gnb li {
        white-space: nowrap;

    }


    a, .gnb > li > a {
        width: max-content;
        display: inline-block;
        padding: 0 7px;
        line-height: 37px;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        overflow: hidden;
        letter-spacing: -0.5px;
        /* border: 1px solid transparent; */
    }

    .util > li > a {
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

export const Middle = styled.div`
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

    .header_middle-logo {
        width: 212px;
        height: 100%;
        flex-shrink: 0;
        font-size: 0px;
        margin: 0;
        color: transparent;
        padding: 0;

        #logoBtn {
            font-size: 0;
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
        right: 68px;
        top: 28px;
    }

    #searchTarget {
        height: 18px;
        overflow: hidden;
    }

    #global_search dl {
        float: left;
        width: 78px;
        margin: 12px 0 0 20px;
    }

    #global_search dt {
        background: url(${i_arrdown}) no-repeat right 5px;
        color: #2f9ddc;
        font-weight: bold;
        float: left;
        width: 78px;
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

    .icon-down {
        float: left;
        width: 29px;
    }

    .ad_box {
        width: 192px;
        position: absolute;
        right: 0;
        top: 10px;
        text-align: right;
    }
`;

export const Bottom = styled.div`
    width: 1030px;
    height: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .r_menu > li > a {
        width: max-content;
        font-size: 13px;
        color: #dd2483;
        font-weight: bold;
        padding: 0 6px 3px 8px;
        line-height: 25px;
    }

    /* 펼치기 메뉴 */

    & > ul {
        display: flex;
        position: relative;
    }

    ul > li > a {
        display: inline-block;
        line-height: 25px;
        font-size: 13px;
        position: relative;
        box-sizing: border-box;

        width: max-content;
        color: #0f4e8a;
        /* font-weight: bold; */
        padding: 0 7px 3px 7px;
        letter-spacing: -0.5px;
    }

    ul.l_menu > li > a {
        width: max-content;
        color: #0f4e8a;
        font-weight: bold;
        letter-spacing: -0.5px;

        .new {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-color: #f32383;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 12px;
            font-size: 9px;
            font-weight: normal;
            margin: -2px 0 0 0px;
            vertical-align: middle;
        }
    }

    ul > li.categoryall > a {
        width: max-content;
        background: url(${i_menu}) no-repeat left 8px center;
        padding: 0 15px 3px 28px;
        line-height: 25px;
        font-size: 13px;
        color: #0f4e8a;
        font-weight: bold;
        margin-right: 7px;

        &::after {
            content: "";
            display: block;
            width: 1px;
            height: 12px;
            background-color: #ded9d9;
            position: absolute;
            right: 0;
            top: 7px;
        }
    }

    ul > li a.tobelogo {
        color: #26b5bf !important;
        padding: 0 13px 4px 7px;

        &::after {
            content: "";
            display: inline-block;
            width: 11px;
            height: 11px;
            background: url(https://image.aladin.co.kr/img/ToBeContinued/common/tb-simbol.svg)
                no-repeat center / 100% auto;
            font-size: 0px;
            color: transparent;
            margin: -2px 0 0 0px;
            vertical-align: middle;
            position: absolute;
            right: 0;
            top: 10px;
        }
    }

    .categorysub_layer_t {
        background: #3a3a3a;
        font-weight: bold;
        padding: 4px 0 4px 9px;
        margin-bottom: 5px;
        color: #ffffff;

        a {
            color: #ffffff;
        }
    }

    .categorysub_layer_new2 {
        float: left;
        background-color: #ffffff !important;

        a {
            color: #333333;
        }

        ul {
            float: left;
            list-style: none;
            padding: 0;
            margin: 0;
            width: 130px;
        }

        li {
            list-style: none;
            margin: 0 0 0 10px;
            font-size: 13px;
            padding: 2px 0 4px 0;
        }
    }

    #head_layer_menu a {
        text-decoration: none;
        display: block;
        font-size: 13px;
    }

    #head_layer_menu a:hover,
    .category a:hover,
    .category > ul > li > a:hover {
        text-decoration: underline;
    }



    .hdm {
        padding: 9px;
        position: absolute;
        background-color: White;
        width: auto;
        z-index: 10000;
        opacity: 1;
        margin: -5px 0 0 -1px;
        box-shadow: 0px 3px 16px #00000033;
        /* display: none; */
    }
`;
