import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import AppProvider from "./hooks/AppProvider";
import { ResourceType } from "./types/ResourceType";
import moment from "moment";

import "moment/locale/pt-br"; // without this line it didn't work
moment.locale("pt-br");

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
