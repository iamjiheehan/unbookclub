import { useEffect } from "react";

function useScrollToTopButton() {
    useEffect(() => {
        const scrollToTopButton = document.querySelector('.btnScrollToTop');

        if (scrollToTopButton) {
            scrollToTopButton.addEventListener('click', scrollToTop);
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 부드러운 스크롤 효과
            });
        }

        return () => {
            if (scrollToTopButton) {
                scrollToTopButton.removeEventListener('click', scrollToTop);
            }
        };
    }, []);
}

export default useScrollToTopButton;
