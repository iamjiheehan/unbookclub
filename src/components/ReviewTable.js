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
                <th>순서</th>
                <th>별점</th>
                <th>책 제목</th>
                <th>작가</th>
                <th>리뷰 내용</th>
                <th>작성일시</th>
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
                    <td>{review.bookTitle}</td>
                    <td>{review.bookAuthor}</td>
                    <td>{review.review}</td>
                    <td><TextP>{formatDate(review.createdAt)}</TextP></td>
                </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ReviewTable;
