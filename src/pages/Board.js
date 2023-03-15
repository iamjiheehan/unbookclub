import { dbService } from "fBase";
import React, { useContext, useEffect, useState } from "react";
import Button from "../styled-components/ButtonStyled";
import AuthContext from "../hooks/AuthContext";
import Reviews from "../components/Reviews"

export default function Board() {
    const { userObj } = useContext(AuthContext);
    
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const unBookClub = dbService
            .collection("unBookClub")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const reviewArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                }));
                setReviews(reviewArr);
            });
        return () => unBookClub();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        if (review.trim()==="") return;
        await dbService.collection("unBookClub").add({
            review,
            createdAt : Date.now(),
            creatorId: userObj.uid,
        });
        setReview("");
    };
    

    const onChange = (event) => {
        const {
            target : {value}
        } = event;
        setReview(value);
    }

    return (
        <>
            <div>Board</div>
            <div>
                <h2>마 이거 왜 안되노</h2>
                <Button to="/create">글쓰기</Button>
            </div>
            <form onSubmit={onSubmit}>
                <input value={review} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={200} />
                <input type="submit" value="review" />
            </form>
            <div>
                {reviews.map((review)=>(
                    <Reviews key={review.id} reviewObj={review} isOwner={userObj && review.creatorId === userObj.uid} />
                ))}
            </div>
        </>
    );
}
