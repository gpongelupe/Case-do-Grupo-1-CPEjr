import { createGlobalStyle } from "styled-components";
import minecraft from "../fonts/minecraft.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'minecraft';
    src: url(${minecraft}) format('truetype');
    font-weight: normal;
    font-style: normal;
  };
`
  