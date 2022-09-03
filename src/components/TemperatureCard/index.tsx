import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";

// import { Container } from './styles';

interface TemperatureCardProps {
  temperature: number;
  onChange: (number: number) => void;
}

const TemperatureCard: React.FC<TemperatureCardProps> = ({
  onChange,
  temperature,
}) => {
  return (
    <TemperatureCardWrapper>
      <header>
        <span className="icon-span">
          <img src={icons.temperature} alt="Icon" />
        </span>
        <div className="card-info">
          <p className="card-name">Ar condicionados</p>
          <p className="card-description">Usada hoje</p>
        </div>
        <div className="card-switch"></div>
      </header>
      <TemperatureContainer>
        <span className="temparature-values">
          <p>{temperature}</p>
          <small>Temperatura</small>
        </span>
        <div className="temperature-range">
          <small>4</small>
          <input
            onChange={(e) => onChange(+e.target.value)}
            type="range"
            min={4}
            max={40}
          />
          <small>40</small>
        </div>
        <div className="temperature-buttons">
          <button>Automático</button>
          {/* <button>Não sei</button> */}
        </div>
      </TemperatureContainer>
    </TemperatureCardWrapper>
  );
};

export default TemperatureCard;

const TemperatureCardWrapper = styled.div`
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

      background: var(--energy-gradient);

      img {
        width: 15px;
        height: 13px;
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
      background: var(--energy-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .temperature-container {
  }

  .temperature-buttons {
    display: flex;
    gap: 12px;
  }
`;

const TemperatureContainer = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;

    p {
      font-weight: 500;
      font-size: 56px;
      line-height: 56px;

      background: linear-gradient(138.73deg, #e5d405 -1.14%, #b3ec05 76.63%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    small {
      font-weight: 400;
      font-size: 16px;
    }
  }

  .temperature-range {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    input {
      flex: 2;
    }

    input[type="range"] {
      /* style setting variables */
      --track-height: 0.5ex;
      --track-fill: 0%;
      --thumb-size: 3ex;
      --thumb-offset: -1.25ex;
      --thumb-highlight-size: 0px;

      appearance: none; /* clear styles, make way for mine */
      display: block;
      inline-size: 100%; /* fill container */
      margin: 1ex 0; /* ensure thumb isn't colliding with sibling content */
      background: transparent; /* bg is in the track */
      outline-offset: 5px; /* focus styles have space */
    }

    input[type="range"]::-webkit-slider-runnable-track {
      appearance: none; /* clear styles, make way for mine */
      block-size: var(--track-height);
      border-radius: 5ex;
      background:
    /* hard stop gradient:
        - half transparent (where colorful fill we be)
        - half dark track fill
        - 1st background image is on top
    */ linear-gradient(
          to right,
          transparent var(--track-fill),
          var(--surface1) 0%
        ),
        /* colorful fill effect, behind track surface fill */
          var(--brand-bg-gradient) fixed;
    }

    input[type="range"]::-webkit-slider-thumb {
      appearance: none; /* clear styles, make way for mine */
      cursor: ew-resize; /* cursor style to support drag direction */
      border: 3px solid var(--surface3);
      block-size: var(--thumb-size);
      inline-size: var(--thumb-size);
      margin-top: var(--thumb-offset);
      border-radius: 50%;
      background: var(--brand-bg-gradient) fixed;
    }
  }

  .temperature-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 14px;

    button {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;

      /* Branco */

      color: #ffffff;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      gap: 14px;

      background: #3e3e3e;
      border-radius: 24px;
    }
  }
`;
