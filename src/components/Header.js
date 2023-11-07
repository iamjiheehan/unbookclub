import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../static/images/logo.webp";

import * as HeaderStyled from "../styled-components/HeaderStyled";

import LoginBtn from "../styled-components/LoginBtnStyled";
import { ImgStyled, LogoImgStyled } from "../styled-components/ImgStyled";
import Button from "../styled-components/ButtonStyled";
import { TextP } from "../styled-components/TextStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "../hooks/useSignOut";
import { LoadingBack, LoadingText } from "../styled-components/LoadingStyled";

import Cube from "../static/images/cube.gif";
import top_header_R from "../static/images/top_header_R.jpg";
import top_header_L from "../static/images/top_header_L.jpg";
import header_banner from "../static/images/header_banner.jpg";
import i_arrdown_fill from "../static/images/i_arrdown_fill.gif";
import aladin_logo_new from "../static/images/aladin_logo_new.gif";

import AuthContext from "contexts/AuthContext";
import { firebaseInstance } from "fBase";
import { Link } from "react-router-dom";

function Header({ reviewObj }) {
    const { userObj } = useContext(AuthContext);
    const displayName = userObj?.displayName;
    const onSignOutClick = useSignOut();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged((user) => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <LoadingBack>
                <LoadingText>잠시만 기다려 주세요.</LoadingText>
                <img src={Cube} alt="로딩중" width="5%" />
            </LoadingBack>
        );
    }

    // ---------------------------------------헤더 메뉴 호버

    // #headerTop_gnb 요소 내부의 모든 목록 항목을 가져옴.
    const listItems = document.querySelectorAll(
        "#headerTop_gnb li, .l_menu li"
    );

    listItems.forEach(function (listItem) {
        listItem.addEventListener("mouseenter", function () {
            const item = this.querySelector("div");
            if (item) {
                item.style.display = "block";
            }
        });
    });

    // mouseleave 이벤트 리스너를 추가하여 자식 div를 숨김.
    listItems.forEach(function (listItem) {
        listItem.addEventListener("mouseleave", function () {
            const item = this.querySelector("div");
            if (item) {
                item.style.display = "none";
            }
        });
    });

    // 상위 팝업 배너 닫기
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const w_t_event = document.querySelector(".w_t_event");
            if (w_t_event) {
                w_t_event.style.display = "none";
            }
        });
    });

    // 팝업 메뉴 닫기
    // const menuCloseButtons = document.querySelectorAll(".menu_close");
    // menuCloseButtons.forEach(function (button) {
    //     button.addEventListener("click", function () {
    //         const headLayerMenu = document.querySelector("#head_layer_menu");
    //         if (headLayerMenu) {
    //             headLayerMenu.style.display = "none";
    //         }
    //     });
    // });

    return (
        <>
            <HeaderStyled.Container className="header_wrap">
                {/* 상단 이벤트 베너 */}
                <div
                    className="w_t_event roof_bnwrap"
                    style={{ background: "rgb(124, 91, 244)" }}
                >
                    <div className="RE_banner_new">
                        <div className="left">
                            <a href="#!">
                                <img src={top_header_L} alt="" border="0" />
                            </a>
                        </div>
                        <div className="right">
                            <a href="#!">
                                <img src={top_header_R} alt="" border="0" />
                            </a>
                        </div>
                        <div className="close">
                            <a href="#!" alt="닫기">
                                닫기
                            </a>
                        </div>
                    </div>
                </div>
                {/* 헤더 맨 위 메뉴  */}
                <HeaderStyled.Top className="header_top">
                    <div className="inner">
                        <ul className="gnb" id="headerTop_gnb">
                            <li className="home">
                                <Link to="/" className="header_on">
                                    HOME
                                </Link>
                            </li>
                            <li id="head_book_layer">
                                <Link to="/board" title="리뷰게시판">
                                    리뷰게시판
                                </Link>
                            </li>
                            <li id="head_book_layer">
                                <Link to="/bestSellers" title="인기도서">
                                    인기도서
                                </Link>
                            </li>
                            <li id="head_book_layer">
                                <Link to="/newbooks" title="신간도서">
                                    신간도서
                                </Link>
                            </li>
                            <li id="head_book_layer">
                                <Link to="/guide" title="가이드">
                                    가이드
                                </Link>
                            </li>
                        </ul>
                        <ul className="util" id="headerTop_util">
                            {reviewObj}
                            {displayName ? (
                                <>
                                    <li>
                                        <span>
                                            <strong>{displayName}</strong> 님
                                            반가워요!
                                        </span>
                                    </li>
                                    <li>
                                        <button onClick={onSignOutClick}>
                                            로그아웃
                                        </button>
                                    </li>
                                    <li>
                                        <Link to="/userInfo" title="마이페이지">
                                            마이페이지
                                        </Link>
                                    </li>
                                    <li id="headerBasketBtn">
                                        <Link to="/sub.html" title="서재">
                                            서재
                                            <span id="basketItemCount">
                                                (0)
                                            </span>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/signIn" title="로그인">
                                            로그인
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signIn" title="회원가입">
                                            회원가입
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </HeaderStyled.Top>
                <HeaderStyled.Bottom className="header_bottom">
                    {/* 홈 화면 바로가기 로고 */}
                    <div className="header_middle-logo">
                        <h1>
                            <Link to="/" title="서재">
                                <a
                                    href="#!"
                                    id="logoBtn"
                                    title="첫화면으로 가기"
                                    style={{ cursor: "pointer" }}
                                >
                                    알라딘
                                    <img src={logo} alt="알라딘" />
                                </a>
                            </Link>
                        </h1>
                    </div>
                    <div className="search_field">
                        <form
                            id="QuickSearch"
                            className="relative"
                            name="QuickSearch"
                            action=""
                        >
                            <div id="global_search">
                                <dl>
                                    <dt id="searchTarget">통합검색</dt>
                                </dl>
                                <div id="serachInput-box">
                                    <input
                                        id="serachInput-txt"
                                        type="text"
                                        autoComplete="off"
                                    />
                                    <label
                                        // for="serachInput-txt"
                                        htmlFor="serachInput-txt"
                                        className="hide"
                                    >
                                        검색
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="search_btn">
                                검색
                            </button>
                        </form>
                    </div>
                    <div className="ad_box">
                        <a href="./sub.html" title="헤더배너">
                            <img src={header_banner} alt="헤더배너" />
                        </a>
                    </div>
                </HeaderStyled.Bottom>
            </HeaderStyled.Container>
        </>
    );
}

export default Header;
