import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    src: url("../fonts/JetBrainsMono-VariableFont_wght.woff2") format("woff2-variations");
    font-family: "JetBrains Mono", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100 900;
    font-style: normal;
}
@font-face {
    src: url("../fonts/JetBrainsMono-Italic-VariableFont_wght.woff2") format("woff2-variations");
    font-family: "JetBrains Mono", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100 900;
    font-style: italic;
}

@font-face {
    src: url("../fonts/Inter-VariableFont_opsz,wght.woff2") format("woff2-variations");
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100 900;
    font-style: normal;
}
@font-face {
    src: url("../fonts/Inter-Italic-VariableFont_opsz,wght.woff2") format("woff2-variations");
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100 900;
    font-style: italic;
}


*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: 0.3s;
}
`;
