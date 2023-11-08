// 독후감 게시판
import React, { useContext, useState } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import { SearchBoard } from "../components/Search";

// 이미지 임포트
import main from "../static/images/main-icon-03.webp";

// 스타일컴포넌트 임포트
import { SecondImgStyled } from "../styled-components/ImgStyled";

import * as BoardStyled from "../styled-components/BoardStyled";

import { Btn2 } from "styled-components/BtnStyled";
import Reviews from "components/Reviews";
import { useReviewForm } from "hooks/useReviewForm";

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [numReviewsToShow, setNumReviewsToShow] = useState(9);
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showUserReviewsOnly, setShowUserReviewsOnly] = useState(false);

    const handleLoadMore = () => {
        setNumReviewsToShow(numReviewsToShow + 9);
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
                        <SecondImgStyled src={main} alt="mainImage" />
                    </div>
                </div>
            </BoardStyled.Wrap>
            <div>
                <BoardStyled.Content className="content-container">
                    <div className="content-btn">
                        {userObj && (
                            <Btn2
                                onClick={handleShowUserReviewsOnly}
                                bgColor="rgb(51, 175, 233)"
                                border="1px solid rgb(51, 175, 233)"
                            >
                                {showUserReviewsOnly
                                    ? "모든 리뷰 보기"
                                    : "내 리뷰만 보기"}
                            </Btn2>
                        )}
                    </div>

                    <SearchBoard />
                    <div className="content-wrap">
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
                    </div>
                    {!hasSearched && numReviewsToShow < reviewList.length && (
                        <div className="seemore-wrap">
                            <Btn2
                                variant="dark"
                                onClick={handleLoadMore}
                                style={{ marginBottom: "4rem" }}
                            >
                                더 보기
                            </Btn2>
                        </div>
                    )}
                </BoardStyled.Content>
            </div>
        </>
    );
}
