import React from 'react'

// 부트스트랩 라이브러리 임포트
import { Container } from 'react-bootstrap';

// 스타일컴포넌트 임포트
import { FlexCol } from 'styled-components/FlexStyled';
import { FirstImgStyled, ImgStyled } from 'styled-components/ImgStyled';
import HR from 'styled-components/LineStyled';
import { TextH1, TextH2 } from 'styled-components/TextStyled';
import * as GuideStyled from 'styled-components/GuideStyled';
import {Btn3} from 'styled-components/BtnStyled';


// 이미지 임포트
import bookImg from "../static/images/menu-icon-02.webp";
import main from"../static/images/bg_discussion.webp";

//폰트어썸 라이브러리 임포트
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Guide() {
    return (
        <GuideStyled.Container>
            <div className='Banner-wrap'>
                <h1 className='Banner-text'>DISCUSSION GUIDES</h1>
                <div className='Banner-img'>
                    <img src={main} alt="banner" />
                </div>
            </div>
            <GuideStyled.Wrap>
                <div className='title'>
                    <h1><strong>Discussion Questions</strong></h1>
                    <h5>Use these discussion questions to guide your next book club meeting.</h5>
                </div>
                <div className='content-wrap'>
                    <div className='content'>
                        <div className='question'>
                            <FontAwesomeIcon icon={faBookmark} style={{ color: "#bb8867" }} size="2x" />
                            <div className='text-wrap'>
                                <div className='text'>
                                    <p>The Hint of Light is narrated by three characters: Margaret, Kyle, and Ally. How does each of these characters bring a unique perspective to the novel?</p>
                                    <Btn3 className="">
                                        <FontAwesomeIcon icon={faCaretDown} size="2x" />
                                    </Btn3>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className='answer'>
                            <p>
                                Margaret, Kyle, and Ally. How does each of these characters bring a unique perspective to the novel?
                            </p>
                        </div>
                    </div>
                </div>
            </GuideStyled.Wrap>
        </GuideStyled.Container>
    )
}
