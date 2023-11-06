//리뷰작성 게시판
import React, { useContext } from "react";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 컴포넌트
import StarRating from "../components/StarRating";
import { TextH1 } from "../styled-components/TextStyled";
import { Input, BoardInput } from "../styled-components/InputStyled";
import { FlexCol, FlexRow } from "../styled-components/FlexStyled";

// 커스텀 훅
import { useReviewForm } from "../hooks/useReviewForm";


// 스타일컴포넌트 임포트
import * as CreateStyled from "../styled-components/CreateStyled"

// 이미지 임포트


import { Container } from "react-bootstrap";
import image from '../static/images/book-report.webp';
import { ImgStyled } from '../styled-components/ImgStyled';


export default function Board() {
    const { userObj } = useContext(AuthContext);
    const {
    inputReview,
    onSubmit,
    onChange,
    bookTitle,
    bookAuthor,
    onRatingSelected,
    } = useReviewForm(userObj);


    return (
            <CreateStyled.Wrap>
                <h1>독후감 작성하기</h1>
                <form onSubmit={onSubmit}>
                    <FlexCol margin="2rem">
                    <FlexRow alignItems="baseline">
                        <StarRating totalStars={5} onRatingSelected={onRatingSelected} />
                    </FlexRow>
                    <BoardInput
                        name="bookTitle"
                        value={bookTitle}
                        onChange={onChange}
                        type="text"
                        placeholder="책 제목을 입력해주세요"
                        maxLength={200}
                        margin="auto"
                    />
                    <BoardInput
                        name="bookAuthor"
                        value={bookAuthor}
                        onChange={onChange}
                        type="text"
                        placeholder="작가 이름을 입력해주세요"
                        maxLength={200}
                        margin="auto"
                    />
                    <BoardInput
                        name="inputReview"
                        value={inputReview}
                        onChange={onChange}
                        type="text"
                        placeholder="감상평을 입력해주세요"
                        margin="auto"
                        height="25rem"
                        overflow="auto"
                    />
                    <Input type="submit" value="게시하기" margin="1.5rem auto 5rem auto" />
                    </FlexCol>
                </form>
            </CreateStyled.Wrap>
    )

}

