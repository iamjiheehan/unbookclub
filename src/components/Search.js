//검색 컴포넌트

import React, { useState ,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonStyle from "styled-components/ButtonStyled";
import { Container } from "react-bootstrap";
import DropdownBtn from "styled-components/DropDownBtnStyled";
import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";

import { FlexCol, FlexRow } from "styled-components/FlexStyled";
import FormStyled from "styled-components/FormStyled";
import { TextH1, TextH2, TextP } from "styled-components/TextStyled";

import { useLoadingContext, Loading } from "hooks/useLoading";
import useSearchReviews from "hooks/useSearchReviews";

import { kakaoSearch } from "api/searchApi";
import ImgStyled from "styled-components/ImgStyled";

import { FaShoppingCart } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { addBook } from 'store';


function SearchBoard({ setSearchResults, setHasSearched }) {
    
    const {
        searchTitle,
        searchKeyword,
        setSearchTitle,
        setSearchKeyword,
        setSearchAuthor,
        searchError,
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
        } else if( mode === "책제목으로 검색" ){
        setSearchAuthor("");
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
                            onClick={() => handleModeChange("책제목으로 검색")}
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
                        placeholder="키워드 혹은 도서명을 입력해주세요"
                        style={{ border: "none" }}
                        value={searchMode === "키워드로 검색" ? searchKeyword : searchTitle}
                        onChange={(e) => {
                            const { value } = e.target;
                            if (searchMode === "키워드로 검색") {
                                setSearchKeyword(value);
                            } else if(searchMode === "책제목으로 검색"){
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

    const addedBooks = useSelector((state) => state.book);
    const dispatch = useDispatch();


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
      }, []); // Add an empty dependency array
    

    const handleAddToCart = (itemId, title, author, coverLargeUrl, isbn) => {
        console.log('Adding book to cart:', itemId, title, author, coverLargeUrl);
        const bookToAdd = searchResults.find((book) => book.isbn === itemId);
        if (addedBooks.some((book) => book.isbn === bookToAdd.isbn)) {
            console.log('Book already in cart:', bookToAdd.isbn);
            console.log("Now we have this", addedBooks);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl, isbn: bookToAdd.isbn }));
        
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
            {searchResults.length===0 && (
                <TextP> {searchError} </TextP>
            )}
            {searchResults.map(result => (
                <FlexRow key={result.isbn} alignItems="center" justify="flex-start" margin="2rem">
                    <div>
                        <ImgStyled src={result.thumbnail} alt={result.title} width="250px" bgShadow="0 0 10px 0 rgba(0, 0, 0, 0.5)" />
                    </div>   
                    <div>
                        <FlexCol alignItems="flex-start" margin="2rem" wrap="nowrap">
                            <TextH2>{result.title}</TextH2>
                            <TextP padding="1rem 0">{result.authors}</TextP>
                            <TextP textAlign="left">{result.contents}</TextP>
                            <ButtonStyle
                                onClick={() => handleAddToCart(result.isbn, result.title, result.authors, result.thumbnail)}
                                disabled={addedBooks.some((book) => book.isbn === result.isbn)}
                                >
                                {addedBooks.some((book) => book.isbn === result.isbn) ? (
                                "추가된 도서"
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

const MemoizedSearchBooks = React.memo(SearchBooks);
export { SearchBoard, MemoizedSearchBooks as SearchBooks };


