import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Inter", sans-serif;
        background-color: ${({ theme }) => theme.colors.gray[900]};
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyles