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
import { useLoadingContext} from "hooks/useLoading";

//API 임포트
import { kakaoSearch } from "api/searchApi";

// 스타일컴포넌트 임포트
import * as CreateStyled from "../styled-components/CreateStyled";

// 이미지 임포트
import { Container } from "react-bootstrap";
import image from "../static/images/book-report.webp";
import { ImgStyled } from "../styled-components/ImgStyled";
import { Btn2 } from "styled-components/BtnStyled";

export default function Board() {
    const { userObj } = useContext(AuthContext);
    const {
        inputReview,
        onSubmit,
        onChange,
        bookTitle,
        bookAuthor,
        onRatingSelected,
    } = useReviewForm(userObj);

    const [searchMode, setSearchMode] = React.useState("도서명으로 검색");
    const [searchTitle, setSearchTitle] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchError, setSearchError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');

    const { startLoading, stopLoading } = useLoadingContext();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const { data } = await kakaoSearch({ query: 'some_search_term' });
                setSearchResults(data.documents);
                console.log('fetchBooks');
                } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchError(null);
        startLoading();
        let params = {
          sort: "accuracy", // accuracy | recency 정확도 or 최신
          page: 1, // 페이지번호
          size: 10, // 한 페이지에 보여 질 문서의 개수
        };
        let queryParam = "";
        if (searchMode === "도서명으로 검색") {
            queryParam = searchTitle;
        } else {
            queryParam = searchAuthor;
        }
        if (queryParam) {
            params.query = queryParam;
            setQuery(queryParam);
            try {
                const { data } = await kakaoSearch(params); // api 호출
                console.log(data);
                const searchResults = data.documents;
                setSearchResults(searchResults);
                if (searchResults.length === 0) {
                setSearchError("검색 결과가 없습니다.");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            if (searchResults.length > 0) {
                setSearchResults([]);
            } else if (searchResults.length === 0) {
                setSearchError("검색어를 입력해주세요");
            }
        }
    stopLoading();
    };
    
    const handleModeChange = (mode) => {
        setSearchMode(mode);
        if (mode === "도서명으로 검색") {
            setSearchTitle("");
        } else {
            setSearchAuthor("");
        }
    };


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
                    <img src="https://image.aladin.co.kr/product/32710/47/cover200/k492936872_1.jpg?RS=134" alt=""/>
                </div>
                <div className="input-wrap">
                    <input
                        className="title"
                        name="bookTitle"
                        value={bookTitle}
                        onChange={onChange}
                        type="text"
                        placeholder="책 제목을 입력해주세요"
                        maxLength={200}
                    />
                    <div className="result">
                        <div className="result-img">
                            <img src="https://image.aladin.co.kr/product/32710/47/cover200/k492936872_1.jpg?RS=134" alt=""/>
                        </div>
                        <div className="result-info">
                            <p className="result-title">책제목</p>
                            <p className="result-author">작가이름</p>
                        </div>
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
                    <div className="result">
                        <div className="result-img">
                            <img src="https://image.aladin.co.kr/product/32710/47/cover200/k492936872_1.jpg?RS=134" alt=""/>
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
            {/* <form onSubmit={onSubmit}>
                    <FlexCol margin="2rem">
                    <FlexRow alignItems="baseline">
                        <StarRating totalStars={5} onRatingSelected={onRatingSelected} />
                    </FlexRow>
                    <BoardInput
                        name="bookTitle"
                        value={bookTitle}
                        onChange={onChange}
                        type="text"
                        placeholder="책 제목을 입력해주세요"
                        maxLength={200}
                        margin="auto"
                    />
                    <BoardInput
                        name="bookAuthor"
                        value={bookAuthor}
                        onChange={onChange}
                        type="text"
                        placeholder="작가 이름을 입력해주세요"
                        maxLength={200}
                        margin="auto"
                    />
                    <BoardInput
                        name="inputReview"
                        value={inputReview}
                        onChange={onChange}
                        type="text"
                        placeholder="감상평을 입력해주세요"
                        margin="auto"
                        height="25rem"
                        overflow="auto"
                    />
                    <Input type="submit" value="게시하기" margin="1.5rem auto 5rem auto" />
                    </FlexCol>
                </form> */}
        </CreateStyled.Wrap>
    );
}
