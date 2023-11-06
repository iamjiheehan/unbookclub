//리뷰작성 게시판
import React, { useContext, useEffect, useState } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import { SearchBooks } from "../components/Search";
import StarRating from "../components/StarRating";
import { TextH1 } from "../styled-components/TextStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";
import { FlexCol, FlexRow } from "../styled-components/FlexStyled";

// 커스텀 훅
import { useReviewForm } from "../hooks/useReviewForm";
import { useLoadingContext } from "hooks/useLoading";

//API 임포트
import { kakaoSearch} from "api/searchApi";

// 스타일컴포넌트 임포트
import * as CreateStyled from "../styled-components/CreateStyled";

// 이미지 임포트
import { Container } from "react-bootstrap";
import image from "../static/images/book-report.webp";
import { ImgStyled } from "../styled-components/ImgStyled";
import { Btn2 } from "styled-components/BtnStyled";
import useBookSearch from "hooks/useBookSearch";
import { useLocation } from "react-router-dom";

export default function Create() {
    const { state } =useLocation();
    const { userObj } = useContext(AuthContext);
    const {
        bookAuthor,
        setbookTitle,
        inputReview,
        onSubmit,
        onChange,
        bookTitle,
        onRatingSelected,
    } = useReviewForm(userObj);

    const {
        books,
        getBooks,
        handleInputChange
    } = useBookSearch();

    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");


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
                <div className="img-canvas">
                    <img
                        src="https://image.aladin.co.kr/product/32710/47/cover200/k492936872_1.jpg?RS=134"
                        alt=""
                    />
                </div>
                <div className="input-wrap">
                    <input
                        className="title"
                        name="bookTitle"
                        value={bookTitle}
                        onChange={(e) => {
                            onChange(e);
                            handleInputChange(e);
                        }}
                        type="text"
                        placeholder="책 제목을 입력해주세요"
                        maxLength={200}
                    />
                    <div className="result" id="result-title">
                        {books.map((result, index) => (
                            <div key={index} className="result-item">
                                <div className="result-img">
                                    <img
                                        src={result.thumbnail}
                                        alt={result.title}
                                    />
                                </div>
                                <div className="result-info">
                                    <p className="result-title">
                                        {result.title}
                                    </p>
                                    <p className="result-author">
                                        {result.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="input-wrap">
                    <input
                        className="author"
                        name="bookAuthor"
                        value={bookAuthor}
                        onChange={onChange}
                        type="text"
                        placeholder="작가 이름을 입력해주세요"
                        maxLength={200}
                    />
                    <div className="result" id="result-author">
                        <div className="result-img">
                            <img
                                src="https://image.aladin.co.kr/product/32710/47/cover200/k492936872_1.jpg?RS=134"
                                alt=""
                            />
                        </div>
                        <div className="result-info">
                            <p className="result-title">책제목</p>
                            <p className="result-author">작가이름</p>
                        </div>
                    </div>
                </div>
                <textarea
                    className="review"
                    name="inputReview"
                    value={inputReview}
                    onChange={onChange}
                    type="text"
                    placeholder="감상평을 입력해주세요"
                />
                <Btn2 type="submit" className="btn">
                    게시하기
                </Btn2>
            </form>
        </CreateStyled.Wrap>
    );
}
