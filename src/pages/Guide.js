import React, { useState } from "react";

// 부트스트랩 라이브러리 임포트

// 스타일컴포넌트 임포트
import * as GuideStyled from "styled-components/GuideStyled";
import { Btn3 } from "styled-components/BtnStyled";

// 이미지 임포트
import main from "../static/images/bg_discussion.webp";

// 폰트어썸 라이브러리 임포트
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Guide() {
    const qna = [
        {
            question: "이 책에서 가장 좋아하는 부분은 무엇인가요?",
            answer: "이 책에서 가장 기억에 남는 장면은 주인공이 어려운 결정을 내리는 장면이었습니다. 그 순간의 긴장과 갈등, 그리고 주인공의 감정 변화가 매우 생생하게 묘사되어 있어서 오랫동안 기억에 남았습니다. 이 장면을 통해 주인공의 성장과 변화를 명확하게 느낄 수 있었습니다.",
        },
        {
            question: "이 작가의 다른 책을 읽어보고 싶나요? 이유는 뭔가요?",
            answer: "네, 다시 읽어보고 싶습니다. 작가의 글쓰기는 매우 감동적이었고, 여러 구절이 빛났습니다. 특히, 작가의 상세한 묘사와 풍부한 감정 표현은 독자를 이야기 안으로 끌어들이는 데 크게 기여했습니다. 특별한 문장들이 많아서 몇몇 구절을 다시 읽고 고민해 보았습니다.",
        },
        {
            question:
                "이 책을 읽은 후 기분이 어떻게 변했나요? 변화가 있었다면 어떤 점에서 변화가 있었나요?",
            answer: "책을 처음부터 끝까지 읽으면서 제 의견이 조금씩 변했습니다. 초기에는 주인공의 결정에 공감하지 못했지만, 이야기가 전개됨에 따라 그 결정이 논리적이고 필요한 것으로 느껴졌습니다.",
        },
        {
            question:
                "이 책이 다른 어떤 책을 떠올리게 했나요?",
            answer: "만약 작가에게 무엇이든 물어볼 수 있다면, 저는 이 책을 창작하면서 작가가 가장 큰 영감을 받은 것이 무엇인지 궁금합니다. 또한, 주인공의 캐릭터 개발과 이야기의 주요 테마를 어떻게 고안하셨는지에 대한 과정과 아이디어에 대한 궁금증이 생깁니다. 작가의 창작 과정과 작품에 대한 열정적인 비전을 더 자세히 알아보고 싶습니다.",
        },
    ];

    const qnaLength = qna.length;

    // 초기값 설정, 배열의 크기에 맞춰 수정
    const [isCollapse, setIsCollapse] = useState(Array(qnaLength).fill(false));

    const handleBtnClick = (index) => {
        // 해당 인덱스에 대한 isCollapse 값을 토글
        const newIsCollapse = [...isCollapse];
        newIsCollapse[index] = !newIsCollapse[index];
        setIsCollapse(newIsCollapse);

        console.log(isCollapse);
    };

    return (
        <GuideStyled.Container>
            <div className="Banner-wrap">
                <h1 className="Banner-text">DISCUSSION GUIDES</h1>
                <div className="Banner-img">
                    <img src={main} alt="banner" />
                </div>
            </div>
            <GuideStyled.Wrap>
                <div className="title">
                    <h1>
                        <strong>토론 가이드</strong>
                    </h1>
                    <h5>
                        다음 질문들을 읽고 예시 답안을 보며 리뷰 작성에
                        적용해보세요.
                    </h5>
                </div>
                <div className="content-wrap">
                    {qna.map((item, index) => (
                        <div className="content" key={index}>
                            <div className="question">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    style={{ color: "#bb8867" }}
                                    size="2x"
                                />
                                <div className="text-wrap">
                                    <div className="text">
                                        <p>{item.question}</p>
                                        <Btn3
                                            className={
                                                isCollapse[index] ? "" : "on"
                                            }
                                            onClick={() =>
                                                handleBtnClick(index)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faCaretDown}
                                                size="2x"
                                            />
                                        </Btn3>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div
                                className={`answer${
                                    isCollapse[index] ? " on" : ""
                                }`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </GuideStyled.Wrap>
        </GuideStyled.Container>
    );
}
