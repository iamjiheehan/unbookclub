import styled from "styled-components";

export const Wrap = styled.div`
    width: 1030px;
    margin: 5rem auto;
    overflow: hidden;

    h1 {
        text-align: center;
        margin-bottom: 3rem;
    }

    a {
        margin: 2rem auto;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        font-size: 1rem;
    }

    input, textarea {
        margin-top: 2rem;
        border: none;
        border-bottom: 2px solid rgb(68, 150, 217);
        padding: 0.5rem 0.5rem;
        width: 100%;
    }

    textarea {
        resize: none;
        height: 300px;
    }

    .input-wrap {
        position: relative;
    }


    .btn-wrap {
        display: flex;
        justify-content: center;
        

        &.board {
            justify-content: space-between;
        }
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* 어두운 배경색 및 투명도 조절 */
    z-index: 1; /* 다른 요소 위에 나타나도록 설정 */
`;

export const FormContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 화면 중앙으로 이동 */
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    z-index: 2; /* 다른 요소 위에 나타나도록 설정 */
`;
