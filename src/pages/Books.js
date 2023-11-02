// 도서 검색 게시판
import React, { useEffect, useState } from "react";

// 리덕스임포트
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "store";

// 베스트셀러 데이터
import bestSeller from "../data/bestSeller.json";

// 컴포넌트 임포트
import { BestSellersList } from "components/BestSellers";
import { NewBooksList } from "components/NewBooks";
import { SearchBooks } from "components/Search";

// 부트스트랩 라이브러리
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

// 스타일컴포넌트 임포트
import * as BookStyled from "../styled-components/ListStyled";

import Button from "styled-components/ButtonStyled";
import { TextH1, TextP } from "styled-components/TextStyled";
import { FirstImgStyled, ImgStyled } from "../styled-components/ImgStyled";
import HR from "styled-components/LineStyled";

import { Btn1, Btn2 } from "styled-components/BtnStyled";

// 이미지 임포트
import bookImg from "../static/images/menu-icon-03.webp";
import { FaArrowRight } from "react-icons/fa";

export default function Books() {
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [mode, setMode] = useState("");
    const [show, setShow] = useState(false);

    const handleModeChange = (mode) => {
        setMode(mode);
        setShow(true);
    };

    // 데이터 변수에 할당
    const posts = bestSeller;
    // 리덕스에 있는 데이터 가져오기
    let addedBooks = useSelector((state) => state.book);
    // 디스패치 함수호출
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(posts.length);
    }, [posts.length]);

    // 카트에 담을 속성들 파라미터로 설정
    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        console.log(
            "Adding book to cart:",
            itemId,
            title,
            author,
            coverLargeUrl
        );
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            console.log("Book already in cart:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        console.log("Book added to cart:", itemId);
    };

    // 더보기 버튼
    const itemsPerRow = 4;

    //초기값이 3행이 보이도록 설정
    const [numItemsToShow, setNumItemsToShow] = useState(itemsPerRow * 3);
    const handleLoadMore = () => {
        setNumItemsToShow(numItemsToShow + itemsPerRow * 3);
    };

    // 기본 정렬 기준을 pubDate로 설정
    const [sortBy, setSortBy] = useState("itemId"); 

    // 정렬 함수
    const sortPosts = (sortBy) => {
        return [...posts].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            //값이 1인것은 b를 a의 앞에 위치시킨다는 것을 의미
            if (a[sortBy] > b[sortBy]) return 1;
            //return 0;은 두 요소가 같은 경우에는 순서를 변경하지 않음
            return 0;
        });
    };

     // 정렬된 게시물을 가져오는 함수
    const getSortedPosts = () => {
        return sortPosts(sortBy);
    };

    const handleSortBy = (eventKey) => {
        // 드롭다운 메뉴에서 선택한 항목에 따라 sortBy 값을 변경
        if (eventKey === "1") {
            setSortBy("pubDate");
        } else if (eventKey === "2") {
            setSortBy("reviewCount");
        } else if (eventKey === "3") {
            setSortBy("rank");
        }
    };
    

    return (
        <>
            <BookStyled.Container>
                <BookStyled.Wrap>
                    <div className="title-wrap">
                        <div className="text">
                            <h1>
                                <strong>인기도서</strong>
                            </h1>
                        </div>
                        <div className="button">
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={`${sortBy === "itemId" ? "기본 순" : sortBy === "pubDate" ? "출판일 순" : sortBy === "reviewCount" ? "리뷰 많은 순" : sortBy === "rank" ? "순위 순" : "가격"}`}
                                variant="secondary"
                                onSelect={handleSortBy}
                                style={{ marginTop: "10px" }}
                            >
                                <Dropdown.Item eventKey="1">출판일 순</Dropdown.Item>
                                <Dropdown.Item eventKey="2">리뷰 많은 순</Dropdown.Item>
                                <Dropdown.Item eventKey="3">순위 순</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <BookStyled.Content>
                        <div className="content-wrap">
                            {getSortedPosts().slice(0, numItemsToShow).map((post) => (
                                <BookStyled.Item className="content-item" key={post.itemId}>
                                    <div className="item_canvas">
                                        <div className="item_img">
                                            <img
                                                src={post.coverLargeUrl}
                                                alt={post.title}
                                            />
                                        </div>
                                    </div>
                                    <div className="item_info">
                                        <div className="info_row info_name">
                                            <a href="#!" className="info_title">
                                                {post.title}
                                            </a>
                                        </div>
                                        <div className="info_row">
                                            <span className="info_auth">
                                                {post.author}
                                            </span>
                                        </div>
                                        <div className="info_row info_readBox">
                                            <div className="info_desc">
                                                {post.description.length > 70
                                                    ? post.description.slice(
                                                            0,
                                                            70
                                                    ) + "..."
                                                    : post.description}
                                            </div>
                                        </div>
                                    </div>
                                </BookStyled.Item>
                            ))}
                        </div>
                    </BookStyled.Content>
                    <div className="middle">
                        {numItemsToShow < getSortedPosts().length && (
                            <Btn2 onClick={handleLoadMore}>더 보기</Btn2>
                        )}
                    </div>
                </BookStyled.Wrap>
            </BookStyled.Container>

            {/* <FirstImgStyled src={bookImg} alt="Top Image" height="500px" />
            <Container>
                <Button onClick={() => handleModeChange("신간도서")} >
                    <TextP color="white">신간도서 <FaArrowRight /></TextP>
                </Button>
                <Button onClick={() => handleModeChange("베스트셀러")} >
                    <TextP color="white">베스트셀러 <FaArrowRight /></TextP>
                </Button>
                <div style={{ overflow: "hidden" }}>
                    <SearchBooks
                        setSearchResults={setSearchResults}
                        setHasSearched={setHasSearched}
                    />
                    <HR height="0" margin="4rem 0" />
                    <TextH1 margin="0 auto 3rem 0"> 읽고싶은 책을 찾아보고 목록에 추가해보세요</TextH1>
                        { show && (
                                <>
                                    {mode === "베스트셀러" ? (
                                    <BestSellersList
                                        searchResults={searchResults}
                                        hasSearched={hasSearched}
                                    />
                                ) : (
                                    <NewBooksList
                                        searchResults={searchResults}
                                        hasSearched={hasSearched}
                                    />
                                )}
                            </>
                        )}
                </div>
            </Container> */}
        </>
    );
}
