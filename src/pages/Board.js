// 독후감 게시판
import React, { useContext, useEffect, useState } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import ReactStars from "react-rating-stars-component";

// 커스텀 훅
import { useReviewForm } from "../hooks/useReviewForm";
import useReviewEditor from "../hooks/useReviewEditor";

// 이미지 임포트
import main2 from "../static/images/main-01.webp";

// 스타일컴포넌트 임포트
import { SecondImgStyled } from "../styled-components/ImgStyled";

import * as BoardStyled from "../styled-components/BoardStyled";
import { Btn2, Btn2Input, Btn3, BtnInput } from "styled-components/BtnStyled";

export default function Board({ reviewObj, isOwner, bookTitle, bookAuthor }) {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [numReviewsToShow, setNumReviewsToShow] = useState(12);
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showUserReviewsOnly, setShowUserReviewsOnly] = useState(false);
    const [disableScrollToTop, setDisableScrollToTop] = useState(false);

    const {
        editing,
        errorMessage,
        newReview,
        newNickname,
        setNewNickname,
        newTitle,
        newAuthor,
        onDeleteClick,
        toggleEditing,
        onSubmit,
        onCancel,
        onChange,
        newRating,
        setNewRating,
    } = useReviewEditor(reviewObj);

    useEffect(() => {
        if (!disableScrollToTop) {
            window.scrollTo(0, 0);
        }
    }, [disableScrollToTop]);

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
        setDisableScrollToTop(true);
    };

    return (
        <>
            {editing ? (
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
                            <div className="content-btn">
                                <Btn2
                                    onClick={handleShowUserReviewsOnly}
                                    bgColor="rgb(51, 175, 233)"
                                    border="1px solid rgb(51, 175, 233)"
                                >
                                    {showUserReviewsOnly
                                        ? "모든 리뷰 보기"
                                        : "내 리뷰만 보기"}
                                </Btn2>
                            </div>
                            <div className="content-wrap">
                                {reviewList
                                    .slice(0, numReviewsToShow)
                                    .map((review) => (
                                        <div
                                            className="content-item"
                                            key={review.id}
                                        >
                                            <div className="item_info">
                                                <div className="into_rating">
                                                    <ReactStars
                                                        count={5}
                                                        // size={24}
                                                        edit={false}
                                                        value={
                                                            review.selectedRating
                                                        }
                                                    />
                                                </div>
                                                <div className="info_row">
                                                    <span className="info_title">
                                                        {review.title}
                                                    </span>
                                                </div>
                                                <div className="info_row">
                                                    <span className="info_auth">
                                                        {review.author}
                                                    </span>
                                                </div>
                                                <div className="info_row info_date">
                                                    <div className="info_desc">
                                                        {review.createdAt}
                                                    </div>
                                                </div>
                                                <div className="info_row info_readBox">
                                                    <div className="info_desc">
                                                        {review &&
                                                            review.review}
                                                    </div>
                                                </div>
                                            </div>
                                            {errorMessage && (
                                                <p style={{ color: "red" }}>
                                                    {errorMessage}
                                                </p>
                                            )}
                                            <div className="btn-wrap">
                                                <Btn2Input
                                                    type="submit"
                                                    value="수정 완료"
                                                    bgColor="rgb(230, 126, 34)"
                                                    style={{ color: "white" }}
                                                    onClick={onSubmit}
                                                />
                                                <Btn2Input
                                                    type="button"
                                                    value="취소"
                                                    onClick={onCancel}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {!hasSearched &&
                                numReviewsToShow < reviewList.length && (
                                    <Btn2
                                        variant="dark"
                                        onClick={handleLoadMore}
                                        style={{ marginBottom: "4rem" }}
                                    >
                                        더 보기
                                    </Btn2>
                                )}
                        </BoardStyled.Content>
                    </div>
                </>
            ) : (
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
                            <div className="content-btn">
                                <Btn2
                                    onClick={handleShowUserReviewsOnly}
                                    bgColor="rgb(51, 175, 233)"
                                    border="1px solid rgb(51, 175, 233)"
                                >
                                    {showUserReviewsOnly
                                        ? "모든 리뷰 보기"
                                        : "내 리뷰만 보기"}
                                </Btn2>
                            </div>
                            <div className="content-wrap">
                                {reviewList
                                    .slice(0, numReviewsToShow)
                                    .map((review) => (
                                        <div
                                            className="content-item"
                                            key={review.id}
                                        >
                                            <div className="item_info">
                                                <div className="into_rating">
                                                    <ReactStars
                                                        count={5}
                                                        // size={24}
                                                        edit={false}
                                                        value={
                                                            review.selectedRating
                                                        }
                                                    />
                                                </div>
                                                <div className="info_row">
                                                    <span className="info_title">
                                                        {review.title}
                                                    </span>
                                                </div>
                                                <div className="info_row">
                                                    <span className="info_auth">
                                                        {review.author}
                                                    </span>
                                                </div>
                                                <div className="info_row info_date">
                                                    <div className="info_desc">
                                                        {review.createdAt}
                                                    </div>
                                                </div>
                                                <div className="info_row info_readBox">
                                                    <div className="info_desc">
                                                        {review &&
                                                            review.review}
                                                    </div>
                                                </div>
                                            </div>
                                            {isOwner && (
                                                <div className="btn-wrap">
                                                    <Btn2Input
                                                        type="submit"
                                                        value="수정"
                                                        bgColor="rgb(230, 126, 34)"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                        onClick={toggleEditing}
                                                    />
                                                    <Btn2Input
                                                        type="button"
                                                        value="삭제"
                                                        onClick={onDeleteClick}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                            {!hasSearched &&
                                numReviewsToShow < reviewList.length && (
                                    <Btn2
                                        variant="dark"
                                        onClick={handleLoadMore}
                                        style={{ marginBottom: "4rem" }}
                                    >
                                        더 보기
                                    </Btn2>
                                )}
                        </BoardStyled.Content>
                    </div>
                </>
            )}
        </>
    );
}
