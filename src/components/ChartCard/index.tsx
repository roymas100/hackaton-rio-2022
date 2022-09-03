import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const ChartCard: React.FC = () => {
  return (
    <ChartCardWrapper>
      <header></header>
      <Line data={} />
    </ChartCardWrapper>
  );
};

export default ChartCard;

const ChartCardWrapper = styled.div``;
