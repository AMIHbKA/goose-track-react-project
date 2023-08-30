import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import InterRegular from './fonts/Inter/Inter-Regular.woff2';
import InterMedium from './fonts/Inter/Inter-Medium.woff2';
import InterSemiBold from './fonts/Inter/Inter-SemiBold.woff2';
import InterBold from './fonts/Inter/Inter-Bold.woff2';
import PoppinsRegular from './fonts/Poppins/Poppins-Regular.woff2';
import PoppinsMedium from './fonts/Poppins/Poppins-Medium.woff2';
import CoolveticaRegular from './fonts/Coolvetica/Coolvetica-Regular.woff2';
import CoolveticaItalic from './fonts/Coolvetica/Coolvetica-Italic.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    src: url(${InterBold}) format('woff2');
  font-display: fallback;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
      src: url(${InterSemiBold}) format('woff2');
  font-display: fallback;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    src: url(${InterMedium}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url(${InterRegular}) format('woff2');
    font-display: fallback;
  }

@font-face {
  font-family: 'Poppins';
  font-weight: 500;
  src: url(${PoppinsMedium}) format('woff2');
  font-display: fallback;
}

@font-face {
  font-family: 'Poppins';
  font-weight: 400;
  src: url(${PoppinsRegular}) format('woff2');
  font-display: fallback;
}

@font-face {
  font-family: 'Coolvetica';
  font-weight: 400;
  src: url(${CoolveticaRegular}) format('woff2');
  font-display: fallback;
}

@font-face {
  font-family: 'Coolvetica';
  font-weight: 400;
  font-style: italic;
  src: url(${CoolveticaItalic}) format('woff2');
  font-display: fallback;
}

html {
    .no-scroll {
      overflow-y: hidden;
    }
  }

body {
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: ${props => props.theme.colors.mainText};
  background: ${props => props.theme.colors.mainBack};
  transition: .3s ease;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul, ol, li, p, h1, h2, h3, h4 ,h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html, body {
    height: 100vh;
  }

  body>div, main {
    height: 100%;
  }
`;
