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
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ResourceType } from "../../types/ResourceType";
import styled from "styled-components";

const Control: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { setType, type } = useColor();

  return <ControlWrapper type={type}></ControlWrapper>;
};

export default Control;

const ControlWrapper = styled.div<{ type: ResourceType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  min-height: 100vh;
  width: 100%;

  background: var(--background);
`;
