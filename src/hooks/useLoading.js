// Loading.js
import React, { createContext, useContext, useState } from 'react';
import { LoadingBack, LoadingText } from '../styled-components/LoadingStyled';
import Cube from "../static/images/cube.gif";

const LoadingContext = createContext();

export const useLoadingContext = () => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoadingContext must be used within a LoadingProvider');
    }
    return context;
};

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    return (
        <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
        {children}
        </LoadingContext.Provider>
    );
};

export const Loading = () => {
    const context = useLoadingContext();

        if (!context) {
        return null; // or render a default loading state
        }

        const { loading } = context;

        return (
        loading && (
            <LoadingBack>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Cube} alt="로딩중" width="5%" />
            </LoadingBack>
        )
    );
};