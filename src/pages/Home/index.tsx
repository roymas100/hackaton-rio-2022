import React from "react";
import styled from "styled-components";
import EnergyUsedCard from "../../components/EnergyUsedCard";
import { Carousel } from "react-responsive-carousel";
import Header from "../../Header";
import ScrollContainer from "react-indiana-drag-scroll";
import TabButton from "../../components/TabButton";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <div className="padding">
        <Header />
      </div>

      <div className="padding">
        <Carousel>
          <EnergyUsedCard />
          <EnergyUsedCard />
          <EnergyUsedCard />
        </Carousel>
      </div>

      <div className="padding">
        <h3>Dashboard</h3>
      </div>

      <ScrollContainer className="scroll-container">
        <TabButton active icon="room">
          Quartos
        </TabButton>
        <TabButton icon="corridor">Corredor</TabButton>
        <TabButton icon="gourmet">Área gourmet</TabButton>
      </ScrollContainer>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  .padding {
    width: 100%;
    padding: 0 24px;
  }

  .carousel-root {
    width: 100%;
  }

  .scroll-container {
    display: flex;
    gap: 22px;
    width: 100%;
    padding-left: 24px;
  }
`;
