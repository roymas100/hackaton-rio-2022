import React from "react";
import styled from "styled-components";
import icons from "../assets/icons";
import Perfil from "../components/Perfil";

// import { Container } from './styles';
interface HeaderProps {
  onNotificationClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onNotificationClick }) => {
  return (
    <HeaderWrapper>
      <div className="profile-info">
        <Perfil image={"/assets/Perfil.png"} />
        <div className="name">
          <small>Bem vindo,</small>
          <p>Michael</p>
        </div>
      </div>
      <div>
        <img
          src={icons.bell}
          alt="Notificações"
          onClick={() => onNotificationClick()}
          style={{ cursor: "pointer" }}
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    .name {
      small {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }

      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
      }
    }
  }
`;
