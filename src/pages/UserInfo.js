import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../store";

// 로그인 contextAPI
import AuthContext from "../contexts/AuthContext";

// 커스텀 훅
import useFetchReviews from "../hooks/useFetchReviews";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Loading } from "../hooks/useLoading";

//컴포넌트 임포트
import ReviewTable from "../components/ReviewTable";

// 스타일컴포넌트임포트
import * as UserStyled from "../styled-components/UserStyled";

import { FlexRow} from "styled-components/FlexStyled";
import { ImgStyled } from "styled-components/ImgStyled";
import Dropdown from "react-bootstrap/Dropdown";
import { Btn3, BtnInput } from "styled-components/BtnStyled";

export default function UserInfo() {
    const { userObj, setUserObj } = useContext(AuthContext);
    const { reviews, loading } = useFetchReviews(userObj);
    const { newDisplayName, onChange, onSubmit } = useUpdateProfile();
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [sortingCriteria, setSortingCriteria] = useState("");
    const dispatch = useDispatch();
    let addedBooks = useSelector((state) => state.book);

    useEffect(() => {
        setFilteredReviews(reviews);
    }, [reviews]);

    if (!userObj) {
        return null;
    }

    const sortByDateDescending = () => {
        const sortedReviews = [...filteredReviews].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setFilteredReviews(sortedReviews);
        setSortingCriteria("최신 순");
        console.log("sort by date descending works");
    };

    const sortByDateAscending = () => {
        const sortedReviews = [...filteredReviews].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setFilteredReviews(sortedReviews);
        setSortingCriteria("오래된 순");
        console.log("sort by date ascending works");
    };

    const sortByRating = () => {
        const sortedReviews = [...filteredReviews].sort(
            (a, b) => b.selectedRating - a.selectedRating
        );
        setFilteredReviews(sortedReviews);
        setSortingCriteria("별점 순");
        console.log("sort by rating works");
    };

    const deleteBook = (itemId) => {
        dispatch(removeBook(itemId));
    };

    return (
        <UserStyled.Wrap>
            <div>
                <div className="top-wrap">
                    <h1>
                        <strong>{userObj.displayName}</strong> 님 안녕하세요
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="name-wrap">
                            <input
                                className="name-input"
                                onChange={onChange}
                                type="update"
                                placeholder="닉네임을 설정해주세요."
                                value={newDisplayName}
                            />
                            <div className="name-change">
                                <BtnInput
                                    margin="2rem auto 3rem auto"
                                    type="submit"
                                    value="닉네임 변경하기"
                                />
                            </div>
                        </div>
                    </form>
                    {addedBooks.length === 0 && (
                        <h4>서재에 추가된 책이 없습니다.</h4>
                    )}
                {addedBooks.length !== 0 && (
                    <>
                        <h5>
                            읽을 목록에 추가된 책이 {addedBooks.length}권
                            있습니다.
                        </h5>
                        {addedBooks.map((book) => (
                            <FlexRow key={book.isbn} alignItems="center">
                                <ImgStyled
                                    src={book.coverLargeUrl}
                                    alt={book.title}
                                    width="100px"
                                    margin="1rem"
                                />
                                <div className="book-info">
                                    <p><strong>{book.title}</strong></p>
                                    <p>{book.author}</p>
                                </div>
                                <Btn3 onClick={() => deleteBook(book.itemId)}>
                                    삭제하기
                                </Btn3>
                            </FlexRow>
                        ))}
                    </>
                )}
                </div>
                <hr />
                <div className="bottom-wrap">
                  <h4>작성한 리뷰 목록</h4>
                  <Dropdown style={{ textAlign: "right", marginBottom: "2rem" }}>
                      <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                          style={{ backgroundColor: "white", color: "black" }}
                      >
                          {sortingCriteria === "" ? "정렬 기준" : sortingCriteria}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                          <Dropdown.Item
                              onClick={sortByDateDescending}
                              href="#/action-1"
                          >
                              최신 순
                          </Dropdown.Item>
                          <Dropdown.Item
                              onClick={sortByDateAscending}
                              href="#/action-3"
                          >
                              오래된 순
                          </Dropdown.Item>
                          <Dropdown.Item onClick={sortByRating} href="#/action-2">
                              별점 순
                          </Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  {loading ? (
                      <Loading />
                  ) : (
                      <>
                          {filteredReviews.length === 0 && (
                              <h3>작성한 리뷰가 없습니다.</h3>
                          )}
                          {filteredReviews.length !== 0 && (
                              <ReviewTable
                                  reviews={filteredReviews}
                                  setFilteredReviews={setFilteredReviews}
                              />
                          )}
                      </>
                  )}
                </div>
              </div>
        </UserStyled.Wrap>
    );
}
