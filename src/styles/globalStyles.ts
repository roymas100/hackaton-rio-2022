import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
    --white: #ffffff;
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

 p {
    color: var(--white);
 }
`;
