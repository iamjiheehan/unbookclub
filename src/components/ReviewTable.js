// UserInfo 페이지에서 작성 리뷰 목록을 보여주는 테이블 컴포넌트

import React from "react";
import Table from 'react-bootstrap/Table';
import { TextP } from "../styled-components/TextStyled";
import ReactStars from "react-rating-stars-component";
import useFormatDate from "../hooks/useFormatDate";

const ReviewTable = ({ reviews }) => {
    const formatDate = useFormatDate;
    
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th style={{width:"5rem"}}><TextP>순서</TextP></th>
                    <th style={{width:"7.7rem"}}><TextP>별점</TextP></th>
                    <th style={{width:"7.5rem"}}><TextP>책 제목</TextP></th>
                    <th style={{width:"7rem"}}><TextP>작가</TextP></th>
                    <th style={{width:"auto"}}><TextP>리뷰 내용</TextP></th>
                    <th style={{width:"20rem"}}><TextP>작성일시</TextP></th>
                </tr>
            </thead>
            <tbody>
                {reviews && reviews.map((review, index) => (
                <tr key={review.id}>
                    <td>{index + 1}</td>
                    <td>
                        <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={review.selectedRating}
                        />
                    </td>
                    <td><TextP>{review.title}</TextP></td>
                    <td><TextP>{review.author}</TextP></td>
                    <td><TextP>{review.review}</TextP></td>
                    <td><TextP>{formatDate(review.createdAt)}</TextP></td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ReviewTable;
