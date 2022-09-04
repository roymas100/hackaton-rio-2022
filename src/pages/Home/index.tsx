import React, { useState } from "react";
import EnergyUsedCard from "../../components/EnergyUsedCard";
import Header from "../../Header";
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
import getAirConditionerLog from "../../mock/getAirConditionerLog";
import getAirConditioner from "../../mock/getAirConditioner";
import getWaterResourcesLog from "../../mock/getWaterResourcesLog";

const Home: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { setType, type } = useColor();
  const [tabActive, setTabActive] = useState<string>("room");

  const airConditionerLogData = getAirConditionerLog.data;
  const waterResourceLogData = getWaterResourcesLog.data;
  const airConditionerData = getAirConditioner.data;

  const labels = () => {
    if (type === "water") {
      return waterResourceLogData
        .filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.date === value.date)
        )
        .map((log) => log.date);
    }

    return airConditionerLogData
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.date === value.date)
      )
      .map((log) => log.date);
  };

  const values = () => {
    if (type === "water") {
      return labels().map((label) => {
        let daily = 0;

        waterResourceLogData.forEach((log) => {
          if (log.date === label) {
            daily = daily + log.dailyVolume;
          }
        });

        return daily;
      });
    }

    return labels().map((label) => {
      let kw = 0;
      let hour = 0;

      airConditionerLogData.forEach((log) => {
        if (log.date === label) {
          hour = hour + log.activeHours;

          const foundAir = airConditionerData.find(
            (a) => a.id === log.deviceId
          );
          if (!!foundAir) {
            kw = kw + foundAir.kiloWattsPerHour;
          }
        }
      });

      return kw * hour;
    });
  };

  const total = () => {
    let sum = 0;

    for (const i of values()) {
      sum = sum = i;
    }

    return sum;
  };

  return (
    <AppWrapper type={type}>
      <HomeWrapper type={type}>
        <div className="padding">
          <Header onNotificationClick={() => setVisible(true)} />
        </div>

        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          <EnergyUsedCard
            value={12}
            date={new Date()}
            onClick={() => setType("energy")}
            active={type === "energy"}
          />
          <WaterUsedCard
            value={12}
            date={new Date()}
            onClick={() => setType("water")}
            active={type === "water"}
          />
        </ScrollMenu>

        <Section>
          <h3 style={{ paddingLeft: 24 }}>Dashboard</h3>

          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            <TabButton
              active={tabActive === "room"}
              onClick={() => setTabActive("room")}
              icon="room"
              type={type}
            >
              Quartos
            </TabButton>
            <TabButton
              active={tabActive === "porta"}
              onClick={() => setTabActive("porta")}
              icon="porta"
              type={type}
            >
              Corredor
            </TabButton>
            <TabButton
              active={tabActive === "calendar"}
              onClick={() => setTabActive("calendar")}
              icon="calendar"
              type={type}
            >
              Área gourmet
            </TabButton>
          </ScrollMenu>

          <div className="padding">
            <ChartCard
              total={total()}
              labels={labels()}
              data={values()}
              type={type}
              title={type === "water" ? "Gasto de água" : "Uso de Energia"}
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
      disabled={isFirstItemVisible}
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
      disabled={isLastItemVisible}
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
