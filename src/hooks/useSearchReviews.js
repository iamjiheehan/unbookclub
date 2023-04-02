import { useState } from 'react';
import { dbService } from 'fBase';

export default function useSearchReviews() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (setSearchResults) => {
        setHasSearched(true);
    
        try {
            let query = dbService.collection('unBookClub');
            setSearchError("")
            if (searchTitle) {
                query = query.where('title', '<=', searchTitle);
            }
            if (searchAuthor) {
                query = query.where('author', '>=', searchAuthor).where('author', '<=', searchAuthor + '\uf8ff');
            }
            if (searchKeyword) {
                query = query.where('review', '>=', searchKeyword).where('review', '<=', searchKeyword + '\uf8ff');
            }
            const querySnapshot = await query.orderBy('createdAt', 'desc').limit(10).get();
            console.log(`Found ${querySnapshot.docs.length} documents`);
            const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSearchResults(results);
            setSearchError('');
            setSearchError(results.length === 0 ? "검색 결과가 없습니다." : "");
            
        } catch (error) {
            console.log(error);
            setSearchResults([]);
            setSearchError('검색 결과가 없습니다.');
        }
    };

    return {
        searchAuthor,
        setSearchAuthor,
        searchTitle,
        setSearchTitle,
        searchKeyword,
        setSearchKeyword,
        searchResults,
        handleSearch,
        searchError,
        setSearchResults,
        hasSearched,
        setHasSearched,
    };
    
}
