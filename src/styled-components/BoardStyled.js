import styled from "styled-components";

export const Wrap = styled.div`
    width: 1030px;
    margin: 0 auto;
    overflow: hidden;

    .main-banner {
        padding: 0 40px;
    }

    .main-banner .main-banner-container {
        -moz-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: flex;
        margin: 0 auto;
        max-width: 100%;
        width: 1030px;
        justify-content: center;
    }

    .main-banner .main-banner-content {
        margin-left: 80px;
        max-width: 100%;
    }

    .center {
        margin-top: 50px;
        padding: 55px 0;
        background: #f8f8f8;
    }
`;

export const Content = styled.div`
    background: ${(props) => props.background || '#f8f8f8'};
    overflow: hidden;

    padding: 4rem 0;
    
    .content-btn {
        display: flex;
        -webkit-box-align: center;
        padding-top: 4rem;
        align-items: baseline;
        -webkit-box-pack: center;
        justify-content: center;
        flex-wrap: wrap;
    }   

    .content-wrap {
        /* display: flex;
        gap: 2rem; */
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(3, 1fr);
        width: 1260px;
        padding-bottom: 55px;
        margin: 0 auto 0;
    }

    .content-wrap .content-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .item_info {
        margin-top: 17px;
        text-align: left;
        width: 380px;
        height: auto;
        overflow: hidden;
    }

    .item_info .info_row {
        margin-top: 0.5rem;
    }

    .item_info .info_title {
        height: 40px;
        /* overflow: hidden; */
        word-break: break-all;
        line-height: 20px;
        font-weight: bold;
        font-size: 15px;
        color: #333;
    }

    .item_info .info_auth {
        display: block;
        height: 16px;
        overflow: hidden;
        line-height: 16px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item_info .info_readBox {
        display: -webkit-box;
        padding: 10px 15px;
        word-break: break-all;
        line-height: 20px;
        color: #666;
        text-align: left;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        border-radius: 3px;
        height: 18rem;
        overflow: scroll;

        .info_desc {
            font-size: 13px;
        }
    }

    .btn-wrap {
        margin: 1rem 0.5rem 0px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: flex-end;
        gap: 1rem;
    }

    .seemore-wrap {
        text-align: center;
    }
    
`;
