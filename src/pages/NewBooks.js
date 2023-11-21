// 도서 검색 게시판
import React, { useEffect, useState } from "react";

// 리덕스임포트
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "store";

// 베스트셀러 데이터
import newBooks from "../data/newBooks.json";


// 부트스트랩 라이브러리
import { Dropdown, DropdownButton } from "react-bootstrap";

// 스타일컴포넌트 임포트
import * as BookStyled from "../styled-components/ListStyled";

import Button from "styled-components/ButtonStyled";

import { Btn2 } from "styled-components/BtnStyled";
import { FaShoppingCart } from "react-icons/fa";


export default function NewBooks() {
    // 데이터 변수에 할당
    const posts = newBooks;
    // 리덕스에 있는 데이터 가져오기
    let addedBooks = useSelector((state) => state.book);
    // 디스패치 함수호출
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        //console.log(posts.length);
    }, [posts.length]);

    // 카트에 담을 속성들 파라미터로 설정
    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        // console.log(
        //     "Adding book to cart:",
        //     itemId,
        //     title,
        //     author,
        //     coverLargeUrl
        // );
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            // console.log("이미 추가된 도서:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        // console.log("카트에 담긴 책 id", itemId);
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
                                <strong>신간도서</strong>
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
                                <div className="content-item" key={post.itemId}>
                                    <BookStyled.Item className="item_canvas">
                                        <div className="item_img">
                                            <img
                                                src={post.coverLargeUrl}
                                                alt={post.title}
                                            />
                                        </div>
                                        <BookStyled.CartWrap>
                                            <p className="book-title">{post.title}</p>
                                            <p padding="1rem 0 0 0">{post.author}</p>
                                            <Button
                                                    onClick={() => handleAddToCart(post.itemId, post.title, post.author, post.coverLargeUrl)}
                                                    disabled={addedBooks.some((book) => book.itemId === post.itemId)}
                                                >
                                                {addedBooks.some((book) => book.itemId === post.itemId) ? (
                                                    "추가된 도서"
                                                    ) : (
                                                    <>
                                                        <div className="cart-wrap">
                                                        <FaShoppingCart /> <p className="cart-text">서재에 추가</p>
                                                        </div>
                                                    </>
                                                    )}
                                            </Button>
                                        </BookStyled.CartWrap>
                                    </BookStyled.Item>
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
                                </div>
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
        </>
    );
}
