import React , { useContext } from "react";
import { useSelector, useDispatch} from "react-redux";
import { addBook } from "store";

// 베스트셀러 데이터
import bestSeller from "../data/bestSeller.json";
import { FlowAniForward } from "../styled-components/AniStyled";

// 로그인 contextAPI
import AuthContext from "contexts/AuthContext";

// 스타일컴포넌트 임포트
import {
    BookItemContainer,
    BookInfo,
    BookImg,
} from "../styled-components/BookStyled";
import Button from "../styled-components/ButtonStyled";
import { FaShoppingCart } from "react-icons/fa";

export function BestSellers() {
    const posts = bestSeller;
    const { userObj } = useContext(AuthContext);

    let addedBooks = useSelector((state) => state.book);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(posts , addedBooks);
    // });

    const handleAddToCart = (itemId, title, author, coverLargeUrl) => {
        // console.log(
        //     "Adding book to cart:",
        //     itemId,
        //     title,
        //     author,
        //     coverLargeUrl
        // );

        if (!userObj) {
            alert("로그인이 필요한 기능입니다.");
            return;
        }
        const bookToAdd = posts.find((book) => book.itemId === itemId);
        if (addedBooks.find((book) => book.itemId === itemId)) {
            // console.log("이미 추가된 도서:", itemId);
            return;
        }
        dispatch(addBook({ ...bookToAdd, title, author, coverLargeUrl }));
        // console.log("카트에 담긴 책 id", itemId);
    };

    return (
        <>
            <FlowAniForward>
                {posts.map((post) => (
                    <BookItemContainer key={post.itemId}>
                        <BookImg
                            src={post.coverLargeUrl}
                            alt={post.title}
                            width="250px"
                        />
                        <BookInfo>
                            <p className="book-title">
                                <strong>{post.title}</strong>
                            </p>
                            <p padding="1rem 0 0 0">{post.author}</p>
                            <Button
                                onClick={() =>
                                    handleAddToCart(
                                        post.itemId,
                                        post.title,
                                        post.author,
                                        post.coverLargeUrl
                                    )
                                }
                                disabled={addedBooks.some(
                                    (book) => book.itemId === post.itemId
                                )}
                            >
                                {addedBooks.some(
                                    (book) => book.itemId === post.itemId
                                ) ? (
                                    <p>추가된 도서</p>
                                ) : (
                                    <>
                                        <div className="cart-wrap">
                                            <FaShoppingCart />
                                            <p className="cart-text">
                                                서재에 추가
                                            </p>
                                        </div>
                                    </>
                                )}
                            </Button>
                        </BookInfo>
                    </BookItemContainer>
                ))}
            </FlowAniForward>
        </>
    );
}
