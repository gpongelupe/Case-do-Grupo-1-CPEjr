import { createGlobalStyle } from "styled-components";
import minecraft from "../fonts/minecraft.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'minecraft';
     src: url(${minecraft}) format('truetype');
     font-weight: normal;
     font-style: normal;
   };
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
body{
  font-family: 'minecraft';
  src: url(${minecraft}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
html,
body,
#root{
  height: 100%;
}
html{
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce){
    scroll-behavior:auto;
  }
}
`;
export default GlobalStyles;

  