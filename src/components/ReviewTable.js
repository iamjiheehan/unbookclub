// UserInfo 페이지에서 작성 리뷰 목록을 보여주는 테이블 컴포넌트

import React from "react";
import Table from 'react-bootstrap/Table';
import ReactStars from "react-rating-stars-component";
import useFormatDate from "../hooks/useFormatDate";

import * as UserStyled from "../styled-components/UserStyled";


const ReviewTable = ({ reviews }) => {

    const formatDate = useFormatDate;
    
    return (
        <UserStyled.Table>
            <thead>
                <tr>
                    <th style={{width:"5rem"}}><p>순서</p></th>
                    <th style={{width:"7.7rem"}}><p>별점</p></th>
                    <th style={{width:"7.5rem"}}><p>책 제목</p></th>
                    <th style={{width:"7rem"}}><p>작가</p></th>
                    <th style={{width:"auto"}}><p>리뷰 내용</p></th>
                    <th style={{width:"20rem"}}><p>작성일시</p></th>
                </tr>
            </thead>
            <tbody>
                {reviews && reviews.map((review, index) => (
                <tr key={review.id}>
                    <td>{index + 1}</td>
                    <td>
                        <ReactStars
                            count={5}
                            edit={false}
                            size={24}
                            value={review.selectedRating}
                        />
                    </td>
                    <td><p>{review.title}</p></td>
                    <td><p>{review.author}</p></td>
                    <td><p>{review.review}</p></td>
                    <td><p>{formatDate(review.createdAt)}</p></td>
                </tr>
                ))}
            </tbody>
        </UserStyled.Table>
    );
};

export default ReviewTable;
