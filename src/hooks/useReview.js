import { useState, useEffect } from "react";
import { dbService } from "fBase";
import { useNavigate } from "react-router-dom";

export const useReview = (userObj) => {
    const [inputReview, setInputReview] = useState(""); // 감상평 입력
    const [bookTitle, setBookTitle] = useState(""); // 책 제목
    const [bookAuthor, setBookAuthor] = useState(""); // 작가 이름
    const [reviewList, setReviewList] = useState([]); // 리뷰 목록
    const [selectedRating, setSelectedRating] = useState(0); // 선택한 평점
    const [editing, setEditing] = useState(false); // 수정 모드
    const [newReview, setNewReview] = useState(""); // 수정할 감상평
    const [newNickname, setNewNickname] = useState(""); // 수정할 닉네임
    const [newTitle, setNewTitle] = useState(""); // 수정할 제목
    const [newAuthor, setNewAuthor] = useState(""); // 수정할 작가
    const [newRating, setNewRating] = useState(0); // 수정할 평점
    const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지
    const navigate = useNavigate(); // React Router의 navigate 함수

    // 리뷰 목록을 불러오는 useEffect
    useEffect(() => {
        const unBookClub = dbService
            .collection("unBookClub")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const reviewArr = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: new Date(doc.data().createdAt).toLocaleString(),
                }));
                setReviewList(reviewArr);
            });
        return () => unBookClub();
    }, []);

    // 리뷰 작성 폼을 제출하는 함수
    const onSubmit = async (event) => {
        event.preventDefault();
        navigate("/board");
        if (inputReview.trim() === "") return;
        await dbService.collection("unBookClub").add({
            review: inputReview,
            title: bookTitle,
            author: bookAuthor,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            creatorNickname: userObj.displayName,
            selectedRating: selectedRating,
        });
        setInputReview("");
        setBookTitle("");
        setBookAuthor("");
        setSelectedRating(0);
    };

    // 리뷰 작성 폼 값 변경 시 호출되는 함수
    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "bookTitle":
                setBookTitle(value);
                break;
            case "bookAuthor":
                setBookAuthor(value);
                break;
            case "inputReview":
                setInputReview(value);
                break;
            default:
                break;
        }
    };

    // 선택한 평점을 업데이트하는 함수
    const onRatingSelected = (rating) => {
        setSelectedRating(rating);
    };

    // 리뷰 수정 모드를 토글하는 함수
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };

    return {
        inputReview,
        bookTitle,
        bookAuthor,
        reviewList,
        selectedRating,
        editing,
        newReview,
        newNickname,
        newTitle,
        newAuthor,
        newRating,
        errorMessage,
        setBookTitle,
        setBookAuthor,
        setInputReview,
        onSubmit,
        onChange,
        onRatingSelected,
        toggleEditing,
    };
};
