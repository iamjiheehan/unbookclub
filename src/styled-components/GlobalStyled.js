import { createGlobalStyle } from "styled-components";
import Normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${Normalize};
    
    * {
        margin: 0;
        /* text-align: left; */
        box-sizing: border-box;
    }

    body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
        font-family: Malgun Gothic,Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif!important;
        line-height: 18px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    p {
        font-size: 24px;
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
