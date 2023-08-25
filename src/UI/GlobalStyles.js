import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {

  .no-scroll {
    overflow-y: hidden;
  }
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: ${props => props.theme.colors.mainBack};
  color: ${props => props.theme.colors.mainText};
  transition: .3s ease;
 }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul, li, p, h1, h2, h3, h4 ,h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
