import React from 'react'
import { useState } from 'react'
//Make a search Logic with keywords and book title  

const [searchTitle, setSearchTitle] = useState("");
const [searchKeyword, setSearchKeyword] = useState("");
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
}


export default function useSearchReviews() {
    return (
        <div>useSearchReviews</div>
    )
}

