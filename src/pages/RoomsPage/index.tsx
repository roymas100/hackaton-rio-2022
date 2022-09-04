import { useState } from "react";
import styled from "styled-components";
import AirConditionerCard from "../../components/AirConditionerCard";
import WaterControlCard from "../../components/WaterControlCard";
import { useRooms } from "../../hooks/useRooms";
import getAirConditioner from "../../mock/getAirConditioner";
import getWaterResources from "../../mock/getWaterResources";
import { IAirConditioner } from "../../types/AirConditioner";
import paz from "./paz.png";

export default function RoomsPage() {
  const { currentRoom } = useRooms();
  const airConditionerData = getAirConditioner.data;

  const [airData, setAirData] = useState<IAirConditioner[]>(airConditionerData);

  const waterResourcesData = getWaterResources.data;

  const handleAirSwitch = (air: IAirConditioner) => {
    setAirData((state) =>
      state.map((s) => {
        if (s.id === air.id) {
          return air;
        }
        return s;
      })
    );
  };

  return (
    <RoomPageContainer>
      <RoomPageContent backgroundImage={paz}>
        <img src={paz} alt="Paz" />

        <div className="room-switch">
          <span className="back-button">
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66671 13.8333L2.33337 7.49996L8.66671 1.16663"
                stroke="#1E1E20"
                stroke-width="2.11111"
                stroke-linecap="round"
              />
            </svg>
          </span>

          {currentRoom}

          <span className="next-button">
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66671 13.8333L2.33337 7.49996L8.66671 1.16663"
                stroke="#1E1E20"
                stroke-width="2.11111"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </RoomPageContent>

      <RoomPageBody>
        <h1>Painel inteligente</h1>
        <h2>Refrigeração</h2>
        <div className="air-container">
          {airData.map((air, index) => (
            <AirConditionerCard
              key={air.id}
              active={air.isActive}
              kilowatts={air.kiloWattsPerHour}
              index={index}
              temperature={air.temperature}
              onChange={() =>
                handleAirSwitch({ ...air, isActive: !air.isActive })
              }
            />
          ))}
        </div>
        <h2>Consumo de água</h2>
        <div className="air-container">
          {waterResourcesData.map((water) => (
            <WaterControlCard key={water.id} value={water.totalVolume} />
          ))}
        </div>
      </RoomPageBody>
    </RoomPageContainer>
  );
}

const RoomPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e20;

  img {
  }
`;

const RoomPageContent = styled.div<{ backgroundImage: any }>`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundImage }) => backgroundImage};
  background-repeat: repeat-x;

  .room-switch {
    position: absolute;
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .back-button,
    .next-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #efefff;
      border-radius: 10.6667px;
      padding: 11px 14px;
      height: 35px;
      width: 35px;
      svg {
        height: 12px;
      }
    }
    .next-button {
      svg {
        transform: rotate(180deg);
      }
    }
    color: #ffff;
    padding: 8px;
    background: radial-gradient(
        162.46% 520.88% at 9.83% 3.6%,
        rgba(255, 255, 255, 0.56) 0%,
        rgba(217, 217, 217, 0.08) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay;

    /* Glassmorphism */
    backdrop-filter: blur(12px);

    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }
`;

const RoomPageBody = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: var(--white);
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    color: var(--white);
    line-height: 24px;
  }

  .air-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;
