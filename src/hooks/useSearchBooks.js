import { useState, useContext, createContext } from 'react';


//contextAPI와 useHooks를 함께 작성
const SearchBooksResults = createContext();


// Provider 생성
export const SearchResultsProvider = ({ children }) => {

    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchBooksResults.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchBooksResults.Provider>
    );
};

// 컨텍스트 사용을 위한 Hook
export const useSearchBooks = () => {
    
    const context = useContext(SearchBooksResults);

    if (!context) {
        throw new Error(
            "useSearchResults must be used within a SearchResultsProvider"
        );
    }
    return context;
};
