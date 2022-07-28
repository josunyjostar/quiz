import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    /* scroll-behavior: smooth; */
}

*, *::before, *::after {
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
}

body {
  color: #222;
  margin: 0;
  padding: 0;
  /* border: 10px solid blue; */
}

dl, menu {
    list-style: none;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: normal; font-size: 20px; 
    margin: 0;
    padding: 0;
}

a {color: #222; text-decoration: none;}
a:hover {color: #390;}

button { cursor: pointer; outline: none; }
input , textarea , select { outline: none; }
button, input , textarea , select { font-family: 'Noto Sans KR',sans-serif; }
`;

export default GlobalStyle;
