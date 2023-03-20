import React, { useContext, useState } from 'react';
import { useReviewForm } from '../hooks/useReviewForm';
import AuthContext from '../hooks/AuthContext';

export default function useSearchReviews() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const filteredList = reviewList.filter((review) => {
        // Check if review title matches search title
        const titleMatch = review.title.toLowerCase().includes(searchTitle.toLowerCase());

        // Check if review text matches search keyword
        const keywordMatch = review.review.toLowerCase().includes(searchKeyword.toLowerCase());

        return titleMatch && keywordMatch;
        });

        setSearchResults(filteredList);
    };

    return {
        searchTitle,
        setSearchTitle,
        searchKeyword,
        setSearchKeyword,
        searchResults,
        handleSearch,
    };
}
