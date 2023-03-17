import { useMemo } from 'react';

const useFormatDate = (timestamp) => {
    const formattedDate = useMemo(() => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
    }, [timestamp]);

    return formattedDate;
};

export default useFormatDate;
