import React from "react";
import styled from "styled-components";
import icons from "../../assets/icons";

interface NotificationCardProps {
  title: string;
  description: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  description,
}) => {
  return (
    <NotificationCardWrapper>
      <img src={icons.notification} alt="Notificação" />
      <div className="notification-info">
        <p>{title}</p>
        <small>{description}</small>
      </div>
      <button>
        <img src={icons.arrowRight} alt="" />
      </button>
    </NotificationCardWrapper>
  );
};

export default NotificationCard;

const NotificationCardWrapper = styled.div`
  background-color: var(--background);
  border-radius: 16px;
  padding: 12px;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  img {
    width: 42px;
    height: 42px;
  }

  p {
    font-weight: 700;
    font-size: 12px;
  }

  small {
    font-weight: 400;
    font-size: 10px;
  }

  button {
    background: #efefff;
    border-radius: 10.6667px;
    padding: 8px;

    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 12px;
      height: 24px;
    }
  }
`;
