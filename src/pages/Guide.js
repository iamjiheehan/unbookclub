import React, { useCallback, useState } from "react";

// 부트스트랩 라이브러리 임포트
import { Container } from "react-bootstrap";

// 스타일컴포넌트 임포트
import { FlexCol } from "styled-components/FlexStyled";
import { FirstImgStyled, ImgStyled } from "styled-components/ImgStyled";
import HR from "styled-components/LineStyled";
import { TextH1, TextH2 } from "styled-components/TextStyled";
import * as GuideStyled from "styled-components/GuideStyled";
import { Btn3 } from "styled-components/BtnStyled";

// 이미지 임포트
import bookImg from "../static/images/menu-icon-02.webp";
import main from "../static/images/bg_discussion.webp";

// 폰트어썸 라이브러리 임포트
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Guide() {

    const [isCollapse, setIsCollapse] = useState(Array(4).fill(false)); 
    // 초기값 설정, 배열의 크기에 맞춰 수정

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
                {Array(4).fill().map((_, index) => (
                    <div className="content" key={index}>
                        <div className="question">
                            <FontAwesomeIcon
                                icon={faBookmark}
                                style={{ color: "#bb8867" }}
                                size="2x"
                            />
                            <div className="text-wrap">
                                <div className="text">
                                    <p>
                                        가장 감명 깊었던 부분은 어떤
                                        장면이었나요?
                                    </p>
                                    <Btn3
                                        className={
                                            isCollapse[index] ? "" : "on"
                                        }
                                        onClick={() => handleBtnClick(index)}
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
                        <div className={`answer${isCollapse[index] ? " on" : ""}`}>
                            <p>
                                책에서 가장 좋아하는 부분은 주인공의 용기와
                                결단력을 보여주는 장면이었습니다. <br />
                                이 부분에서 주인공은 어려운 결정을 내리고 어려운
                                상황을 극복하기 위해 자신을 돌파하려 노력하는
                                모습이 매우 감명깊었습니다. <br />그 순간은
                                주인공의 성장을 보여주며 독자로 하여금 공감하고
                                이야기를 함께 공유하게 만드는 중요한 순간 중
                                하나였습니다.
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </GuideStyled.Wrap>
        </GuideStyled.Container>
    );
}
