import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    html { }

    body {
    }

    @font-face {
        font-family: "DodoRounded_v2-Bold";
        src: url("https://village.dodopizza.com/fonts/DodoRounded_v2-Bold.otf") format("opentype");
    }

    @font-face {
        font-family: "DodoRounded_v2-Light";
        src: url("https://village.dodopizza.com/fonts/DodoRounded_v2-Light.otf") format("opentype");
    }

    @font-face {
        font-family: "DodoRounded_v2-Medium";
        src: url("https://village.dodopizza.com/fonts/DodoRounded_v2-Medium.otf") format("opentype");
    }

    @font-face {
        font-family: "DodoRounded_v2-Regular";
        src: url("https://village.dodopizza.com/fonts/DodoRounded_v2-Regular.otf") format("opentype");
    }

    @font-face {
        font-family: "DodoRoundedBlack-SemiExpanded";
        src: url("https://village.dodopizza.com/fonts/DodoRoundedBlack-SemiExpanded.ttf") format("truetype");
    }

    @font-face {
        font-family: "DodoRoundedBlack-Normal";
        src: url("https://village.dodopizza.com/fonts/DodoRoundedBlack-Normal.ttf") format("truetype");
    }

    @font-face {
        font-family: "DodoRoundedBlack-Expanded";
        src: url("https://village.dodopizza.com/fonts/DodoRoundedBlack-Expanded.ttf") format("truetype");
    }
`;