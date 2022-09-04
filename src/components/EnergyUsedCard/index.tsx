import moment from "moment";
import React from "react";
import styled, { css } from "styled-components";
import icons from "../../assets/icons";
interface EnergyUsedCardProps {
  date: Date;
  active?: boolean;
  onClick: () => void;
}

const EnergyUsedCard: React.FC<EnergyUsedCardProps> = ({
  date,
  active = false,
  onClick,
}) => {
  return (
    <EnergyUsedCardWrapper active={active} onClick={onClick}>
      <div className="container">
        <div className="info">
          <small>{moment(date).format("LL")}</small>
          <p>Energia Usada</p>
          <span>
            <h1>142.6</h1>
            <small>kWz</small>
          </span>
          <small>12% menos que ontem</small>
        </div>
        <div className="see-details">
          <img src={icons.energyLeaf} alt="Energia usada" />
          {/* <Button>Ver detalhes</Button> */}
        </div>
      </div>
    </EnergyUsedCardWrapper>
  );
};

export default EnergyUsedCard;

const EnergyUsedCardWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  gap: 24px;

  small {
    white-space: nowrap;
  }
  .container {
    display: flex;
    gap: 24px;
    background-color: var(--background);
    border-radius: 20px;
    padding: 36px;
    flex-wrap: nowrap;

    ${({ active }) =>
      active &&
      css`
        border: 1px solid var(--energy);
      `}
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    span {
      display: flex;
      gap: 4px;
      align-items: end;
    }
  }

  .see-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      width: 66px;
      height: 66px;
    }
  }
`;
