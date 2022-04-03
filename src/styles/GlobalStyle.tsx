import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
  }
  body {
    max-height: calc(100vh - 140px);
    scrollbar-width: none;
  }
`

export default GlobalStyle
