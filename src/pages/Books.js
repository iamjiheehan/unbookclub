import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 리덕스 임포트
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "store";

// 베스트셀러 데이터
import newBooks from "../data/newBooks.json";

// 부트스트랩 라이브러리
import { Dropdown, DropdownButton } from "react-bootstrap";

// 스타일 컴포넌트 임포트
import * as BookStyled from "../styled-components/ListStyled";

import Button from "styled-components/ButtonStyled";

import { Btn2 } from "styled-components/BtnStyled";
import { FaShoppingCart } from "react-icons/fa";

export default function SearchBooks({ searchResults, setSearchResults }) {
    useEffect(() => {
        console.log("Books.js 검색 결과:", Array.isArray(searchResults));
    });

    // 데이터 변수에 할당
    const posts = newBooks;

    // 리덕스에 있는 데이터 가져오기.searchResults
    const addedBooks = useSelector((state) => state.book);

    // 디스패치 함수 호출
    const dispatch = useDispatch();

    // 카트에 도서를 추가하는 함수
    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        console.log(
            "도서를 카트에 추가합니다:",
            itemId,
            title,
            author,
            coverLargeUrl
        );
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            console.log("이미 카트에 있는 도서입니다:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        console.log("도서가 카트에 추가되었습니다:", itemId);
    };

    // 한 번에 보여줄 아이템 개수 설정
    const itemsPerRow = 4;

    // 초기값이 3행이 보이도록 설정
    const [numItemsToShow, setNumItemsToShow] = useState(itemsPerRow * 3);

    const handleLoadMore = () => {
        setNumItemsToShow(numItemsToShow + itemsPerRow * 3);
    };

    // 기본 정렬 기준을 pubDate로 설정
    const [sortBy, setSortBy] = useState("pubDate");

    // 게시물을 정렬하는 함수
    const sortPosts = (sortBy) => {
        return [...posts].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
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
        <BookStyled.Container>
            <BookStyled.Wrap>
                {searchResults && searchResults.length > 0 && (
                    <div className="title-wrap">
                        <div className="text middle">
                            <h1>
                                <strong>도서 검색 결과</strong>
                            </h1>
                        </div>
                        <div className="button">
                            {/* <DropdownButton
                                id="dropdown-basic-button"
                                title={
                                    sortBy === "pubDate"
                                        ? "출판일 순"
                                        : sortBy === "reviewCount"
                                        ? "리뷰 많은 순"
                                        : sortBy === "rank"
                                        ? "순위 순"
                                        : "기본 순"
                                }
                                variant="secondary"
                                onSelect={handleSortBy}
                                style={{ marginTop: "10px" }}
                            >
                                <Dropdown.Item eventKey="pubDate">
                                    출판일 순
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="reviewCount">
                                    리뷰 많은 순
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="rank">
                                    순위 순
                                </Dropdown.Item>
                            </DropdownButton> */}
                        </div>
                    </div>
                )}
                <BookStyled.Content>
                    <div className="content-wrap">
                        {searchResults && searchResults.length > 0 ? (
                            searchResults.map((result) => (
                                <div
                                    className="content-item"
                                    key={result.itemId}
                                >
                                    <BookStyled.Item className="item_canvas">
                                        <div className="item_img">
                                            <img
                                                src={result.thumbnail}
                                                alt={result.title}
                                            />
                                        </div>
                                        <BookStyled.CartWrap>
                                            <p className="book-title">
                                                {result.title}
                                            </p>
                                            <p
                                                style={{
                                                    padding: "1rem 0 0 0",
                                                }}
                                            >
                                                {result.author}
                                            </p>
                                            <Button
                                                onClick={() =>
                                                    handleAddToCart(
                                                        result.itemId,
                                                        result.title,
                                                        result.author,
                                                        result.coverLargeUrl
                                                    )
                                                }
                                                disabled={addedBooks.some(
                                                    (book) =>
                                                        book.itemId ===
                                                        result.itemId
                                                )}
                                            >
                                                {addedBooks.some(
                                                    (book) =>
                                                        book.itemId ===
                                                        result.itemId
                                                ) ? (
                                                    "추가된 도서"
                                                ) : (
                                                    <div className="cart-wrap">
                                                        <FaShoppingCart />{" "}
                                                        <p className="cart-text">
                                                            서재에 추가
                                                        </p>
                                                    </div>
                                                )}
                                            </Button>
                                        </BookStyled.CartWrap>
                                    </BookStyled.Item>
                                    <div className="item_info">
                                        <div className="info_row info_name">
                                            <a href="#!" className="info_title">
                                                {result.title}
                                            </a>
                                        </div>
                                        <div className="info_row">
                                            <span className="info_auth">
                                                {result.authors}
                                            </span>
                                        </div>
                                        <div className="info_row info_readBox">
                                            <div className="info_desc">
                                                {result.contents
                                                    ? result.contents.length >
                                                        70
                                                            ? result.contents.slice(
                                                                0,
                                                                70
                                                            ) + "..."
                                                        : result.contents
                                                    : "No description available"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <BookStyled.Warning>
                                <div className="warning-box">
                                    <h5>검색 결과가 없습니다.</h5>
                                </div>
                            </BookStyled.Warning>
                            // 검색 결과가 없는 경우 메시지를 표시
                        )}
                        
                    </div>
                    {searchResults && searchResults.length > 0 && (
                    <div className="middle">
                        {numItemsToShow < getSortedPosts().length && (
                            <Btn2 onClick={handleLoadMore}>더 보기</Btn2>
                        )}
                    </div>
                )}
                </BookStyled.Content>
            </BookStyled.Wrap>
        </BookStyled.Container>
    );
}
