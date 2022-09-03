import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppWrapper>
      <AppProvider>
        <Home />
      </AppProvider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  max-width: 480px;
  padding: 24px 0;
`;
