import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import DropdownBtn from 'styled-components/DropDownBtnStyled';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaSearch } from 'react-icons/fa';
import { FlexRow } from 'styled-components/FlexStyled';
import FormStyled from 'styled-components/FormStyled';

import useSearchReviews from 'hooks/useSearchReviews';

export default function Search({setHasSearched, searchResults, setSearchResults,handleSearch,}) {
    const [searchTitle, setSearchTitle] = React.useState('');
    const [searchKeyword, setSearchKeyword] = React.useState('');
    const [searchMode, setSearchMode] = React.useState('키워드로 검색');
    const [searchError, setSearchError] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
        setHasSearched(true);
    };

    const handleModeChange = (mode) => {
        setSearchMode(mode);
        if (mode === '키워드로 검색') {
            setSearchTitle('');
        } else {
            setSearchKeyword('');
        }
    };

    return (
        <Container>
        <Form style={{ display: 'inline-block' }} onSubmit={handleSubmit}>
            <div style={{ border: '1px solid #ccc', borderRadius: '50px', display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
            <FlexRow alignItems='flex-start'>
                <div>
                <Dropdown>
                    <Dropdown.Toggle as={DropdownBtn} variant='outline-secondary' id='dropdown-basic'>
                        {searchMode}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href='#' onClick={() => handleModeChange('키워드로 검색')} >
                            키워드로 검색
                        </Dropdown.Item>
                        <Dropdown.Item href='#' onClick={() => handleModeChange('도서명으로 검색')} >
                            도서명으로 검색
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div style={{ margin: '0 2rem' }}>
                <FormStyled
                    type='text'
                    placeholder='키워드 혹은 도서명을 입력해주세요'
                    style={{ border: 'none' }}
                    value={searchTitle || searchKeyword}
                    onChange={(e) => {
                    if (searchTitle !== '') {
                        setSearchTitle(e.target.value);
                        } else {
                            setSearchKeyword(e.target.value);
                        }
                    }}
                />
                </div>
                <div>
                <Button variant='dark' type='submit' style={{ borderRadius: '50px' }}>
                    <FaSearch /> 검색
                </Button>
                </div>
            </FlexRow>
            </div>
        </Form>
        {searchError && <p className="error-message">{searchError}</p>}
        </Container>
    );
}
