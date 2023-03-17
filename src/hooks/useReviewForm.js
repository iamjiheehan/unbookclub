import { useState, useEffect } from "react";
import { dbService } from "fBase";


export const useReviewForm = (userObj) => {
    const [inputReview, setInputReview] = useState("");
    const [bookTitle, setbookTitle]=useState("");
    const [bookAuthor, setbookAuthor]=useState("");
    const [reviewList, setReviewList] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    
    useEffect(() => {
        const unBookClub = dbService
        .collection("unBookClub")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            const reviewArr = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setReviewList(reviewArr);
        });
        return () => unBookClub();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (inputReview.trim() === "") return;
        await dbService.collection("unBookClub").add({
            review: inputReview,
            title: bookTitle,
            author: bookAuthor,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            creatorNickname : userObj.displayName,
            selectedRating: selectedRating
        });
        setInputReview("");
        setbookTitle("");
        setbookAuthor("");
        setSelectedRating(0);
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "bookTitle":
                setbookTitle(value);
                break;
            case "bookAuthor":
                setbookAuthor(value);
                break;
            case "inputReview":
                setInputReview(value);
                break;
            default:
                break;
        }
    console.log(userObj);
    };

    // const onChange = (event) => {
    //     const {
    //     target: { value },
    //     } = event;
    //     setInputReview(value);
    
    const onRatingSelected = (rating) => {
        setSelectedRating(rating);
    };

    return {
        inputReview,
        reviewList,
        onSubmit,
        onChange,
        selectedRating,
        setSelectedRating,
        onRatingSelected,
        setbookTitle,
        bookTitle,
        setbookAuthor,
        bookAuthor
    };
};
// 리뷰 작성 및 전체 리뷰 목록을 가져오는 기능을 제공