//헤더 컴포넌트
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//라이브러리 및 스토어
import { kakaoSearch } from "api/searchApi";
import { useSelector } from "react-redux";

// 로그인 contextAPI
import AuthContext from "contexts/AuthContext";

// 커스텀 훅
import useSignOut from "../hooks/useSignOut";
import { useLoadingContext } from "hooks/useLoading";
import { useSearchBooks } from "hooks/useSearchBooks";

//컴포넌트 임포트

// 스타일컴포넌트 임포트
import * as HeaderStyled from "../styled-components/HeaderStyled";

//커스텀 이미지 임포트
import logo from "../static/images/logo.webp";
import top_header_R from "../static/images/top_header_R.jpg";
import top_header_L from "../static/images/top_header_L.jpg";
import header_banner from "../static/images/header_banner.jpg";

function Header({reviewObj}) {
    const { userObj } = useContext(AuthContext);
    const onSignOutClick = useSignOut();

    let addedBooks = useSelector((state) => state.book);

    const [hover, setHover] = useState(false);

    const [searchMode, setSearchMode] = useState("도서명");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");

    const [searchError, setSearchError] = useState(null);
    
    //검색결과를 훅을통해서 contxetAPI에 전달하기
    const { searchResults, setSearchResults } = useSearchBooks();

    const { startLoading, stopLoading } = useLoadingContext();
    const navigate = useNavigate();

    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        // 현재 URL 경로 확인
        const currentPath = window.location.pathname;
    
        // "/home"일 때만 "home" 메뉴를 초기 선택으로 설정
        if (currentPath === "/") {
            setSelectedMenu("home");
        }
    }, [searchResults]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const { data } = await kakaoSearch({
                    query: "some_search_term",
                });
                setSearchResults(data.documents);
                // console.log("fetchBooks");
            } catch (error) {
                // console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // if (!userObj) {
    //     return null;
    // }

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
    // 검색어 초기화 함수
    const resetSearchFields = () => {
        setSearchTitle("");
        setSearchAuthor("");
    };

    // 검색 모드 및 검색어 설정 함수
    const setSearchParams = (mode, title, author) => {
        setSearchMode(mode);
        resetSearchFields();
        return {
            sort: "accuracy",
            page: 1,
            size: 32,
            query: mode === "도서명" ? title : author,
            [mode === "도서명" ? "title" : "authors"]:
                mode === "도서명" ? title : author,
        };
    };

    // 검색 기능
    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchError(null);
        startLoading();
    
        const params = setSearchParams(searchMode, searchTitle, searchAuthor);
        // console.log("Search Params:", params);
    
        if (params.query) {
            try {
                const { data } = await kakaoSearch(params);
                const searchResults = data.documents;
                // console.log("Search Results:", searchResults);
    
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
            setSearchResults([]); // 검색어가 없을 때 빈 배열로 업데이트
            setSearchError("검색어를 입력해주세요");
        }
        stopLoading();
    };
    
    // 검색 모드 변경
    const handleModeChange = (mode, event) => {
        event.preventDefault();
        setSearchParams(mode, "", "");
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
                            <li className={selectedMenu === "home" ? "home header_on" : "home"} onClick={() => setSelectedMenu("home")}>
                                <Link to="/">
                                    HOME
                                </Link>
                            </li>
                            <li id="head_board_layer" className={selectedMenu === "board" ? "board header_on" : "board"} onClick={() => setSelectedMenu("board")}>
                                <Link to="/board" title="리뷰게시판">
                                    리뷰게시판
                                </Link>
                            </li>
                            <li id="head_book_layer" className={selectedMenu === "bestSellers" ? "bestSellers header_on" : "bestSellers"} onClick={() => setSelectedMenu("bestSellers")}>
                                <Link to="/bestSellers" title="인기도서">
                                    인기도서
                                </Link>
                            </li>
                            <li id="head_book_layer" className={selectedMenu === "newbooks" ? "newbooks header_on" : "newbooks"} onClick={() => setSelectedMenu("newbooks")}>
                                <Link to="/newbooks" title="신간도서">
                                    신간도서
                                </Link>
                            </li>
                            <li id="head_book_layer" className={selectedMenu === "guide" ? "guide header_on" : "guide"} onClick={() => setSelectedMenu("guide")}>
                            <Link to="/guide" title="가이드">
                                가이드
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
                                    <Link to="/userInfo" title="서재">
                                        서재{" "}
                                        <span id="basketItemCount">
                                            ( {!addedBooks || addedBooks.length ? addedBooks.length : 0} )
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
                    <div className="header_middle-logo">
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
                                    onClick={(event) => handleSearch(event)}
                                >
                                    검색
                                </button>
                            </Link>
                        </form>
                    </div>
                    <div className="ad_box">
                        <a href="#!" title="헤더배너">
                            <img src={header_banner} alt="헤더배너" />
                        </a>
                    </div>
                </HeaderStyled.Bottom>
            </HeaderStyled.Container>
        </>
    );
}

export default Header;
