import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../static/images/logo.webp";

import * as HeaderStyled from "../styled-components/HeaderStyled";

import LoginBtn from "../styled-components/LoginBtnStyled";
import { ImgStyled, LogoImgStyled } from "../styled-components/ImgStyled";
import Button from "../styled-components/ButtonStyled";
import { TextP } from "../styled-components/TextStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "../hooks/useSignOut";
import { LoadingBack, LoadingText } from "../styled-components/LoadingStyled";

import Cube from "../static/images/cube.gif";
import top_header_R from "../static/images/top_header_R.jpg";
import top_header_L from "../static/images/top_header_L.jpg";
import header_banner from "../static/images/header_banner.jpg";
import i_arrdown_fill from "../static/images/i_arrdown_fill.gif";
import aladin_logo_new from "../static/images/aladin_logo_new.gif";

import AuthContext from "contexts/AuthContext";
import { firebaseInstance } from "fBase";

function Header({ reviewObj }) {
    const { userObj } = useContext(AuthContext);
    const displayName = userObj?.displayName;
    const onSignOutClick = useSignOut();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebaseInstance.auth().onAuthStateChanged((user) => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <LoadingBack>
                <LoadingText>잠시만 기다려 주세요.</LoadingText>
                <img src={Cube} alt="로딩중" width="5%" />
            </LoadingBack>
        );
    }

    // ---------------------------------------헤더 메뉴 호버

    // #headerTop_gnb 요소 내부의 모든 목록 항목을 가져옴.
    const listItems = document.querySelectorAll(
        "#headerTop_gnb li, .l_menu li"
    );

    listItems.forEach(function (listItem) {
        listItem.addEventListener("mouseenter", function () {
            const item = this.querySelector("div");
            if (item) {
                item.style.display = "block";
            }
        });
    });

    // mouseleave 이벤트 리스너를 추가하여 자식 div를 숨김.
    listItems.forEach(function (listItem) {
        listItem.addEventListener("mouseleave", function () {
            const item = this.querySelector("div");
            if (item) {
                item.style.display = "none";
            }
        });
    });

    // 상위 팝업 배너 닫기
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const w_t_event = document.querySelector(".w_t_event");
            if (w_t_event) {
                w_t_event.style.display = "none";
            }
        });
    });

    // 팝업 메뉴 닫기
    const menuCloseButtons = document.querySelectorAll(".menu_close");
    menuCloseButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const headLayerMenu = document.querySelector("#head_layer_menu");
            if (headLayerMenu) {
                headLayerMenu.style.display = "none";
            }
        });
    });

    return (
        <>
            <HeaderStyled.Container className="header_wrap">
                {/* 상단 이벤트 베너 */}
                <div
                    className="w_t_event roof_bnwrap"
                    style={{ background: "rgb(124, 91, 244)" }}
                >
                    <div className="RE_banner_new">
                        <div className="left">
                            <a href="#!">
                                <img src={top_header_L} alt="" border="0" />
                            </a>
                        </div>
                        <div className="right">
                            <a href="#!">
                                <img src={top_header_R} alt="" border="0" />
                            </a>
                        </div>
                        <div className="close">
                            <a href="#!" alt="닫기">
                                닫기
                            </a>
                        </div>
                    </div>
                </div>
                {/* 헤더 맨 위 메뉴  */}
                <HeaderStyled.Top className="header_top">
                    <div className="inner">
                        <ul className="gnb" id="headerTop_gnb">
                            <li className="home">
                                <a href="./sub.html" className="header_on">
                                    HOME
                                </a>
                            </li>
                            <li id="head_book_layer">
                                <a href="./sub.html" title="리뷰게시판">
                                    국내도서
                                </a>
                            </li>
                            <li id="head_foreign_layer">
                                <a href="./sub.html" title="외국도서">
                                    외국도서
                                </a>
                                <div
                                    id="head_foreign_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">외국도서</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>영미도서</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    ELT/어학/도서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    가정/원예/인테리어
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    건강/스포츠
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    경제경영
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    공예/취미/수집
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">만화</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">여행</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">역사</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">요리</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    인문/사회
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    종교/명상/점술
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">청소년</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    해외잡지
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>
                                                        대학교재/전문서
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    건축/디자인
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    교육/자료
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    기술공학
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">법률</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">수험서</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">언어학</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    예술/대중문화
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">의학</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    자연과학
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">컴퓨터</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>기타 언어권</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    독일 도서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    스페인 도서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    중국 도서
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>어린이</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">그림책</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">동화책</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">리더스</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    영어학습
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">챕터북</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">코스북</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>일본도서</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">문학</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    애니메이션 굿즈
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">잡지</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">코믹</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    베스트셀러
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    새로나온책
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    특가도서
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">이벤트</a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{
                                                        height: "40px",
                                                        color: "#EA3692",
                                                    }}
                                                >
                                                    <strong>
                                                        LEXILE 지수별
                                                        <br />
                                                        원서 읽기
                                                    </strong>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/foreign/2023/03/230816_sale_hlayer.jpg"
                                                    style={{
                                                        width: "226px",
                                                        height: "290px",
                                                    }}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_gift_layer">
                                <a href="./sub.html" title="eBook">
                                    eBook
                                </a>
                                <div
                                    id="head_ebook_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">eBook</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    건강/취미
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>경제경영</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">과학</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>라이트노벨</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>로맨스</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>만화</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>사회과학</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>
                                                        소설/시/희곡
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">어린이</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>에세이</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">여행</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">역사</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">외국어</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    요리/살림
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>인문학</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>자기계발</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    좋은부모
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">청소년</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    판타지/무협
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>BL</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>오디오북</strong>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    베스트셀러
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    새로나온eBook
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    대여eBook
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    연재eBook
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/ebook/2023/01/210629_eonly_hlayer.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_goods_layer">
                                <a href="./sub.html" title="알라딘굿즈">
                                    알라딘굿즈
                                </a>
                                <div
                                    id="head_gift_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">알라딘굿즈</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    가방.파우치
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    데스크용품
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    독서용품
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">디지털</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    리빙·키친
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">문구</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    생활용품
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    의류·잡화
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">디지털</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">노트</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">독서대</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">북마크</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">북커버</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    사무용품
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">조명</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">파우치</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">필기구</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">피너츠</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">우주</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">앨리스</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    빨강머리 앤
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">고양이</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">모비딕</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    베스트셀러
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>
                                                        생활용품연수고
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    알라딘 문방구
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    굿즈한정할인
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/goods/2023/03/aug_goods_hlayer.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_used_layer">
                                <a href="./sub.html" title="온라인중고">
                                    온라인중고
                                </a>
                                <div
                                    id="head_used_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">온라인중고</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    경제경영
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">만화</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    사회과학
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    소설/시/희곡
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">어린이</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>에세이</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">역사</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    예술/대중문화
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">외국어</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    요리/살림
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">유아</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    자기계발
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    종교/역학
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    좋은부모
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">청소년</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    컴퓨터/모바일
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    className="arr"
                                                >
                                                    <strong>
                                                        중고 국내도서
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    className="arr"
                                                >
                                                    <strong>중고 음반</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    className="arr"
                                                >
                                                    <strong>
                                                        중고 DVD/블루레이
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    className="arr"
                                                >
                                                    <strong>
                                                        중고 외국도서
                                                    </strong>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    많이 판매된 중고
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    새로 등록된 상품
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    어제 베스트 중고
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    뎍역대 베스트 중고
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    최종 땡처리
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    단골 판매자 보기
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{ color: "#EA3692" }}
                                                >
                                                    판매자매니저
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    알라딘에 중고팔기
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{ height: "40px" }}
                                                    //괄호가 두 개 인 이유는 외부 괄호는 JSX 코드를 블록으로 묶고, 내부 괄호는 스타일 속성의 객체 리터럴을 정의하는 데 사용됨.
                                                >
                                                    판매가능여부 &<br />
                                                    판매가격 확인하기
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    온라인중고FAQ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/used/2023/01/221111_usedshop_hlayer.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_space_layer">
                                <a href="./sub.html" title="우주점">
                                    우주점
                                </a>
                            </li>
                            <li id="head_usedstore_layer">
                                <a href="./sub.html" title="중고매장">
                                    중고매장
                                </a>
                                <div
                                    id="head_usedstore_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">중고매장</a>
                                        </h3>
                                        <div>
                                            <h4>서울</h4>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        가로수길점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        강남점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        강서홈플러스점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        건대점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        노원역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        대학로점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="./sub.html"
                                                        className="new"
                                                    >
                                                        목동점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        서울대입구역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        수유점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        신림점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        신촌점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        연신내점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        영등포점
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        이수역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        잠실롯데월드타워점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        잠실새내역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        종로점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        천호점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        합정점
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>경기</h4>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        동탄2하나로마트점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        동탄점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="./sub.html"
                                                        className="new"
                                                    >
                                                        범계점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        부천점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        분당서현점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        분당야탑점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        산본점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        수원시청역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        수원점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="./sub.html"
                                                        className="new"
                                                    >
                                                        수지점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        의정부홈플러스점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        일산점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        평택점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        화정점
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>광역시 등</h4>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        광주상무점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        광주충장로점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        김해점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        대구동성로점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        대구상인점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        대전시청역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        대전은행점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        동대구역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        마산합성점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        부산경성대 부경대역점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        부산덕천점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        부산서면점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        부산센텀점
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        울산점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        인천계산점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        인천구월점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        인천송도점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        인천청라점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        전주점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        창원상남점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        천안신불당점
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        청주점
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="usedfaq">
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{
                                                        color: "#EA3692",
                                                        lineHeight: "normal",
                                                    }}
                                                >
                                                    <strong>
                                                        중고매장 FAQ
                                                    </strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{
                                                        color: "#EA3692",
                                                        lineHeight: "normal",
                                                    }}
                                                >
                                                    <strong>판매가이드</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="./sub.html"
                                                    style={{
                                                        color: "#EA3692",
                                                        lineHeight: "normal",
                                                    }}
                                                >
                                                    <strong>
                                                        판매가능여부 & 판매가격
                                                        확인하기
                                                    </strong>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/used/2023/01/200327_free_layer.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_coffee_layer">
                                <a href="./sub.html" title="커피">
                                    커피
                                </a>
                                <div
                                    id="head_coffee_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">커피</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">원두</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">드립백</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    콜드브루
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    커피 도구
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    스템프 이벤트
                                                </a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    매장 메뉴
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    커피 매장
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/coffee/2023/03/Haru_hlayer.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_music_layer">
                                <a href="./sub.html" title="음반">
                                    음반
                                </a>
                                <div
                                    id="head_music_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">음반</a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">가요</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">국악</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    월드뮤직
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">재즈</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    종교/명상/기타
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">클래식</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">팝</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">J-POP</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    <strong>LP</strong>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">OST</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    베스트셀러
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    예약음반
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    새로나온음악
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">이벤트</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    해외구매
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/music/2023/03/layer_230822_kim.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_dvd_layer">
                                <a href="./sub.html" title="블루레이">
                                    블루레이
                                </a>
                                <div
                                    id="head_dvd_layer"
                                    className="header_layer_box"
                                >
                                    <div className="category">
                                        <h3>
                                            <a href="./sub.html">블루레이</a>
                                        </h3>
                                        <div>
                                            <h4>
                                                <a
                                                    href="./sub.html"
                                                    className="arr"
                                                >
                                                    블루레이
                                                </a>
                                            </h4>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        3D 블루레이
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        공포/스릴러
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        다큐멘터리
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        드라마/코미디
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        애니메이션
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        액션/SF
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        음악
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>DVD</h4>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        공포/스릴러
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        교양/다큐멘터리
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        드라마/코미디
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        박스세트
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        성인
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        애니메이션
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        액션/어드벤쳐
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        유아/아동
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="./sub.html">
                                                        음악DVD
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        제작국가별
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        취미/스포츠
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        S.F./판타지
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">
                                                        TV시리즈
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">VCD</a>
                                                </li>
                                                <li>
                                                    <a href="./sub.html">VHS</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="./sub.html">
                                                    베스트셀러
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    예약 블루레이
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    새로나온 블루레이
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    예약알림 신청
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">이벤트</a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    초특가아울렛
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.aladin.co.kr/shop/wbrowse_event.aspx?CID=17759&amp;start=we">
                                                    단독특가
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./sub.html">
                                                    중고블루레이
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="banner">
                                            <a href="./sub.html">
                                                <img
                                                    src="https://image.aladin.co.kr/img/bn/dvd/2023/03/0803_light_hlayer.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li id="head_bookstore_layer" className="bookple">
                                <a href="./sub.html">북플 ·</a>
                                <a href="./sub.html">서재</a>
                                <div
                                    id="head_bookstore_layer"
                                    className="header_layer_box_s"
                                >
                                    <ul>
                                        <li>
                                            <a href="./sub.html">북플</a>
                                        </li>
                                        <li>
                                            <a href="./sub.html">알라딘서재</a>
                                        </li>
                                        <li>
                                            <a href="./sub.html">나의서재</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="util" id="headerTop_util">
                            <li>
                                <a href="./sub.html" title="로그인">
                                    로그인
                                </a>
                            </li>
                            <li>
                                <a href="./sub.html" title="회원가입">
                                    회원가입
                                </a>
                            </li>
                            <li>
                                <a href="./sub.html" title="마이페이지">
                                    마이페이지
                                </a>
                            </li>
                            <li>
                                <a href="./sub.html" title="고객센터">
                                    고객센터
                                </a>
                            </li>
                            <li id="headerBasketBtn">
                                <a href="./sub.html" title="장바구니">
                                    장바구니
                                    <span id="basketItemCount">(0)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </HeaderStyled.Top>
                <HeaderStyled.Middle className="header_middle">
                    {/* 홈 화면 바로가기 로고 */}
                    <div className="header_middle-logo">
                        <h1>
                            <a
                                href="./sub.html"
                                id="logoBtn"
                                title="첫화면으로 가기"
                                style={{ cursor: "pointer" }}
                            >
                                알라딘
                                <img src={aladin_logo_new} alt="알라딘" />
                            </a>
                        </h1>
                    </div>
                    <div className="search_field">
                        <form
                            id="QuickSearch"
                            className="relative"
                            name="QuickSearch"
                            action=""
                        >
                            <div id="global_search">
                                <dl>
                                    <dt id="searchTarget">통합검색</dt>
                                </dl>
                                <div id="serachInput-box">
                                    <input
                                        id="serachInput-txt"
                                        type="text"
                                        autoComplete="off"
                                    />
                                    <label
                                        // for="serachInput-txt"
                                        htmlFor="serachInput-txt"
                                        className="hide"
                                    >
                                        검색
                                    </label>
                                </div>
                                <div className="icon-down">
                                    <a href="./sub.html">
                                        <img src={i_arrdown_fill} alt="" />
                                    </a>
                                </div>
                            </div>
                            <button type="submit" className="search_btn">
                                검색
                            </button>
                            <a href="./sub.html" className="detail_search">
                                상세검색
                            </a>
                        </form>
                    </div>
                    <div className="ad_box">
                        <a href="./sub.html" title="헤더배너">
                            <img src={header_banner} alt="헤더배너" />
                        </a>
                    </div>
                </HeaderStyled.Middle>
                <HeaderStyled.Bottom className="header_bottom">
                    <ul className="l_menu" title="분야보기">
                        <li
                            id="head_layer_menu_container"
                            className="categoryall relative"
                        >
                            <a href="./sub.html" title="분야보기">
                                분야보기
                            </a>
                            {/* 펼치기 메뉴 */}
                            <div
                                id="head_layer_menu"
                                className="hdm hide"
                                style={{ width: "1030px" }}
                            >
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="280" valign="top">
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        국내도서
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                건강/취미
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    경제경영
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                공무원 수험서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                과학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                달력/기타
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                대학교재
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                만화
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                사회과학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    소설/시/희곡
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    수험서/자격증
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    어린이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                에세이
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                여행
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                역사
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                예술/대중문화
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                외국어
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                요리/살림
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                유아
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    인문학
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                자기계발
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                잡지
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                장르소설
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                전집/중고전집
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                종교/역학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                좋은부모
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                청소년
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                컴퓨터/모바일
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    초등학교참고서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                중학교참고서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    고등학교참고서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <br clear="all" />
                                                <div
                                                    style={{
                                                        padding: "12px 0 0 0",
                                                    }}
                                                ></div>
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        알라딘 굿즈
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                가방.파우치
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                데스크용품
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    독서용품
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                디지털
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    문구
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                생활용품
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                의류.잡화
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                리빙.키친
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td
                                                width="8"
                                                background="https://image.aladin.co.kr/img/header/2011/icon_line.gif"
                                            ></td>
                                            <td width="280" valign="top">
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        외국도서
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    영미도서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                ELT/어학/사전
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                가정/원예/인테리어
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                건강/스포츠
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                경제경영
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                공예/취미/수집
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                만화
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                소설/시/희곡
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                여행
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                역사
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                요리
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                인문/사회
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                종교/명상/점술
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                청소년
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                해외잡지
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    일본도서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                문학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                애니메이션 굿즈
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    어린이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                그림책
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                동화책
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                리더스
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                영어학습
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                챕터북
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                코스북
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    중국도서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                소설
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                중국어 교재
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    기타 언어권
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                독일 도서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                베트남 도서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                스페인 도서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                프랑스 도서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                기타 도서
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                잡지
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                코믹
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td
                                                width="8"
                                                background="https://image.aladin.co.kr/img/header/2011/icon_line.gif"
                                            ></td>
                                            <td width="140" valign="top">
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        ebook
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    경제경영
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                라이트노벨
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    로맨스
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    만화
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                사회과학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    소설/시
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                어린이
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    에세이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                역사
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                예술/대중문화
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    인문학
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    자기계발
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                종교/역학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                청소년
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                판타지/무협
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    BL
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    오디오북
                                                                </strong>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td
                                                width="8"
                                                background="https://image.aladin.co.kr/img/header/2011/icon_line.gif"
                                            ></td>
                                            <td width="140" valign="top">
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        온라인중고
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                중고매장
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    중고
                                                                    국내도서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                경제경영
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                만화
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                사회과학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                소설/시/희곡
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    어린이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                에세이
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                유아
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                인문학
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    중고 음반
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                가요
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                국악
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                월드뮤직
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    클래식
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                팝
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    중고
                                                                    DVD/블루레이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    중고
                                                                    외국도서
                                                                </strong>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td
                                                width="8"
                                                background="https://image.aladin.co.kr/img/header/2011/icon_line.gif"
                                            ></td>
                                            <td width="140" valign="top">
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        음반
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                가요
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                국악
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                월드뮤지
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                재즈
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                종교/명상/기타
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    클래식
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                팝
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                J-POP
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    LP
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                OST
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <br clear="all" />
                                                <div
                                                    style={{
                                                        padding: "12px 0 0 0",
                                                    }}
                                                ></div>
                                                <div className="categorysub_layer_t">
                                                    <a href="./sub.html">
                                                        블루레이
                                                    </a>
                                                </div>
                                                <div className="categorysub_layer_new2">
                                                    <ul>
                                                        <li>
                                                            <a href="./sub.html">
                                                                공포/스릴러
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                드라마/코미디
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                <strong>
                                                                    블루레이
                                                                </strong>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                애니메이션
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                액션/어드벤쳐
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                음악DVD
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                S.F./판타지
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="./sub.html">
                                                                TV시리즈
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div
                                    style={{
                                        width: "1020px",
                                        textAlign: "right",
                                        margin: "15px 0 0 0",
                                    }}
                                >
                                    <a href="./sub.html">
                                        <img
                                            src="https://image.aladin.co.kr/img/header/2011/btn_close.gif"
                                            alt="닫기"
                                            className="menu_close"
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li id="header_layaer_book_jiny">
                            <a
                                className="arr"
                                href="./sub.html"
                                title="추천마법사"
                            >
                                추천마법사
                            </a>
                            <div
                                id="head_layer_book_jiny"
                                className="header_layer_box_s"
                                style={{ width: "130px" }}
                            >
                                <ul>
                                    <li>
                                        <a href="./sub.html">마법사의 선택</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">신간알리미</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">서재이웃의선택</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">오늘 본 상품</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="header_layaer_book_best">
                            <a href="./sub.html" title="베스트셀러">
                                베스트셀러
                            </a>
                        </li>
                        <li id="header_layaer_book_newbook">
                            <a
                                className="arr"
                                href="./sub.html"
                                title="새로나온 책"
                            >
                                새로나온 책
                            </a>
                            <div
                                id="head_layer_book_newbook"
                                className="header_layer_box_s"
                                style={{ width: "105px" }}
                            >
                                <ul>
                                    <li>
                                        <a href="./sub.html">새로나온책</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">새로나올책</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="header_layaer_book_event">
                            <a className="arr" href="./sub.html" title="이벤트">
                                이벤트
                            </a>
                            <div
                                id="head_layer_book_sale"
                                className="header_layer_box_s"
                                style={{ width: "120px" }}
                            >
                                <ul>
                                    <li>
                                        <a href="./sub.html">이벤트</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">굿즈 총집합</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">정가인하도서</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">작가와의 만남</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="header_layaer_book_recom">
                            <a
                                className="arr"
                                href="./sub.html"
                                title="추천도서"
                            >
                                추천도서
                            </a>
                            <div
                                id="head_layer_book_recom"
                                className="header_layer_box_s"
                                style={{ width: "110px" }}
                            >
                                <ul>
                                    <li>
                                        <a href="./sub.html">추천도서</a>
                                    </li>
                                    <li>
                                        <a href="./sub.html">출판사 랭킹</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="./sub.html" title="단한권 인쇄소">
                                단한권 인쇄소 <span className="new">N</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="./sub.html"
                                className="tobelogo"
                                target="_blank"
                            >
                                투비컨티뉴드
                            </a>
                        </li>
                    </ul>
                    <ul className="r_menu" title="알라디너TV">
                        <li>
                            <a href="./sub.html" title="알라디너TV">
                                알라디너TV
                            </a>
                        </li>
                        <li className="relative">
                            <a href="./sub.html" title="이 책의 한 문장">
                                이 책의 한 문장
                            </a>
                        </li>
                        <li className="relative">
                            <a href="./sub.html" title="북펀드">
                                북펀드
                            </a>
                        </li>
                    </ul>
                </HeaderStyled.Bottom>
            </HeaderStyled.Container>
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <LogoImgStyled src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/board">
                                <TextP>독후감 게시판</TextP>
                            </Nav.Link>
                            <Nav.Link href="/books">
                                <TextP>도서 검색</TextP>
                            </Nav.Link>
                            <Nav.Link href="/guide">
                                <TextP>독후감 가이드</TextP>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {reviewObj}
                    {displayName ? (
                        <>
                            <TextP>
                                <strong>{displayName}</strong> 님 반가워요!
                            </TextP>
                            <LoginBtn
                                variant="secondary"
                                to="/signIn"
                                bgColor="transparent"
                                fontColor="#e67e22"
                                fontSize="2rem"
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </LoginBtn>
                            <Button onClick={onSignOutClick}>로그아웃</Button>
                        </>
                    ) : (
                        <>
                            <Button
                                bgColor="transparent"
                                fontColor="#e67e22"
                                fontWeight="900"
                                variant="link"
                                to="/signIn"
                            >
                                로그인
                            </Button>
                            <Button variant="secondary" to="/signIn">
                                회원가입
                            </Button>
                        </>
                    )}
                </Container>
            </Navbar> */}
        </>
    );
}

export default Header;
