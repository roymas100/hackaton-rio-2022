import moment from "moment";
import React from "react";
import styled, { css } from "styled-components";
import icons from "../../assets/icons";
import Button from "../Button";
import "moment/locale/pt-br"; // without this line it didn't work
moment.locale("pt-br");
interface WaterUsedCardProps {
  date: Date;
  active?: boolean;
  onClick: () => void;
}

const WaterUsedCard: React.FC<WaterUsedCardProps> = ({
  date,
  active = false,
  onClick,
}) => {
  return (
    <WaterUsedCardWrapper active={active} onClick={onClick}>
      <div className="container">
        <div className="info">
          <small>{moment(date).format("LL")}</small>
          <p>Água utilizada</p>
          <span>
            <h1>325.2</h1>
            <small>litros</small>
          </span>
          <small>23% menos que ontem</small>
        </div>
        <div className="see-details">
          <img src={icons.water} alt="Água utilizada" />
          {/* <Button>Ver detalhes</Button> */}
        </div>
      </div>
    </WaterUsedCardWrapper>
  );
};

export default WaterUsedCard;

const WaterUsedCardWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  gap: 24px;

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
        border: 1px solid var(--water);
      `}
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      display: flex;
      gap: 4px;
      align-items: end;

      h1 {
        color: var(--water);
      }
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
