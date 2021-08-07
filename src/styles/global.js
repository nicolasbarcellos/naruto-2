import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: normal;
    src: local('Trebuchet MS'), url('trebuc.woff') format('woff');
    }

    @font-face {
  font-family: 'GT America', sans-serif;
  src: url(../fonts/GTAmericaBold.ttf);
}


  :root {
    --azul: #0d316b;
    --azul-medium: #1e3045;
    --azul-light: #637ea0;
    --orange: #ff7200;
    --background: #fff;
    --text-title: #fefefe;
    --text-menu: #e9e9e9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    width: 100vw;
    overflow-x: hidden;
    font-size: 62.50%;

    @media (max-width: 1080px) {
      font-size: 58.82%;
    }
    @media (max-width: 72rem) {
      font-size: 55.55%;
    }

    @media (min-width: 1800px) {
      font-size: 70%;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }

  dl, ol, ul {
    margin-top: 0;
    margin-bottom: 0rem;
}
  ol, ul {
    padding-left: 0rem;
}

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font-family: 'Trebuchet MS', sans-serif !important;
    overflow-x: hidden
  }

  button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Trebuchet MS';
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600 !important;
  }

  button {
    cursor: pointer;
  }

    h1, h2, h3 {
      font-weight: 600;
    }
    

 
`;
