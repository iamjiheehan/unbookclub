##  📍 React Project - The Unbookclub | 언북클럽

##### React + Javascript  온라인 북클럽 사이트

## 🖥 프로젝트 소개

##### 비대면을 의미하는 영단어 Untact와 북클럽을 합친 단어인 UnbookClub으로 프로젝트명으로 했습니다. </br> 필요한 기능만 넣은 심플한 웹사이트로서 누구나 쉽게 서평을 남길 수 있는것을 목표로 한 프로젝트입니다.


##  📄 화면 구성

- ### 메인화면 </br>

    ##### 홈페이지 소개, 강점 소개, 신간도서와 베스트셀러 소개
    
- ### 독후감 게시판</br>
    - #### 글쓰기 메뉴 바로가기
    - #### 내가 쓴 리뷰보기
    - #### 키워드, 책제목, 작가를 이용한 검색 기능
    
- ### 도서 검색</br>
    - #### 신간도서 검색 기능
    - #### 베스트셀러 검색 기능
    
- ### 독후감 가이드</br>
    - ##### 텍스트로 이루어진 독후감 가이드
    
- ### 마이페이지</br>
  -  ##### 닉네임 변경하기
   - #### 작성 리뷰목록 보기
    

### ✔The Unbookclub 프로젝트로 진행한 계기
- ##### 디자인 : https://bookclubs.com/를 참고하여 디자인을 적용했습니다.

- ##### 주제 : 실제로 유저들이 이용할 수 있도록 필수 기능을 넣었으며 블라인드 독후감처럼 나이, 성별을 전혀 표시하지 않도록 했습니다.
    ##### 평소에 책을 읽고 공개적인 장소에 서평을 남기는것이 조금 주저되었던 저의 경험을 살려서
    ##### 유저들이 독후감을 쓰는것에 전혀 주저하지 않고 솔직하게 쓸 수 있도록 기능을 구현했습니다.

___

### 구현 플랫폼
-  #### Front-end 기술 및 라이브러리: HTML5, CSS3, JavaScript ES6, React
-  #### Back-end 라이브러리 및 API :  Firebase (Authentication, Firestore), KakaoAPI
-  #### Code Editor : Visual Studio Code 1.78

___

- ####  특이점1 : firebase를 이용한 로그인 기능 구현 -> https://hans-j.tistory.com/197
- #### 특이점2 : Redux toolkit으로 상태관리 -> https://hans-j.tistory.com/219
___

### 📗 기능 구현 
- #### 회원가입 및 SNS를 이용한 계정 로그인 👇
```js
import { useState, useEffect } from "react";
import { authService } from "../fBase";

function useAuth() {
    const [init, setInit] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(authService.currentUser);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
        if (user) {
            setIsSignedIn(user);
            setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
            });
        } else {
            setIsSignedIn(false);
            setUserObj(null);
        }
        setInit(true);
        });
    }, []);

    const refreshUser = () => {
        const user = authService.currentUser;
        setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        updateProfile: (args) => user.updateProfile(args),
        });
    };

    return { init, isSignedIn, isSignedUp, userObj, setIsSignedUp, refreshUser };
}

export default useAuth;
```

- #### 리뷰 게시판 및 회원정보에서 작성한 리뷰 불러오기👇
```js
    import { useEffect, useState, useContext } from "react";
    import { dbService } from "fBase";
    import AuthContext from "../contexts/AuthContext";
    import { useLoadingContext } from "../hooks/useLoading";

    const useFetchReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { userObj } = useContext(AuthContext);
    const { loading, startLoading, stopLoading } = useLoadingContext();

    useEffect(() => {
        const getMyReviews = async () => {
            startLoading();
        const fetchedReviews = await dbService
            .collection("unBookClub")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "desc")
            .get();
        const mappedReviews = fetchedReviews.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setReviews(mappedReviews);
        stopLoading();
        // console.log("Fetched Reviews:", mappedReviews);
        };
        if (userObj) {
        getMyReviews();
        }
    }, [userObj]);

    // console.log("Reviews State:", reviews);
    return { reviews, loading };
    };

    export default useFetchReviews;
    // 주어진 사용자(userObj)에 대한 리뷰만 가져오는 기능을 제공
```
- #### 리뷰 입력 및 삭제 👇
```js
    import { useState } from 'react';
    import { dbService } from 'fBase';

    const useReviewEditor = (reviewObj) => {
        const [editing, setEditing] = useState(false);
        const [newReview, setNewReview] = useState(reviewObj.review);
        const [newNickname, setNewNickname] = useState(reviewObj.creatorNickname);
        const [newTitle, setnewTitle] = useState(reviewObj.title);
        const [newAuthor, setnewAuthor] = useState(reviewObj.author);
        const [newRating, setNewRating] = useState(0);
        const [errorMessage, setErrorMessage] = useState('');

        const onDeleteClick = async () => {
            const ok = window.confirm('정말 삭제하실건가요?');
            if (ok) {
            await dbService.doc(`unBookClub/${reviewObj.id}`).delete();
            }
        };

        const toggleEditing = () => setEditing((prev) => !prev);

        const onSubmit = async (event) => {
            event.preventDefault();
            if (newReview === '') {
                setErrorMessage('리뷰를 입력해주세요');
            } else {
                await dbService.doc(`unBookClub/${reviewObj.id}`).update({
                    review: newReview,
                    title: newTitle,
                    author: newAuthor,
                    selectedRating: newRating,
                });
                setEditing(false);
            };
        };

        const onCancel = () => {
            setEditing(false);
        };

        const onChange = (event) => {
            const {
                target : {value, name},
            }= event;
            if (name === 'newReview') {
                setNewReview(value);
            } else if (name === 'bookTitle') {
                setnewTitle(value);
            } else if (name === 'bookAuthor') {
                setnewAuthor(value);
            }
        };

        console.log(newReview);

        return {
            editing,
            errorMessage,
            newReview,
            newNickname,
            setNewNickname,
            newTitle,
            newAuthor,
            newRating,
            setNewRating,
            onDeleteClick,
            toggleEditing,
            onSubmit,
            onCancel,
            onChange,
        };
    };

    export default useReviewEditor;
```
- #### 키워드, 작가, 책 제목으로 작성된 리뷰 찾기 👇
```js
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
```
- #### 변경된 닉네임으로 프로필 업데이트 👇
```js
    import { useState, useContext } from "react";
    import AuthContext from "../contexts/AuthContext";

    const useUpdateProfile = () => {
        const { userObj, refreshUser } = useContext(AuthContext); 
        const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName);

        const onChange = (event) => {
            const {
            target: { value },
            } = event;
            setNewDisplayName(value);
        };

        const onSubmit = async (event) => {
            event.preventDefault();
            if (userObj.displayName !== newDisplayName) {
                await userObj.updateProfile({
                    displayName: newDisplayName,
                });
                refreshUser();
            }
        };

        return { newDisplayName, onChange, onSubmit };
    };

    export default useUpdateProfile;

```
- #### axios를 이용한 kakaoAPI에서 도서검색 요청  👇
```js
    import axios from 'axios';

    const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

    export const Kakao = axios.create({
        baseURL: "https://dapi.kakao.com",
        headers: {
            Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
        timeout: 10000
    });

    export const kakaoSearch = async (params) => {
        return Kakao.get("/v3/search/book", { params });
    };

```

