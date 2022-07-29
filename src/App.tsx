import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Quiz from "./page/Quiz";

const RootLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RootLayout>
        <Quiz />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
