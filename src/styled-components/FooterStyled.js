import styled from "styled-components";

import islm from '../static/images/footer_isms.jpg'
import escrow from '../static/images/footer_escrow.jpg'
import location from '../static/images/location.svg';

const FooterStyled = styled.div`
    text-align: left;
    line-height: 18px;
    margin-bottom: 50px;
    font-family: Malgun Gothic,Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif!important;

    a,
    a:link {
        color: #333;
    }

    h3 {
        font-size: 17px;
        margin: 0 0 15px 0;
        color: #333;
        padding: 0;
    }

    .inner {
        width: 1030px;
        margin: 0 auto;

    }

    .footer_bottom {
        display: flex;
        justify-content: space-between;
    }

    .footer_menu {
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 35px;
    }

    .footer_menu ul {
        width: 1030px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 22px 0;
        font-family: Malgun Gothic,Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif!important;

    }
    .footer_menu ul li a {
        font-size: 13px;
        color: #333;
        text-decoration: none;
    }

    .aladin_box address {
        font-size: 12px;
        font-style: normal;
        margin-bottom: 20px;
    }

    .aladin_box address span a {
        background: url(${location}) no-repeat center right / 4px 8px;
        padding-right: 10px;
        text-decoration: none;
    }

    .aladin_box address span {
        display: inline-block;
        margin-right: 18px;
        margin-bottom: 5px;
    }

    .aladin_box address {
        font-size: 12px;
        font-style: normal;
        margin-bottom: 20px;
    }

    .aladin_box .certify {
        display: flex;
    }

    .aladin_box .certify a {
        height: 34px;
        font-size: 11px;
        padding: 8px 0 0 40px;
        line-height: 1.2;
    }

    .aladin_box .certify a.escrow {
        background: url(${escrow}) no-repeat center left;
        text-decoration: none;
    }

    .aladin_box .certify a.isms {
        background: url(${islm}) no-repeat center left;
        margin-left: 30px;
        text-decoration: none;
    }

    .copyright {
        color: #737373;
    }

    .cscenter_box address {
        font-size: 12px;
        font-style: normal;
        margin-bottom: 8px;
    }

    .cscenter_box {
        width: 320px;
        flex-shrink: 0;
    }

    .cscenter_box .shop_info a::before {
        content: "";
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url("../img/location.svg") no-repeat center;
        vertical-align: middle;
        margin-top: -4px;
        margin-right: 2px;
    }

    .cscenter_box .shop_info a {
        display: inline-block;
        width: 100%;
        height: 36px;
        border: 1px #e6e6e6 solid;
        border-radius: 4px;
        text-align: center;
        line-height: 34px;
        box-sizing: border-box;
        font-size: 13px;
        color: #333;
        text-decoration: none;
    }

    .cscenter_box .cs_link {
        font-size: 0;
        margin-bottom: 20px;
    }

    .cscenter_box .cs_link a ~ a {
        margin-left: 6px;
    }

    .cscenter_box .cs_link a {
        display: inline-block;
        width: 157px;
        height: 36px;
        border: 1px #e6e6e6 solid;
        border-radius: 4px;
        text-align: center;
        line-height: 34px;
        box-sizing: border-box;
        font-size: 13px;
        text-decoration: none;
    }
`;

export default FooterStyled;
