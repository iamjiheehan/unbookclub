import styled from 'styled-components';


export const Wrap = styled.div`
    overflow: hidden;
    background-color: #eee;

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

    .home-banner .banner-content {
        margin-left: 80px;
        max-width: 100%;
    }

    .center {
        padding: 45px 40px 50px;
        display: -moz-gird;
        display: grid;
        margin: 0 auto;
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
`;


