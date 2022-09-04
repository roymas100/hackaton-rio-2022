import React from "react";
import Menu from "../../components/Menu";
import { usePages } from "../../hooks/usePages";
import Home from "../Home";
import RoomsPage from "../RoomsPage";
import { Container, MainPageContainer } from "./styles";

export default function MainPage() {
  const { currentPage } = usePages();
  return (
    <MainPageContainer>
      <Container>
        {currentPage === "dados" && <Home />}
        {currentPage === "rooms" && <RoomsPage />}
      </Container>
      <Menu />
    </MainPageContainer>
  );
}
