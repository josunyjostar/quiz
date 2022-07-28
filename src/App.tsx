import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";

const RootLayout = styled.div`
  min-height: 100vh;
  padding: 10px 0;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RootLayout>
        <h1>Quiz App</h1>
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
