// 독후감 게시판
import React, { useContext, useEffect, useState } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import { SearchBoard } from "../components/Search";
import Reviews from "../components/Reviews";
import ReactStars from "react-rating-stars-component";

// 커스텀 훅
import { useReviewForm } from "../hooks/useReviewForm";

// 이미지 임포트
import { Button } from "react-bootstrap";
import iconTop from "../static/images/menu-icon-01.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import main2 from "../static/images/main-01.webp";

// 스타일컴포넌트 임포트

import styled from "styled-components";

import BtnStyled from "../styled-components/ButtonStyled";
import HR from "styled-components/LineStyled";
import BlankStyled from "styled-components/BlankStyled";
import { InputLink } from "../styled-components/InputStyled";
import GridStyled from "../styled-components/GridStyled";
import {
    FirstImgStyled,
    SecondImgStyled,
} from "../styled-components/ImgStyled";

// -----------
import * as BoardStyled from "../styled-components/BoardStyled";
import { Btn2 } from "styled-components/BtnStyled";

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [numReviewsToShow, setNumReviewsToShow] = useState(12);
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showUserReviewsOnly, setShowUserReviewsOnly] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleLoadMore = () => {
        setNumReviewsToShow(numReviewsToShow + 12);
    };

    const handleShowUserReviewsOnly = () => {
        if (showUserReviewsOnly) {
            setHasSearched(false);
        } else {
            const filteredReviews = reviewList.filter(
                (review) => review.creatorId === userObj.uid
            );
            setSearchResults(filteredReviews);
            setHasSearched(true);
        }
        setShowUserReviewsOnly(!showUserReviewsOnly);
    };

    return (
        <>
            <BoardStyled.Wrap>
                <div className="main-banner">
                    <div className="main-banner-container">
                        <div className="main-banner-content">
                            <div className="wrap-button">
                                <Btn2 to="/create">리뷰 남기기</Btn2>
                            </div>
                        </div>
                        <SecondImgStyled src={main2} alt="mainImage" />
                    </div>
                </div>
            </BoardStyled.Wrap>
            <div>
                <BoardStyled.Content className="content-container">
                    <div className="content-wrap">
                        {/* <div className="content-item">
                            <div className="item_img">
                                <div className="item_canvas">
                                    <img
                                        src="https://image.yes24.com/goods/38827305/L"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="item_info">
                                <div className="info_row info_name">
                                    <a href="#!" className="info_title">
                                        죽여 마땅한 사람들
                                    </a>
                                </div>
                                <div className="info_row">
                                    <span className="info_auth">
                                        피터 스완슨 저/노진선 역 저
                                    </span>
                                </div>
                                <div className="info_row info_readBox">
                                    <div className="info_desc">
                                        뛰어난 구성과 매력적인 캐릭터로 살인의
                                        당위를 만들어내 독자를 홀려버리는
                                        무시무시한 흡인력. 주목받고 있는 신작
                                        『살려 마땅한 사람들』을 읽기 전, 그를
                                        최고의 베스트셀러 작가로 만든 이 책부터
                                        읽는 것이 마땅하다.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {reviewList.slice(0, numReviewsToShow).map((review) => (
                            <div className="content-item" key={review.id}>
                                <div className="item_img">
                                    <div className="item_canvas">
                                        <img
                                            src="https://image.yes24.com/goods/38827305/L"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="item_info">
                                    <div className="into_rating">
                                        <ReactStars
                                            count={5}
                                            // size={24}
                                            edit={false}
                                            value={review.selectedRating}
                                        />
                                    </div>
                                    <div className="info_row info_name">
                                        <a href="#!" className="info_title">
                                            {review.title}
                                        </a>
                                    </div>
                                    <div className="info_row">
                                        <span className="info_auth">
                                            {review.author}
                                        </span>
                                    </div>
                                    <div className="info_row info_readBox">
                                        <div className="info_desc">
                                            {review.review}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </BoardStyled.Content>
            </div>
            {/* <div>
                <GridStyled
                    rows="auto"
                    columns="repeat(3,minmax(0,1fr))"
                    margin="3rem"
                >
                    {reviewList.slice(0, numReviewsToShow).map((review) => (
                        <Reviews
                            key={review.id}
                            reviewObj={review}
                            isOwner={
                                userObj && review.creatorId === userObj.uid
                            }
                            rating={review.selectedRating}
                            bookTitle={review.title}
                            bookAuthor={review.author}
                        />
                    ))}
                </GridStyled>
                {!hasSearched && numReviewsToShow < reviewList.length && (
                    <Button
                        variant="dark"
                        onClick={handleLoadMore}
                        style={{ marginBottom: "4rem" }}
                    >
                        더 보기
                    </Button>
                )}
            </div> */}
        </>
    );
}
