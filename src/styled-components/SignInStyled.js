//SignIn && SignUp 페이지에서 사용됨
import styled from "styled-components";

export const Container = styled.div`
    width: 1030px;
    margin: 4rem auto;

    h1 { 
        margin: 3rem auto;
        text-align: center;
    }

    .wrap {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 3rem;
    }

    .form-wrap {
        flex-grow: 1;

        p~p {
            margin: 1rem auto;
        }

        .btn-wrap {
            width: 100%;
            text-align: right;
        }
    }
    
    .img-wrap {
        width: 40%;
        img {
            width: 100%;
        }

    }

    .text-wrap {
        text-align: right;
        margin: 0.5rem auto 4rem;
    }

    .text-wrap .btn-wrap {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .social-wrap {
        p {
            text-align: center;
        }
    }

    .social-wrap .social-btn-wrap {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
    }
`;
