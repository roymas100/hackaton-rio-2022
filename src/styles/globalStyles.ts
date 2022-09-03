import { createGlobalStyle } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const GlobalStyles = createGlobalStyle`
 :root {
    --white: #ffffff;
    --white-40: rgba(255, 255, 255, 0.4);
    --black: #121212;

    --primary: #D0DE06;
    --primary-30: rgba(208, 222, 6, 0.3);
    --background: #282A30;
    --primary-gradient:  linear-gradient(138.73deg, #E5D405 -1.14%, #B3EC05 76.63%);
 }

 * {
 font-family: 'Poppins';

    box-sizing: border-box;
    padding: 0;
    margin: 0;
 }

 button {
    border: 0;
 }

 h1 {
   font-weight: 500;
font-size: 48px;
color: var(--primary);
line-height: 48px;
 }

 h3 {
   font-weight: 700;
font-size: 18px;
color: var(--white);
line-height: 18px;
 }

 p {
    color: var(--white);
font-size: 18px;
 }

 small {
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;


color: var(--white-40);
 }
`;
