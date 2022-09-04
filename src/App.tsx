import React from "react";
import Home from "./pages/Home";
import AppProvider from "./hooks/AppProvider";
import RoomsPage from "./pages/RoomsPage";
import { RoomsContextProvider } from "./context/RoomsContext";
import MainNavbar from "./components/MainNavbar";
import { PageContextProvider } from "./context/PageContext";
import moment from "moment";
import "moment/locale/pt-br"; // without this line it didn't work
moment.locale("pt-br");

function App() {
  return (
    <PageContextProvider>
      <RoomsContextProvider>
        <AppProvider>
          <Home />
          <RoomsPage />
          <MainNavbar />
        </AppProvider>
      </RoomsContextProvider>
    </PageContextProvider>
  );
}

export default App;
