import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoSearch } from 'api/searchApi';

export default function useSearchBook() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const getBooks = async () => {
        try {
            if (search === "") {
                setBooks([]);
            } else {
                const params = {
                    query: search,
                    size: 45,
                    target: "title"
                };
                const result = await kakaoSearch(params);
                if (result) {
                    navigate('/create', { state: { books: result.data.documents } });
                } else {
                    console.log('fail');
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // input 요소에 입력된 값을 상태에 설정하는 함수
    const handleInputChange = (event) => {
        setSearch(event.target.value); // 검색어 설정
    }

    return {
        books,
        getBooks,
        handleInputChange
    };
}
