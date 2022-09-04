import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";
import Switch from "react-switch";
import moment from "moment";

interface AirConditionerCardProps {
  kilowatts: string;
  temperature: string;
  index: number;
  lastActive: Date;
  active: boolean;
  onChange: (boolean: boolean) => void;
}

const AirConditionerCard: React.FC<AirConditionerCardProps> = ({
  kilowatts,
  temperature,
  index,
  active,
  lastActive,
  onChange,
}) => {
  return (
    <AirConditionerCardWrapper>
      <div className="section-1">
        <div className="rounded-icon">
          <img src={icons.conditioner} alt="Ar condicionado" />
        </div>
        <div className="arrow-icon">
          <img src={icons.arrowRight} alt="Passar para a direita" />
        </div>
      </div>

      <div className="section-2">
        <img src={icons.lighting} alt="lighting" />
        <small>{kilowatts}</small>
        <img src={icons.termometro} alt="termometro" />
        <small>{temperature}</small>
      </div>

      <span className="title-conditioner">Ar condicionado</span>
      <small className="subTitle-conditioner">Refrigerador {index}</small>

      <div className="section-3">
        <span className="last-active">{moment(lastActive).calendar()}</span>

        <Switch onChange={onChange} checked={active} />
      </div>
    </AirConditionerCardWrapper>
  );
};

export default AirConditionerCard;

const AirConditionerCardWrapper = styled.div`
  padding: 8px;

  .section-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow-icon,
    .rounded-icon {
      width: 36px;
      height: 36px;
      border-radius: 100%;
    }

    .rounded-icon {
      background-color: var(--fundo);
    }

    .arrow-icon {
      width: 6px;
      height: 14px;
    }
  }

  .section-2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    small {
      font-weight: 500;
      font-size: 8px;
      line-height: 12px;

      color: var(--white);
      &:first-of-type {
        color: var(--energy-gradient);
      }
    }
  }

  .title-conditioner {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--white);
  }

  .subTitle-conditioner {
    font-weight: 400;
    font-size: 6px;
    line-height: 9px;
    color: rgba(255, 255, 255, 0.5);
  }

  .section-3 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .last-active {
      font-weight: 400;
      font-size: 8px;
      line-height: 12px;
      opacity: 0.6;
    }
  }
`;
