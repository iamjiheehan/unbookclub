import styled from 'styled-components';


export const Wrap = styled.div`
    overflow: hidden;
    /* background-color: #eee; */

    .home-banner {
        background: linear-gradient(270deg, rgb(51 175 233 / 45%) 31.77%, rgba(248, 236, 231, 0));
        padding: 0 40px;
    }
    .home-banner .home-banner-container {
        -moz-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: flex;
        margin: 0 auto;
        max-width: 100%;
        width: 1030px;
    }

    .home-banner .wrap-button {
        -moz-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: flex;
        max-width: 100%;
        width: 500px;
    }

    .center {
        padding: 45px 40px 50px;
        display: -moz-gird;
        display: grid;
        margin: 2rem auto;
        max-width: 100%;
        width: 1030px;
        gap: 30px;
        grid-template-columns: repeat(3,minmax(0,1fr));
        
    }

    .center .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .center .content img {
        width: 100%;
    }

    .mid-banner {
        padding: 0 40px;
    }
    
    .mid-banner .mid-banner-container {
        -moz-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: flex;
        margin: 0 auto;
        max-width: 100%;
        width: 1030px;
        justify-content: center;
    }

    .mid-banner .mid-banner-content {
        margin-left: 80px;
        max-width: 100%;
    }

    .display {
        margin: 5rem auto;
    }

    .display .display-content, .display .display-title {
        text-align: center;
        font-weight: bold;
        margin: 3rem auto;
    }

    .display .display-title::after {
        content: ' >';
    }

    .display .display-title:hover {
        opacity: 0.5;
    }

    /* .display h3 {
        margin-bottom: 1rem;
    } */

    /* .display .display-text {
        display: flex;
        justify-content: center;
        gap: 1rem;
    } */
`;


export const Card = styled.div`
    border-radius: 5px;
    box-shadow: rgba(51, 51, 51, 0.2) 0px 5.5px 5px 0px;
    margin: 25px 0px;
    background: rgb(252, 250, 249);
    color: rgb(51, 51, 51);
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    padding: 20px 10px 10px;
    word-break: break-word;
    display: flex;
    flex-direction: column;
    max-width: 100% !important;
    min-width: 275px !important;
    width: 100% !important;
    align-items: center;
    
.card-container {}

    img {
            width: 100%;
            vertical-align: middle;
        }

    .card-center {
        align-items: center;
        display: -moz-flex;
        display: flex;
        -moz-flex-direction: column;
        flex-direction: column;

        gap: 10px;
    }

    .card-center .card-img {
        background-color: #fff;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid #f5f5f5;
        border-radius: 100px;
        height: 92px;
        width: 92px;
        margin: 0 auto 12px;
        position: relative;
        overflow: hidden;
    }

    .card-center .card-desc {
        text-align: center;
    }

    .card-center .card-discuss {
        display: inline;
        font-size: 14px;
    }

    .card-center .card-discuss_icon:before {
        content: ">";
    }

    .card-book_title {
        font-size: 12px;
        height: 17px;
        letter-spacing: .05em;
        line-height: 140%;
        margin-bottom: 10px;
        text-align: center;
        text-transform: uppercase;
    }

    .card-book_img {
        background: #c4c4c4;
        box-shadow: 0 4px 4px rgba(0,0,0,.25);
        cursor: pointer;
        margin: 0 auto 20px;
        width: 92px;
        height: 138px;

    }


`;
export const WideBanner = styled.div`
    text-transform: uppercase;
    width: 100vw;
    height: 50px;
    background-color: rgb(51, 175, 233);

    color: white;
    text-align: center;
    vertical-align: middle;

    letter-spacing: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;

    h4 {
        margin: 0;
    }

`;
