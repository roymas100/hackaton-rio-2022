import React, { useState } from "react";
import EnergyUsedCard from "../../components/EnergyUsedCard";
import { Carousel } from "react-responsive-carousel";
import Header from "../../Header";
import ScrollContainer from "react-indiana-drag-scroll";
import TabButton from "../../components/TabButton";
import ChartCard from "../../components/ChartCard";
import WaterUsedCard from "../../components/WaterUsedCard";
import Notifications from "../Notifications";
import "chartjs-plugin-zoom";
// import TemperatureCard from "../../components/TemperatureCard";
import { useColor } from "../../hooks/ColorProvider";
import { AppWrapper, HomeWrapper, Section } from "./styles";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import icons from "../../assets/icons";

const Home: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { setType, type } = useColor();

  return (
    <AppWrapper type={type}>
      <HomeWrapper type={type}>
        <div className="padding">
          <Header onNotificationClick={() => setVisible(true)} />
        </div>

        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          <EnergyUsedCard
            date={new Date()}
            onClick={() => setType("energy")}
            active={type === "energy"}
          />
          <WaterUsedCard
            date={new Date()}
            onClick={() => setType("water")}
            active={type === "water"}
          />
        </ScrollMenu>

        <Section>
          <h3 style={{ paddingLeft: 24 }}>Dashboard</h3>

          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            <TabButton active icon="room" type={type}>
              Quartos
            </TabButton>
            <TabButton icon="corridor">Corredor</TabButton>
            <TabButton icon="gourmet">Área gourmet</TabButton>
          </ScrollMenu>

          <div className="padding">
            <ChartCard
              type={type}
              title={type === "water" ? "Água utilizada" : "Uso de Energia"}
              subTitle={type === "water" ? "Utilizada hoje" : "Usada hoje"}
            />
          </div>
        </Section>

        <Notifications
          visible={visible}
          requestClose={() => setVisible(false)}
        />
      </HomeWrapper>
    </AppWrapper>
  );
};

export default Home;

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollPrev()}
      style={{ background: "transparent", height: "100%" }}
    >
      <img
        src={icons.arrowRight}
        alt="Passar para esquerda"
        style={{ rotate: "180deg", color: "#D0DE06" }}
        width={30}
        height={30}
      />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollNext()}
      style={{ background: "transparent", height: "100%" }}
    >
      <img
        src={icons.arrowRight}
        alt="Passar para direita"
        style={{ filter: "grayscale(100%)" }}
        width={30}
        height={30}
      />
    </button>
  );
}
