import { useState } from 'react';
import { dbService } from 'fBase';

export default function useSearchReviews() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (setSearchResults,searchTitle, searchAuthor, searchKeyword) => {
        setHasSearched(true);
    
        try {
            let query = dbService.collection('unBookClub');
            setSearchError("")
            if (searchTitle) {
                query = query.where('title', '>=', searchTitle).where('title', '<=', searchTitle + "\uf8ff").orderBy('title');
            }
            if (searchAuthor) {
                query = query.where('author', '>=', searchAuthor).where('author', '<=', searchAuthor + "\uf8ff").orderBy('author');
            }
            if (searchKeyword) {
                query = query.where('review', '>=', searchKeyword).where('review', '<=', searchKeyword + "\uf8ff").orderBy('review');
            }
            const querySnapshot = await query.orderBy('createdAt', 'desc').limit(10).get();
            console.log(`Found ${querySnapshot.docs.length} documents`);
            const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSearchResults(results);
            setSearchError('');
            setSearchError(results.length === 0 ? "검색 결과가 없습니다." : "");
                setSearchTitle('');
                setSearchAuthor('');
                setSearchKeyword('');
        } catch (error) {
            console.log(error);
            setSearchResults([]);
            setSearchError('검색 결과가 없습니다.');
            setSearchTitle('');
            setSearchAuthor('');
            setSearchKeyword('');
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
