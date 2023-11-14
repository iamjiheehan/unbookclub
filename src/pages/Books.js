import React, { useContext, useEffect, useState } from "react";

// 리덕스 임포트
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "store";

// 베스트셀러 데이터
import newBooks from "../data/newBooks.json";

//커스텀훅
import { useSearchBooks } from "hooks/useSearchBooks";

// 로그인 contextAPI
import AuthContext from "contexts/AuthContext";

// 스타일 컴포넌트 임포트
import * as BookStyled from "../styled-components/ListStyled";

import Button from "styled-components/ButtonStyled";

import { Btn2 } from "styled-components/BtnStyled";
import { FaShoppingCart } from "react-icons/fa";

export default function SearchBooks() {
    const { userObj } = useContext(AuthContext);
    const { searchResults } = useSearchBooks();

    useEffect(()=>{
        console.log(searchResults,searchResults.length,"북스에서보냄");
    })

    // 리덕스에 있는 데이터 가져오기.searchResults
    const addedBooks = useSelector((state) => state.book);

    // 디스패치 함수 호출
    const dispatch = useDispatch();

// 카트에 도서를 추가하는 함수
const handleAddToCart = (book) => {
    console.log("도서를 카트에 추가합니다:", book);

    // userObj가 null이면 alert를 띄우고 함수 종료
    if (!userObj) {
        alert("로그인이 필요한 기능입니다.");
        return;
    }

    if (addedBooks.find((addedBook) => addedBook.isbn === book.isbn)) {
        console.log('Book already in cart:', book.isbn);
        console.log("Now we have this", addedBooks);
        return;
    }

    dispatch(addBook(book));
    console.log("도서가 카트에 추가되었습니다:", book.isbn);
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
        return [...searchResults].sort((a, b) => {
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
                                <div className="content-item" key={result.isbn}>
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
                                                {result.authors}
                                            </p>
                                            <Button
                                                onClick={() =>
                                                    handleAddToCart(
                                                        result.itemId,
                                                        result.title,
                                                        result.authors,
                                                        result.thumbnail,
                                                        result.isbn
                                                    )
                                                }
                                                disabled={addedBooks.some(
                                                    (book) =>
                                                        book.isbn ===
                                                        result.isbn
                                                )}
                                            >
                                                {addedBooks.some(
                                                    (book) =>
                                                        book.isbn ===
                                                        result.isbn
                                                ) ? (
                                                    <p>추가된 도서</p>
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
