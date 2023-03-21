import { useContext, useState } from 'react';
import { useReviewForm } from '../hooks/useReviewForm';
import AuthContext from '../hooks/AuthContext';

export default function useSearchReviews() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);


    const handleSearch = () => {
        setHasSearched(true);
        const filteredList = reviewList.filter((review) => {
            // Check if review title matches search title
            const titleMatch = (review.title?.toLocaleLowerCase() ?? '').includes(searchTitle.toLocaleLowerCase());
            // Check if review text matches search keyword
            const keywordMatch = (review.review?.toLocaleLowerCase() ?? '').includes(searchKeyword.toLocaleLowerCase());
            return titleMatch || keywordMatch;
        });
        
        if (filteredList.length === 0) {
            setSearchError('검색 결과가 없습니다.');
        } else {
            setSearchError('');
        }
        setSearchResults(filteredList);
        // console.log(filteredList);
    };
    

    return {
        searchTitle,
        setSearchTitle,
        searchKeyword,
        setSearchKeyword,
        searchResults,
        handleSearch,
        searchError,
        setSearchResults,
    };
}
