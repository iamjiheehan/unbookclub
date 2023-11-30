//헤더 컴포넌트
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//라이브러리 및 스토어
import { kakaoSearch } from "api/searchApi";
import { useSelector } from "react-redux";

// contextAPI
import AuthContext from "contexts/AuthContext";
import { MenuContext } from "contexts/MenuContainer";

// 커스텀 훅
import useSignOut from "../hooks/useSignOut";
import { useLoadingContext } from "hooks/useLoading";
import { useSearchBooks } from "hooks/useSearchBooks";

// 스타일컴포넌트 임포트
import * as HeaderStyled from "../styled-components/HeaderStyled";

//커스텀 이미지 임포트
import logo from "../static/images/logo.webp";
import top_header_R from "../static/images/top_header_R.jpg";
import top_header_L from "../static/images/top_header_L.jpg";
import header_banner from "../static/images/header_banner.jpg";

function Header({ reviewObj }) {
    const { selectedMenu, handleMenuClick } = useContext(MenuContext);

    const { userObj } = useContext(AuthContext);
    const onSignOutClick = useSignOut();
    let addedBooks = useSelector((state) => state.book);

    const [hover, setHover] = useState(false);

    const [searchMode, setSearchMode] = useState("도서명");
    const [target, setTarget] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");

    const [searchError, setSearchError] = useState(null);

    //검색결과를 훅을통해서 contxetAPI에 전달하기
    const { searchResults, setSearchResults } = useSearchBooks();

    const { startLoading, stopLoading } = useLoadingContext();
    const navigate = useNavigate();

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

    // 검색 모드 및 검색어 설정 함수
    const setSearchParams = (mode, searchTitle, searchAuthor, target) => {
        setSearchMode(mode);
        return {
            sort: "accuracy",
            page: 1,
            size: 32,
            query: mode === "도서명" ? searchTitle : searchAuthor,
            // query: mode === "통합검색",
            target: mode, // 수정: 현재 mode 값을 사용
        };
    };
    // 검색 기능
    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchError(null);
        startLoading();
        setSearchResults([]); // 초기화 추가

        // setSearchParams 함수의 내용을 직접 여기에 포함
        const mode = searchMode;
        setSearchMode(mode);

        const params = {
            sort: "accuracy",
            page: 1,
            size: 32,
            query: mode === "도서명" ? searchTitle : searchAuthor,
            target: target,
        };

        if (params.query) {
            try {
                const { data } = await kakaoSearch(params);
                const searchResults = data.documents;
                setSearchResults(searchResults);
                navigate("/books");
                if (searchResults.length === 0) {
                    setSearchError("검색 결과가 없습니다.");
                }
            } catch (error) {
                console.error(error);
                setSearchError("검색 중 오류가 발생했습니다.");
            }
        } else {
            setSearchError("검색어를 입력해주세요");
        }
        stopLoading();
    };

    // 검색 모드 변경
    const handleModeChange = (mode, event) => {
        event.preventDefault();
        if (mode === "도서명") {
            setSearchMode("도서명");
            setTarget("title");
        } else {
            setSearchMode("작가명");
            setTarget("person");
        }
        setSearchParams(mode, searchTitle, searchAuthor); // 그 후에 setSearchParams 호출
    };

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
                            <a href="javascript:void(0);">
                                <img src={top_header_L} alt="" border="0" />
                            </a>
                        </div>
                        <div className="right">
                            <a href="javascript:void(0);">
                                <img src={top_header_R} alt="" border="0" />
                            </a>
                        </div>
                        <div className="close">
                            <a href="javascript:void(0);" alt="닫기">
                                닫기
                            </a>
                        </div>
                    </div>
                </div>
                {/* 헤더 맨 위 메뉴  */}
                <HeaderStyled.Top className="header_top">
                    <div className="inner">
                        <ul className="gnb" id="headerTop_gnb">
                            <li
                                className={
                                    selectedMenu === "home"
                                        ? "home header_on"
                                        : "home"
                                }
                                onClick={() => handleMenuClick("home")}
                            >
                                <Link to="/">HOME</Link>
                            </li>
                            <li
                                id="head_board_layer"
                                className={
                                    selectedMenu === "board"
                                        ? "board header_on"
                                        : "board"
                                }
                                onClick={() => handleMenuClick("board")}
                            >
                                <Link to="/board" title="리뷰게시판">
                                    리뷰게시판
                                </Link>
                            </li>
                            <li
                                id="head_book_layer"
                                className={
                                    selectedMenu === "bestSellers"
                                        ? "bestSellers header_on"
                                        : "bestSellers"
                                }
                                onClick={() => handleMenuClick("bestSellers")}
                            >
                                <Link to="/bestSellers" title="인기도서">
                                    인기도서
                                </Link>
                            </li>
                            <li
                                id="head_book_layer"
                                className={
                                    selectedMenu === "newbooks"
                                        ? "newbooks header_on"
                                        : "newbooks"
                                }
                                onClick={() => handleMenuClick("newbooks")}
                            >
                                <Link to="/newbooks" title="신간도서">
                                    신간도서
                                </Link>
                            </li>
                            <li
                                id="head_book_layer"
                                className={
                                    selectedMenu === "guide"
                                        ? "guide header_on"
                                        : "guide"
                                }
                                onClick={() => handleMenuClick("guide")}
                            >
                                <Link to="/guide" title="가이드">
                                    가이드
                                </Link>
                            </li>
                            <li
                                id="head_book_layer"
                                className={
                                    selectedMenu === "userInfo"
                                        ? "userInfo header_on"
                                        : "userInfo"
                                }
                                onClick={() => handleMenuClick("userInfo")}
                            >
                                <Link to="/userInfo" title="마이페이지">
                                    마이페이지
                                </Link>
                            </li>
                        </ul>
                        <ul className="util" id="headerTop_util">
                            {reviewObj}
                            {userObj ? (
                                <>
                                    <li>
                                        {userObj.uid ? (
                                            <span>
                                                <strong>
                                                    {userObj.displayName}
                                                </strong>{" "}
                                                회원님 안녕하세요
                                            </span>
                                        ) : (
                                            <span>
                                                <strong>회원</strong> 님
                                                안녕하세요
                                            </span>
                                        )}
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                onSignOutClick();
                                                handleMenuClick("home");
                                            }}
                                        >
                                            로그아웃
                                        </button>
                                    </li>

                                    <li id="headerBasketBtn">
                                        <Link to="/userInfo" title="서재">
                                            서재{" "}
                                            <span id="basketItemCount">
                                                ({" "}
                                                {!addedBooks ||
                                                addedBooks.length
                                                    ? addedBooks.length
                                                    : 0}{" "}
                                                )
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
                                        <Link to="/signUp" title="회원가입">
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
                    <div
                        className="header_middle-logo"
                        onClick={() => handleMenuClick("home")}
                    >
                        <h1>
                            <Link to="/" title="서재">
                                <img
                                    className="middle-logo-img"
                                    src={logo}
                                    alt="알라딘"
                                />
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
                                <dl
                                    onMouseEnter={() => {
                                        setHover(true);
                                        //console.log("Mouse entered");
                                    }}
                                    onMouseLeave={() => {
                                        setHover(false);
                                        //console.log("Mouse left");
                                    }}
                                >
                                    <dt id="searchTarget">
                                        {searchMode}
                                        {hover && (
                                            <div className="dropdown">
                                                <div className="dropdown-content">
                                                    <button
                                                        onClick={(e) =>
                                                            handleModeChange(
                                                                "도서명",
                                                                e
                                                            )
                                                        }
                                                    >
                                                        도서명
                                                    </button>
                                                    <button
                                                        onClick={(e) =>
                                                            handleModeChange(
                                                                "작가명",
                                                                e
                                                            )
                                                        }
                                                    >
                                                        작가명
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </dt>
                                </dl>
                                <div id="serachInput-box">
                                    <input
                                        id="serachInput-txt"
                                        type="text"
                                        autoComplete="off"
                                        value={
                                            searchMode === "작가명"
                                                ? searchAuthor
                                                : searchTitle
                                        }
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            if (searchMode === "작가명") {
                                                setSearchAuthor(value);
                                            } else {
                                                setSearchTitle(value);
                                            }
                                        }}
                                    />
                                    <label
                                        htmlFor="serachInput-txt"
                                        className="hide"
                                    >
                                        검색
                                    </label>
                                </div>
                            </div>
                            <Link to="/books">
                                <button
                                    type="button"
                                    className="search_btn"
                                    onClick={(e) => handleSearch(e)}
                                >
                                    검색
                                </button>
                            </Link>
                        </form>
                    </div>
                    <div className="ad_box">
                        <a href="javascript:void(0);" title="헤더배너">
                            <img src={header_banner} alt="헤더배너" />
                        </a>
                    </div>
                </HeaderStyled.Bottom>
            </HeaderStyled.Container>
        </>
    );
}

export default Header;
