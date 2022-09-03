import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import AppProvider from "./hooks/AppProvider";
import { ResourceType } from "./types/ResourceType";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
