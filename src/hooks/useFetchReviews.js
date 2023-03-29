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