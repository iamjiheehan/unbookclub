//리뷰작성 게시판
import React, { useContext } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import StarRating from "../components/StarRating";

// 커스텀 훅
import { useReview } from "../hooks/useReview";

// 스타일컴포넌트 임포트
import * as CreateStyled from "../styled-components/CreateStyled";

// 이미지 임포트
import { BtnInput } from "styled-components/BtnStyled";

export default function Create() {

    const { userObj } = useContext(AuthContext);
    const {
    inputReview,
    onSubmit,
    onChange,
    bookTitle,
    bookAuthor,
    onRatingSelected,
    } = useReview(userObj);


    return (
        <CreateStyled.Wrap>
            <h1>
                <strong>리뷰 남기기</strong>
            </h1>
            <form onSubmit={onSubmit}>
                <StarRating
                    className="rating"
                    totalStars={5}
                    onRatingSelected={onRatingSelected}
                />
                <input
                    className="title"
                    name="bookTitle"
                    value={bookTitle}
                    onChange={onChange}
                    type="text"
                    placeholder="책 제목을 입력해주세요"
                    maxLength={200}
                />
                <input
                    className="author"
                    name="bookAuthor"
                    value={bookAuthor}
                    onChange={onChange}
                    type="text"
                    placeholder="작가 이름을 입력해주세요"
                    maxLength={200}
                />
                <textarea
                    className="review"
                    name="inputReview"
                    value={inputReview}
                    onChange={onChange}
                    type="text"
                    placeholder="감상평을 입력해주세요"
                />
                <div className="btn-wrap">
                    <BtnInput type="submit" value="게시하기" />
                </div>
            </form>
        </CreateStyled.Wrap>
    );
}
