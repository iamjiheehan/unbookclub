import React, { useContext } from "react";
import AuthContext from "../hooks/AuthContext";
import Reviews from "../components/Reviews";
import GridStyled from "../styled-components/GridStyled";
import { useReviewForm } from "../hooks/useReviewForm";
import { InputLink } from "../styled-components/InputStyled";
import { TextP, TextH1 } from "../styled-components/TextStyled";
import Search from "../pages/Search";
import ImgStyled from '../styled-components/ImgStyled';

import iconTop from '../static/images/menu-icon-01.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


export default function Board() {
    const { userObj } = useContext(AuthContext);
    const { reviewList } = useReviewForm(userObj);

    return (
        <>
        <ImgStyled src={iconTop} alt="Top Image" height="500px" />
        <InputLink to="/create">글 쓰러 가기 <FontAwesomeIcon icon={faPencilAlt} /></InputLink>
        <div style={{ height: "2rem" }}></div>
        <Search />
        <GridStyled rows="auto" columns="repeat(3,minmax(0,1fr))" margin="3rem">
            {reviewList.map((review) => (
            <Reviews
                key={review.id}
                reviewObj={review}
                isOwner={userObj && review.creatorId === userObj.uid}
                rating={review.selectedRating}
                bookTitle={review.title}
                bookAuthor={review.author}
            />
            ))}
        </GridStyled>
        </>
    );
}
