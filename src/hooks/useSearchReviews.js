import { useContext, useState } from 'react';
import { useReviewForm } from '../hooks/useReviewForm';
import AuthContext from '../hooks/AuthContext';
import { dbService } from 'fBase';
export default function useSearchReviews() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    console.log("searchKeyword: ", searchKeyword);

    const handleSearch = async () => {
        setHasSearched(true);
        console.log("handleSearch works@@@@@@@@@@@@@@@@@@@@@");
        try {
            const querySnapshot = await dbService
            .collection('unBookClub')
            .where('review', '>=', searchKeyword)
            .where('review', '<=', searchKeyword + "\uf8ff")
            // .where('title', '>=', searchTitle)
            // .where('title', '<=', searchKeyword + "\uf8ff")
            .get();
            console.log(`Found ${querySnapshot.docs.length} documents`);
            const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setSearchResults(results);
            setSearchError('');

        } catch (error) {
            console.log(error);
            setSearchResults([]);
            setSearchError('검색 중 오류가 발생했습니다.');
        }
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
        hasSearched,
        setHasSearched,
    };
}
