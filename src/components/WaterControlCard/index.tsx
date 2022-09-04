import moment from "moment";
import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";

// import { Container } from './styles';

interface WaterControlCardProps {
  lastActiveted?: Date;
  value: number;
}

const WaterControlCard: React.FC<WaterControlCardProps> = ({
  lastActiveted,
  value,
}) => {
  return (
    <WaterControlCardWrapper>
      <div className="title-container">
        {lastActiveted && (
          <div className="last-update">{moment(lastActiveted).calendar()}</div>
        )}
        <div className="title-water-control">Controle de água Automatizada</div>
      </div>
      <div className="value-container">
        <img src={icons.drop} alt="Água" />
        <span>{value}m</span>
      </div>
    </WaterControlCardWrapper>
  );
};

export default WaterControlCard;

const WaterControlCardWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  background-color: var(--background);
  border-radius: 20px;
  padding: 16px;

  .last-update {
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;

    color: var(--white);

    opacity: 0.6;
  }

  .title-water-control {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: var(--white);
  }

  .value-container {
    width: 102px;
    height: 102px;
    border-radius: 100%;
    background-color: var(--fundo);

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 6px;

    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: var(--water);
    }
  }
`;
