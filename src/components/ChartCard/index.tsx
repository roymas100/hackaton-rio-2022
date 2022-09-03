import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
  BubbleDataPoint,
} from "chart.js";
import { ResourceType } from "../../types/ResourceType";
import icons from "../../assets/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      pan: {
        mode: "x",
      },
    },
    pan: {
      enabled: true,
      mode: "x",
    },
    title: {
      display: true,
    },
  },
  pan: {
    enabled: true,
    mode: "x",
  },
  zoom: {
    enabled: true,
    mode: "x",
  },
};

const labels = ["1PM", "2PM", "3PM", "5PM", "6PM", "7PM", "8PM"];

interface ChartCardProps {
  title: string;
  type?: ResourceType;
  subTitle: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  type = "energy",
  title,
  subTitle,
}) => {
  const data: ChartData<
    "line",
    (number | ScatterDataPoint | BubbleDataPoint | null)[],
    unknown
  > = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: type === "water" ? "#06DEDE" : "#B3EC05",
        backgroundColor: type === "water" ? "#06DEDE" : "#B3EC05",
        pointRadius: 0,
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <ChartCardWrapper type={type}>
      <header>
        <span className="icon-span">
          <img
            src={type === "water" ? icons.water : icons.lighting}
            alt="Icon"
          />
        </span>
        <div className="card-info">
          <p className="card-name">{title}</p>
          <p className="card-description">{subTitle}</p>
        </div>
        <p className="card-value">32kWz</p>
      </header>
      <Line data={data} options={options} />
    </ChartCardWrapper>
  );
};

export default ChartCard;

const ChartCardWrapper = styled.div<{ type: ResourceType }>`
  background-color: var(--background);
  padding: 24px;
  border-radius: 16px;

  header {
    width: 100%;

    display: flex;
    gap: 12px;

    .icon-span {
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 42px;
      height: 42px;

      background: var(--${({ type }) => type}-gradient);

      img {
        width: 13px;
        height: 22px;
      }
    }

    .card-name {
      font-weight: 400;
      font-size: 16px;
    }

    .card-info {
      flex: 2;
    }

    .card-description {
      font-weight: 400;
      font-size: 12px;
      color: var(--white-40);
    }

    .card-value {
      font-weight: 500;
      font-size: 24px;
      background: var(--${({ type }) => type}-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`;
