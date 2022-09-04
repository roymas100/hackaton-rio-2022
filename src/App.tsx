import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import AppProvider from "./hooks/AppProvider";
import RoomsPage from "./pages/RoomsPage";
import {RoomsContextProvider} from "./context/RoomsContext";
import { PageContextProvider } from "./context/PageContext";
import MainNavbar from "./MainNavbar";

function App() {
  return (
    <PageContextProvider>
      <RoomsContextProvider>
              <AppProvider>
                  {/* <Home /> */}
                  <RoomsPage/>
                  <MainNavbar/>
              </AppProvider>
      </RoomsContextProvider>
    </PageContextProvider>

  );
}

export default App;
