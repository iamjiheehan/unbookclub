//검색 컴포넌트

import React, { useState ,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import DropdownBtn from "styled-components/DropDownBtnStyled";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";

import { FlexRow } from "styled-components/FlexStyled";
import FormStyled from "styled-components/FormStyled";
import { TextP } from "styled-components/TextStyled";

import { useLoadingContext, Loading } from "hooks/useLoading";
import useSearchReviews from "hooks/useSearchReviews";

import { kakaoSearch } from "api/searchApi";

function SearchBoard({ setSearchResults, setHasSearched }) {
    
    const {
        searchTitle,
        searchKeyword,
        setSearchTitle,
        setSearchKeyword,
        searchError,
        setSearchError,
        searchResults,
        handleSearch,
    } = useSearchReviews();
    
    const [searchMode, setSearchMode] = React.useState("키워드로 검색");
    const { startLoading, stopLoading } = useLoadingContext();
    
    console.log(searchResults);

    const handleSubmit = async (event) => {
        console.log("handleSubmit works");
        event.preventDefault();
        startLoading();
        await handleSearch(setSearchResults);
        stopLoading();
        setHasSearched(true);
    };

    const handleModeChange = (mode) => {
        setSearchMode(mode);
        if (mode === "키워드로 검색") {
        setSearchTitle("");
        } else {
        setSearchKeyword("");
        }
    };
    
    return (
        <Container>
            <Form style={{ display: "inline-block" }} onSubmit={handleSubmit}>
                <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
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
                            onClick={() => handleModeChange("키워드로 검색")}
                        >
                            키워드로 검색
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => handleModeChange("도서명으로 검색")}
                        >
                            도서명으로 검색
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div style={{ margin: "0 2rem" }}>
                    <FormStyled
                        type="text"
                        placeholder="키워드 혹은 도서명을 입력해주세요"
                        style={{ border: "none" }}
                        value={searchMode === "키워드로 검색" ? searchKeyword : searchTitle}
                        onChange={(e) => {
                            const { value } = e.target;
                            if (searchMode === "키워드로 검색") {
                                setSearchKeyword(value);
                            } else {
                                setSearchTitle(value);
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
                </FlexRow>
                </div>
            </Form>
            <Loading />
            {searchError && <TextP>{searchError}</TextP>}
        </Container>
    );
}

function SearchBooks() {
    console.log("SearchBooks rendered");
    const [searchTitle, setSearchTitle] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchError, setSearchError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    const [searchMode, setSearchMode] = React.useState("도서명으로 검색");
    const { startLoading, stopLoading } = useLoadingContext();
    const [books, setBooks] = useState([]);

// Search.js
    useEffect(() => {
        const fetchBooks = async () => {
        try {
            const { data } = await kakaoSearch({ query: 'some_search_term' });
            setBooks(data);
            console.log("fetchBooks");
        } catch (error) {
            console.error('Error fetching books:', error);
        }
        };
        fetchBooks();
    }, []); // Add an empty dependency array
    

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
            } catch (error) {
                console.error(error);
            }
        } else {
            // Add a condition to check if searchResults is not empty before setting it to an empty array
            if (searchResults.length > 0) {
                setSearchResults([]);
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
                            onClick={() => handleModeChange("도서명으로 검색")}
                        >
                            도서명으로 검색
                        </Dropdown.Item>
                        <Dropdown.Item
                            href="#"
                            onClick={() => handleModeChange("작가로 검색")}
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
                        value={searchMode === "도서명으로 검색" ? searchTitle : searchAuthor}
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
                    <Button
                        variant="dark"
                        type="submit"
                        style={{ borderRadius: "50px" }}
                    >
                        <FaSearch /> 검색
                    </Button>
                    </div>
                </FlexRow>
                </div>
            </Form>
            <Loading />
            {searchError && <TextP margin="1rem">{searchError}</TextP>}
            {searchResults.map(result => (
                <div key={result.isbn}>
                    <h3>{result.title}</h3>
                    <p>저자: {result.authors}</p>
                    <p>출판사: {result.publisher}</p>
                    <img src={result.thumbnail} alt={result.title} />
                </div>
                ))}
        </Container>
    );
}

const MemoizedSearchBooks = React.memo(SearchBooks);
export { SearchBoard, MemoizedSearchBooks as SearchBooks };


