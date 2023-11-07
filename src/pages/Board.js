// 독후감 게시판
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import ReactStars from "react-rating-stars-component";

// 커스텀 훅
import { useReviewForm } from "../hooks/useReviewForm";
import useReviewEditor from "../hooks/useReviewEditor";

// 이미지 임포트
import main from "../static/images/main-icon-03.webp";

// 스타일컴포넌트 임포트
import { SecondImgStyled } from "../styled-components/ImgStyled";

import * as BoardStyled from "../styled-components/BoardStyled";
import { Btn2, Btn2Input } from "styled-components/BtnStyled";
import { BoardInput } from "styled-components/InputStyled";
import BackStyled from "styled-components/BackStyled";
import { FlexRow } from "styled-components/FlexStyled";

export default function Board({ reviewObj, isOwner, bookTitle, bookAuthor }) {
    // 로그인 상태와 사용자 정보를 가져오기 위한 컨텍스트 사용
    const { userObj } = useContext(AuthContext);

    // 사용자의 리뷰 목록을 가져오는 커스텀 훅 사용
    const { reviewList } = useReviewForm(userObj);

    // 화면에 표시할 리뷰 개수 관리를 위한 state
    const [numReviewsToShow, setNumReviewsToShow] = useState(12);

    // 검색 결과와 검색 여부를 관리하는 state
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    // 사용자가 자신의 리뷰만 볼 것인지 여부를 관리하는 state
    const [showUserReviewsOnly, setShowUserReviewsOnly] = useState(false);

    // 화면 상단으로 스크롤 여부를 관리하는 state
    const [disableScrollToTop, setDisableScrollToTop] = useState(false);

    // React Router의 navigate 함수를 사용하기 위한 변수
    const navigate = useNavigate();

    // 경고 메시지를 표시할지 여부를 관리하는 state
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    // 리뷰 편집을 위한 커스텀 훅 사용
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

    // 스크롤을 활용한 페이지 로딩 효과
    useEffect(() => {
        if (!disableScrollToTop) {
            window.scrollTo(0, 0);
        }
    }, [disableScrollToTop]);

    // 더 많은 리뷰를 로드하는 함수
    const handleLoadMore = () => {
        setNumReviewsToShow(numReviewsToShow + 12);
    };

    // 사용자 리뷰만 표시 여부를 토글하는 함수
    const handleShowUserReviewsOnly = () => {
        if (userObj.uid) {
            if (showUserReviewsOnly) {
                // 모든 리뷰 표시
                setHasSearched(false);
            } else {
                // 사용자의 리뷰만 검색 결과로 표시
                const filteredReviews = reviewList.filter(
                    (review) => review.creatorId === userObj.uid
                );
                setSearchResults(filteredReviews);
                setHasSearched(true);
            }
            // 사용자 리뷰만 표시 여부 토글
            setShowUserReviewsOnly(!showUserReviewsOnly);
            setDisableScrollToTop(true);
        } else {
            setIsAlertVisible(true);
            alert("로그인 해라");
            navigate("/signIn");
        }
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
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <BackStyled
                            padding="1rem"
                            margin="1rem"
                            bgRadius="30px"
                            bgShadow="0 4px 4px rgb(0 0 0 / 25%)"
                        >
                            <FlexRow>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    edit={true}
                                    value={reviewObj?.selectedRating}
                                    onChange={(newRating) =>
                                        setNewRating(newRating)
                                    }
                                />
                            </FlexRow>
                            <BoardInput
                                name="bookTitle"
                                value={newTitle}
                                onChange={onChange}
                                type="text"
                                placeholder="책 제목을 입력해주세요"
                                maxLength={200}
                                bgColor="transparent"
                            />
                            <BoardInput
                                name="bookAuthor"
                                value={newAuthor}
                                onChange={onChange}
                                type="text"
                                placeholder="작가 이름을 입력해주세요"
                                maxLength={200}
                                bgColor="transparent"
                            />
                            <BoardInput
                                name="newReview"
                                type="text"
                                placeholder="감상평을 입력해주세요"
                                value={newReview}
                                required
                                onChange={onChange}
                                bgColor="transparent"
                            />
                            <BoardInput
                                type="text"
                                placeholder="닉네임 변경이 가능합니다"
                                value={newNickname}
                                required
                                onChange={(event) =>
                                    setNewNickname(event.target.value)
                                }
                                bgColor="transparent"
                            />
                            {errorMessage && (
                                <p style={{ color: "red" }}>
                                    {errorMessage}
                                </p>
                            )}
                            <input
                                type="submit"
                                value="수정 완료"
                                bgColor="rgb(230, 126, 34)"
                                style={{ color: "white" }}
                                onClick={onSubmit}
                            />
                            <input
                                type="button"
                                value="취소"
                                onClick={onCancel}
                                bgColor="rgb(230, 126, 34)"
                                style={{ color: "white" }}
                            />
                        </BackStyled>
                    </form>
                </>
            ) : (
                <>
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
                                                        edit={false}
                                                        value={
                                                            review?.selectedRating
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
                                                {userObj &&
                                                    review.creatorId ===
                                                        userObj.uid && (
                                                        <>
                                                            {editing ? (
                                                                <>
                                                                    <Btn2Input
                                                                        type="submit"
                                                                        value="수정 완료"
                                                                        bgColor="rgb(230, 126, 34)"
                                                                        style={{
                                                                            color: "white",
                                                                        }}
                                                                        onClick={
                                                                            onSubmit
                                                                        }
                                                                    />
                                                                    <Btn2Input
                                                                        type="button"
                                                                        value="취소"
                                                                        onClick={
                                                                            onCancel
                                                                        }
                                                                    />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Btn2Input
                                                                        type="submit"
                                                                        value="수정"
                                                                        bgColor="rgb(230, 126, 34)"
                                                                        style={{
                                                                            color: "white",
                                                                        }}
                                                                        onClick={
                                                                            toggleEditing
                                                                        }
                                                                    />
                                                                    <Btn2Input
                                                                        type="button"
                                                                        value="삭제"
                                                                        onClick={
                                                                            onDeleteClick
                                                                        }
                                                                    />
                                                                </>
                                                            )}
                                                        </>
                                                    )}
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
            )}
        </>
    );
}
