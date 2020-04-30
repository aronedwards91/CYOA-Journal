import { createGlobalStyle } from "styled-components";

import data from "./constants";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: '${data.themeing.fontname}';
    src: url(data:font/ttf;base64,${data.themeing.font} ) format('truetype');
  }

  body {
    margin: 0;
    font-family: '${data.themeing.fontname}', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${data.colors.mainText};
  }

  * {
    box-sizing: border-box;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
`;

export default GlobalStyle;
