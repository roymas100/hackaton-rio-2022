import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";
import Button from "../Button";

// import { Container } from './styles';

const EnergyUsedCard: React.FC = () => {
  return (
    <EnergyUsedCardWrapper>
      <div className="container">
        <div className="info">
          <small>13 de setembro, 2022</small>
          <p>Energia Usada</p>
          <span>
            <h1>142.6</h1>
            <small>kWz</small>
          </span>
          <small>12% menos que ontem</small>
        </div>
        <div className="see-details">
          <img src={icons.energyLeaf} alt="Energia usada" />
          <Button>Ver detalhes</Button>
        </div>
      </div>
    </EnergyUsedCardWrapper>
  );
};

export default EnergyUsedCard;

const EnergyUsedCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 24px;

  .container {
    display: flex;
    gap: 24px;
    background-color: var(--background);
    border-radius: 20px;
    padding: 36px;
    flex-wrap: nowrap;
  }

  .info {
    display: flex;
    flex-direction: column;
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
