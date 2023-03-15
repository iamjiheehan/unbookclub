import { useState, useEffect } from "react";
import { dbService } from "fBase";

export const useReviewForm = (userObj) => {
    const [inputReview, setInputReview] = useState("");
    const [reviewList, setReviewList] = useState([]);

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
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setInputReview("");
    };

    const onChange = (event) => {
        const {
        target: { value },
        } = event;
        setInputReview(value);
    };

    return {
        inputReview,
        reviewList,
        onSubmit,
        onChange,
    };
};
// 리뷰 작성 및 전체 리뷰 목록을 가져오는 기능을 제공