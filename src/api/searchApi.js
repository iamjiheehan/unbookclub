import axios from 'axios';

const KAKAO_API_KEY = "6fe155fb9bfe366766c6d76594916d8c";

export const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
    timeout: 10000
});

export const kakaoSearch = async (params) => {
    return Kakao.get("/v3/search/book", { params });
};
