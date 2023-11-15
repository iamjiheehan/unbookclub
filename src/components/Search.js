//API 및 라이브러리 임포트
import React, { useState, useEffect, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addBook } from "store";
import AuthContext from "contexts/AuthContext";
import { kakaoSearch } from "api/searchApi";

// 컴포넌트 임포트
import Reviews from "./Reviews";

//부트스트랩 및 폰트 임포트
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// 스타일컴포넌트 임포트
import { FlexCol, FlexRow } from "styled-components/FlexStyled";
import FormStyled from "styled-components/FormStyled";
import { TextH2, TextP } from "styled-components/TextStyled";
import ButtonStyle from "styled-components/ButtonStyled";
import DropdownBtn from "styled-components/DropDownBtnStyled";
import GridStyled from "styled-components/GridStyled";
import { ImgStyled } from "styled-components/ImgStyled";
import * as SearchStyled from "styled-components/SearchStyled";

// 커스텀 훅
import { useLoadingContext, Loading } from "hooks/useLoading";
import useSearchReviews from "hooks/useSearchReviews";
import { useReview } from "hooks/useReview";
import { Link } from "react-router-dom";

function SearchBoard() {
    const {
        searchTitle,
        searchKeyword,
        searchAuthor,
        setSearchTitle,
        setSearchKeyword,
        setSearchAuthor,
        hasSearched,
        searchError,
        searchResults,
        handleSearch,
        setSearchResults,
        setHasSearched,
    } = useSearchReviews();

    const [searchMode, setSearchMode] = useState("키워드로 검색");
    const { startLoading, stopLoading } = useLoadingContext();

    // console.log(searchResults, "searchResults");

    const { userObj } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        // console.log("handleSubmit works");
        event.preventDefault();
        startLoading();
        await handleSearch(
            setSearchResults,
            searchTitle,
            searchAuthor,
            searchKeyword,
            setHasSearched
        );
        stopLoading();
        setHasSearched(true);
    };

    // console.log("searchResults changed from SearchBoard", searchResults);
    // console.log("hasSearched changed from SearchBoard", hasSearched);

    const handleModeChange = (mode) => {
        setSearchMode(mode);
        if (mode === "책제목으로 검색") {
            setSearchTitle("");
        } else if (mode === "작가로 검색") {
            setSearchAuthor("");
        } else {
            setSearchKeyword("");
        }
    };

    // useEffect(() => {
    //     console.log("searchResults changed from board", searchResults);
    //     console.log("hasSearched changed from board", hasSearched);
    // }, [searchResults, hasSearched]);

    return (
        <SearchStyled.Wrap>
            <form className="outForm" onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <div className="input-content">
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={DropdownBtn}
                                    variant="outline-secondary"
                                    id="dropdown-basic"
                                >
                                    {searchMode}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#"
                                        onClick={() =>
                                            handleModeChange("키워드로 검색")
                                        }
                                    >
                                        키워드로 검색
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#"
                                        onClick={() =>
                                            handleModeChange("책제목으로 검색")
                                        }
                                    >
                                        책제목으로 검색
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#"
                                        onClick={() =>
                                            handleModeChange("작가로 검색")
                                        }
                                    >
                                        작가로 검색
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div style={{ margin: "0 2rem" }}>
                            <input
                                className="searchInput"
                                type="text"
                                placeholder="리뷰를 검색해보세요"
                                style={{ border: "none" }}
                                value={
                                    searchMode === "키워드로 검색"
                                        ? searchKeyword
                                        : searchMode === "책제목으로 검색"
                                        ? searchTitle
                                        : searchAuthor
                                }
                                onChange={(e) => {
                                    const { value } = e.target;
                                    if (searchMode === "키워드로 검색") {
                                        setSearchKeyword(value);
                                    } else if (
                                        searchMode === "책제목으로 검색"
                                    ) {
                                        setSearchTitle(value);
                                    } else {
                                        setSearchAuthor(value);
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Button
                                variant="dark"
                                type="submit"
                                style={{ borderRadius: "50px" }}
                            >
                                <FaSearch /> 검색
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
            <Loading />
            {searchError && <TextP>{searchError}</TextP>}
            <GridStyled
                rows="auto"
                columns="repeat(3,minmax(0,1fr))"
                margin="3rem"
            >
                {searchResults.slice(0, searchResults.length).map((review) => (
                    <Reviews
                        key={review.id}
                        reviewObj={review}
                        isOwner={userObj && review.creatorId === userObj.uid}
                        rating={review.selectedRating}
                        bookTitle={review.title}
                        bookAuthor={review.author}
                    />
                ))}
            </GridStyled>
        </SearchStyled.Wrap>
    );
}

function SearchBooks({ searchResults, setSearchResults }) {
    // console.log("SearchBooks rendered");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchError, setSearchError] = useState(null);
    const [query, setQuery] = useState("");

    const [searchMode, setSearchMode] = useState("도서명으로 검색");
    const { startLoading, stopLoading } = useLoadingContext();

    const addedBooks = useSelector((state) => state.book);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(searchResults, "서치북스에서보냅니다");
        const fetchBooks = async () => {
            try {
                const { data } = await kakaoSearch({
                    query: "some_search_term",
                });
                setSearchResults(data.documents);
                // console.log("fetchBooks");
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    const handleAddToCart = (itemId, title, author, coverLargeUrl, isbn) => {
        // console.log(
        //     "Adding book to cart:",
        //     itemId,
        //     title,
        //     author,
        //     coverLargeUrl
        // );
        const bookToAdd = searchResults.find((book) => book.isbn === itemId);
        if (addedBooks.some((book) => book.isbn === bookToAdd.isbn)) {
            // console.log("Book already in cart:", bookToAdd.isbn);
            // console.log("Now we have this", addedBooks);
            return;
        }
        dispatch(
            addBook({
                ...bookToAdd,
                title,
                author,
                coverLargeUrl,
                isbn: bookToAdd.isbn,
            })
        );
    };

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
        <Container>
            <Form style={{ display: "inline-block" }} onSubmit={handleSearch}>
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5rem",
                        margin: "1.5rem 0 0 0",
                    }}
                >
                    <FlexRow alignItems="flex-start">
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={DropdownBtn}
                                    variant="outline-secondary"
                                    id="dropdown-basic"
                                >
                                    {searchMode}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#"
                                        onClick={() =>
                                            handleModeChange("도서명으로 검색")
                                        }
                                    >
                                        도서명으로 검색
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#"
                                        onClick={() =>
                                            handleModeChange("작가로 검색")
                                        }
                                    >
                                        작가로 검색
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div style={{ margin: "0 2rem" }}>
                            <FormStyled
                                type="text"
                                placeholder="도서명 혹은 작가를 입력해주세요"
                                style={{ border: "none" }}
                                value={
                                    searchMode === "도서명으로 검색"
                                        ? searchTitle
                                        : searchAuthor
                                }
                                onChange={(e) => {
                                    const { value } = e.target;
                                    if (searchMode === "작가로 검색") {
                                        setSearchAuthor(value);
                                    } else {
                                        setSearchTitle(value);
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Link to="/books">
                                <Button
                                    variant="dark"
                                    type="submit"
                                    style={{ borderRadius: "50px" }}
                                >
                                    <FaSearch /> 검색
                                </Button>
                            </Link>
                        </div>
                    </FlexRow>
                </div>
            </Form>
            <Loading />
            {searchResults.length === 0 && <TextP> {searchError} </TextP>}
            {searchResults.map((result) => (
                <FlexRow
                    key={result.isbn}
                    alignItems="center"
                    justify="flex-start"
                    margin="2rem"
                >
                    <div>
                        <ImgStyled
                            src={result.thumbnail}
                            alt={result.title}
                            width="250px"
                            bgShadow="0 0 10px 0 rgba(0, 0, 0, 0.5)"
                        />
                    </div>
                    <div>
                        <FlexCol
                            alignItems="flex-start"
                            margin="2rem"
                            wrap="nowrap"
                        >
                            <TextH2>{result.title}</TextH2>
                            <TextP padding="1rem 0">{result.authors}</TextP>
                            <TextP textAlign="left">{result.contents}</TextP>
                            <ButtonStyle
                                onClick={() =>
                                    handleAddToCart(
                                        result.isbn,
                                        result.title,
                                        result.authors,
                                        result.thumbnail
                                    )
                                }
                                disabled={addedBooks.some(
                                    (book) => book.isbn === result.isbn
                                )}
                            >
                                {addedBooks.some(
                                    (book) => book.isbn === result.isbn
                                ) ? (
                                    <p>추가된 도서</p>
                                ) : (
                                    <>
                                        <FaShoppingCart /> 읽을 목록에 추가하기
                                    </>
                                )}
                            </ButtonStyle>
                        </FlexCol>
                    </div>
                </FlexRow>
            ))}
        </Container>
    );
}

// const MemoizedSearchBooks = React.memo(SearchBooks);
// export { SearchBoard, MemoizedSearchBooks as SearchBooks };
export { SearchBooks, SearchBoard };
