import { createGlobalStyle } from "styled-components";
import Normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${Normalize};
    
    @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'SUITE-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, td, tr {
        color: #444444;
        margin: 0px;
        padding: 0px;
        font-size: 12px;
        line-height: 18px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 18px;
        margin: 0;
    }

    input {
        /* border-radius: 50px !important; */
    }

    button:hover {
        cursor: pointer;
    }

    div {
        text-align: left;
        color: #444444;
    }

    a {
        text-decoration: none;
        color: #444444;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .relative {
        position: relative;
    }

    .hide {
        opacity: 0;
    }

    .show {
        opacity: 1;
    }
`;

export default GlobalStyle;
