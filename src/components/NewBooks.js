import React, { useState, useEffect, useRef } from "react";
import newBooks from "data/newBooks.json";
import { FlowAniForward, FlowAniReverse } from "styled-components/AniStyled";
import { TextH2, TextP } from "../styled-components/TextStyled";
import ImgStyled from "styled-components/ImgStyled";
import {
    BookItemContainer,
    BookImage,
    BookInfo,
} from "styled-components/BookStyled";
import Button from "styled-components/ButtonStyled";
import { FaShoppingCart } from "react-icons/fa";
import { CarouselContainer, SliderWrap, SliderItem } from "styled-components/CarouselStyled";
import Draggable from 'react-draggable';
import registDragEvent from "utils/registDragEvent";
import { inrange } from "utils/inrage";


function NewBooks() {
  const [posts, setPosts] = useState([]);
  const [addedBooks, setAddedBooks] = useState([]);

  const handleAddToCart = (bookId) => {
    setAddedBooks([...addedBooks, bookId]);
  };

  useEffect(() => {
    setPosts(newBooks);
  }, []);

  return (
    <>
      <FlowAniReverse>
        {posts.map((post) => (
          <BookItemContainer key={post.itemId}>
            <ImgStyled
              src={post.coverLargeUrl}
              alt={post.title}
              width="250px"
            />
            <BookInfo>
              <TextP>{post.title}</TextP>
              <TextH2 padding="1rem 0 0 0">{post.author}</TextH2>
              <Button
                onClick={() => handleAddToCart(post.itemId)}
                disabled={addedBooks.includes(post.itemId)}
              >
                {addedBooks.includes(post.itemId) ? (
                  "추가된 도서"
                ) : (
                  <>
                    <FaShoppingCart /> 읽을 목록에 추가하기
                  </>
                )}
              </Button>
            </BookInfo>
          </BookItemContainer>
        ))}
      </FlowAniReverse>
    </>
  );
}

function NewBooksSlide() {
    const slideList = [newBooks.at(-1), ...newBooks, newBooks.at(0)];
    const [animate, setAnimate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transX, setTransX] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(250);

    const [posts, setPosts] = useState([]);
    const [addedBooks, setAddedBooks] = useState([]);

    const handleAddToCart = (bookId) => {
        setAddedBooks([...addedBooks, bookId]);
    };

    useEffect(() => {
        setPosts(newBooks);
    }, []);

    const handleDrag = (e, data) => {
        setTransX((prevTransX) => prevTransX + data.deltaX);
    };

    const handleDragStop = () => {
        const scrollWidth = document.getElementById("slider__wrap").scrollWidth;
        const slideWidth = document.getElementById("slider__wrap").clientWidth;
        const maxTransX = scrollWidth - slideWidth;
        const index = Math.round(Math.abs(transX) / slideWidth);
        if (transX > 0) {
            setTransX(0);
            setCurrentIndex(0);
        } else if (Math.abs(transX) >= maxTransX) {
            setTransX(-maxTransX);
            setCurrentIndex(posts.length - 1);
        } else {
            setTransX(-(index * slideWidth));
            setCurrentIndex(index);
        }
    };

    return (
        <>
            <FlowAniReverse>
                <div>
                    <Draggable
                        axis="x"
                        bounds={{ left: -300, right: 300 }}
                        position={{ x: 0, y: 0 }}
                        onDrag={handleDrag}
                        onStop={handleDragStop}
                    >  
                        <SliderWrap id="slider__wrap" transX={transX} 
                            {...registDragEvent({
                                onDragChange: (deltaX) => {
                                    setTransX(inrange(deltaX, -sliderWidth + 10, sliderWidth - 10));
                                },
                                onDragEnd: (deltaX) => {
                                    const maxIndex = slideList.length - 1;

                                    if (deltaX < -100) setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
                                    if (deltaX > 100) setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));
                                    setAnimate(true);
                                    setTransX(0);
                                },
                            })}
                            onTransitionEnd={() => {
                                setAnimate(false);
                                    if (currentIndex === 0) {
                                        setCurrentIndex(slideList.length - 2);
                                    } else if (currentIndex === slideList.length - 1) {
                                        setCurrentIndex(1);
                                    }
                            }}>
                            {posts.map((post) => (
                            <BookItemContainer key={post.itemId}>
                                <ImgStyled
                                src={post.coverLargeUrl}
                                alt={post.title}
                                width="250px"
                                draggable={false}
                                />
                                <BookInfo>
                                    <TextP>{post.title}</TextP>
                                    <TextH2 padding="1rem 0 0 0">{post.author}</TextH2>
                                    <Button
                                        onClick={() => handleAddToCart(post.itemId)}
                                        disabled={addedBooks.includes(post.itemId)}
                                    >
                                        {addedBooks.includes(post.itemId) ? (
                                        "추가된 도서"
                                        ) : (
                                        <>
                                            <FaShoppingCart /> 읽을 목록에 추가하기
                                        </>
                                        )}
                                    </Button>
                                </BookInfo>
                            </BookItemContainer>
                            ))}
                        </SliderWrap>
                    </Draggable>
                </div>
            </FlowAniReverse>
        </>
    );
}

export { NewBooks, NewBooksSlide };
