//헤더 컴포넌트
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//라이브러리 및 스토어
import { firebaseInstance } from "fBase";
import { kakaoSearch } from "api/searchApi";
import { useSelector } from "react-redux";

// 로그인 contextAPI
import AuthContext from "contexts/AuthContext";

// 커스텀 훅
import useSignOut from "../hooks/useSignOut";
import { useLoadingContext } from "hooks/useLoading";

//컴포넌트 임포트

// 스타일컴포넌트 임포트
import * as HeaderStyled from "../styled-components/HeaderStyled";

//커스텀 이미지 임포트
import logo from "../static/images/logo.webp";
import top_header_R from "../static/images/top_header_R.jpg";
import top_header_L from "../static/images/top_header_L.jpg";
import header_banner from "../static/images/header_banner.jpg";

function Header({ reviewObj, updateResults }) {
    const { userObj } = useContext(AuthContext);
    const displayName = userObj?.displayName;
    const onSignOutClick = useSignOut();
    let addedBooks = useSelector((state) => state.book);

    const [hover, setHover] = useState(false);

    const [searchMode, setSearchMode] = useState("도서명");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");

    const [searchError, setSearchError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");

    const { startLoading, stopLoading } = useLoadingContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const { data } = await kakaoSearch({
                    query: "some_search_term",
                });
                setSearchResults(data.documents);
                console.log("fetchBooks");
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

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

    //검색기능
    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchError(null);
        startLoading();
        let params = {
            sort: "accuracy", // accuracy | recency 정확도 or 최신
            page: 1, // 페이지번호
            size: 10, // 한 페이지에 보여 질 문서의 개수
        };
        let queryParam = "";
        if (searchMode === "도서명") {
            queryParam = searchTitle;
        } else if (searchMode === "작가명") {
            queryParam = searchAuthor;
        }
        if (queryParam) {
            params.query = queryParam;
            setQuery(queryParam);
            console.log(query,searchMode);
            try {
                const { data } = await kakaoSearch(params); // api 호출
                console.log(data);
    
                const searchResults = data.documents;
                setSearchResults(searchResults);
    
                console.log(searchResults + `Header에서 보냅니다`);
    
                updateResults(searchResults); // App.js에 저장된 함수에 값 전달
    
                navigate("/books");
                if (searchResults.length === 0) {
                    setSearchError("검색 결과가 없습니다.");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            if (searchResults.length > 0) {
                setSearchResults([]);
            } else if (searchResults.length === 0) {
                setSearchError("검색어를 입력해주세요");
            }
        }
    
        stopLoading();
    };
    

    //드롭다운 관련 메뉴

    const handleModeChange = (mode, event) => {
        event.preventDefault();
        setSearchMode(mode);
        if (mode === "도서명") {
            setSearchTitle("");
        } else {
            setSearchAuthor("");
        }
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
                                        <Link to="/userInfo" title="서재">
                                            서재{" "}
                                            <span id="basketItemCount">
                                                ( {addedBooks.length} )
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
                                        console.log("Mouse entered");
                                    }}
                                    onMouseLeave={() => {
                                        setHover(false);
                                        console.log("Mouse left");
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
