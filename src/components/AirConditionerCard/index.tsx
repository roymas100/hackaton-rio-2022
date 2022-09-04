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
      <div className="section1">
        <div className="rounded-icon">
          <img src={icons.conditioner} alt="Ar condicionado" />
        </div>
        <div className="arrow-icon">
          <img src={icons.arrowRight} alt="Passar para a direita" />
        </div>
      </div>

      <div className="section2">
        <img src={icons.lightingWhite} alt="lighting" />
        <small>{kilowatts}kwh</small>
        <img src={icons.termometro} alt="termometro" />
        <small>{temperature}</small>
      </div>

      <span className="title-conditioner">Ar condicionado</span>
      <small className="subTitle-conditioner">Refrigerador {index}</small>

      <div className="section3">
        <span className="last-active">{moment(lastActive).calendar()}</span>

        <Switch
          onChange={onChange}
          checked={active}
          checkedIcon={false}
          onColor="#fff"
          onHandleColor="#1E1E20"
          uncheckedIcon={false}
        />
      </div>
    </AirConditionerCardWrapper>
  );
};

export default AirConditionerCard;

const AirConditionerCardWrapper = styled.div`
  padding: 8px 12px;
  min-width: 160px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background);
  border-radius: 20px;
  gap: 4px;

  .section1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .arrow-icon,
    .rounded-icon {
      width: 36px;
      height: 36px;
      border-radius: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rounded-icon {
      background-color: var(--fundo);
      img {
        width: 15px;
        height: 14px;
      }
    }

    .arrow-icon {
      img {
        width: 6px;
        height: 14px;
      }
    }
  }

  .section2 {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    img:first-of-type {
    }

    small {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      color: var(--white);
      &:first-of-type {
        background: linear-gradient(138.73deg, #e5d405 -1.14%, #b3ec05 76.63%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  .title-conditioner {
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--white);
  }

  .subTitle-conditioner {
    width: 100%;
    font-weight: 400;
    font-size: 10px;
    line-height: 9px;
    color: rgba(255, 255, 255, 0.5);
  }

  .section3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .last-active {
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: var(--white);
      opacity: 0.6;
    }
  }
`;
