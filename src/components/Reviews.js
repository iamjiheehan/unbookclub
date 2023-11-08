import React from "react";

//라이브러리
import ReactStars from "react-rating-stars-component";

// 커스텀 훅
import useFormatDate from "hooks/useFormatDate";
import useReviewEditor from "hooks/useReviewEditor";

// 스타일컴포넌트 임포트
import { Btn2Input,  Btn5 } from "styled-components/BtnStyled";

import * as BoardStyled from "../styled-components/BoardStyled";
import * as CreateStyled from "../styled-components/CreateStyled";

const Reviews = ({ reviewObj, isOwner, bookTitle, bookAuthor }) => {
    
    const formattedDate = useFormatDate(reviewObj.createdAt);

    const {
        editing,
        errorMessage,
        newReview,
        newNickname,
        setNewNickname,
        newTitle,
        newAuthor,
        onDeleteClick,
        toggleEditing,
        onSubmit,
        onCancel,
        onChange,
        newRating, 
        setNewRating,
    } = useReviewEditor(reviewObj); 

    console.log(newReview);

    return (
        <>
            {editing ? (
                <CreateStyled.Overlay>
                    <CreateStyled.FormContainer>
                        <CreateStyled.Wrap>
                            <form onSubmit={onSubmit}>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    edit={true}
                                    value={reviewObj.selectedRating}
                                    onChange={(newRating) =>
                                        setNewRating(newRating)
                                    }
                                />
                                <input
                                    name="bookTitle"
                                    value={newTitle}
                                    onChange={onChange}
                                    type="text"
                                    placeholder="책 제목을 입력해주세요"
                                    maxLength={200}
                                />
                                <input
                                    name="bookAuthor"
                                    value={newAuthor}
                                    onChange={onChange}
                                    type="text"
                                    placeholder="작가 이름을 입력해주세요"
                                    maxLength={200}
                                />
                                <textarea
                                    name="newReview"
                                    type="text"
                                    placeholder="감상평을 입력해주세요"
                                    value={newReview}
                                    required
                                    onChange={onChange}
                                />
                                {/* <BoardInput
                                    type="text"
                                    placeholder="닉네임 변경이 가능합니다"
                                    value={newNickname}
                                    required
                                    onChange={(event) =>
                                        setNewNickname(event.target.value)
                                    }
                                /> */}
                                {errorMessage && (
                                    <p style={{ color: "red" }}>{errorMessage}</p>
                                )}
                                <div className="btn-wrap">
                                    <Btn2Input
                                        type="submit"
                                        value="수정 완료"
                                        bgColor="rgb(230, 126, 34)"
                                        style={{ color: "white" }}
                                        onClick={onSubmit}
                                    />
                                    <Btn2Input
                                        type="button"
                                        value="취소"
                                        onClick={onCancel}
                                        bgColor="rgb(230, 126, 34)"
                                        style={{ color: "white" }}
                                    />
                                </div>
                            </form>
                        </CreateStyled.Wrap>
                    </CreateStyled.FormContainer>
                </CreateStyled.Overlay>
            ) : (
                <BoardStyled.Content className="content-container">
                    <div className="item_info">
                        <div className="info_rating">
                            <ReactStars
                                count={5}
                                size={15}
                                edit={false}
                                value={reviewObj.selectedRating}
                            />
                        </div>
                        <div className="info_row">
                            <span className="info_title">{bookTitle}</span>
                        </div>
                        <div className="info_row">
                            <span className="info_auth">{bookAuthor}</span>
                        </div>
                        <div className="info_row info_date">
                            <div className="info_desc">{formattedDate}</div>
                        </div>
                        <div className="info_row info_readBox">
                            <div className="info_desc">{reviewObj.review}</div>
                        </div>
                    </div>
                    {/* <p>책 제목: {bookTitle}</p>
                        <p>작가: {bookAuthor}</p>
                        <p>닉네임 : {reviewObj.creatorNickname}</p>
                        <p>작성일시 : {formattedDate}</p> */}
                    {isOwner && (
                        <>
                            <div className="btn-wrap">
                                <Btn5
                                        onClick={toggleEditing}
                                    >
                                    <p>수정</p>
                                </Btn5>
                                <Btn5
                                    onClick={onDeleteClick}
                                >
                                    <p>삭제</p>
                                </Btn5>
                            </div>
                        </>
                    )}
                </BoardStyled.Content>
            )}
        </>
    );
};

export default Reviews;
