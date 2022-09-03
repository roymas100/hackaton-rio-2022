import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import NotificationCard from "../../components/NotificationCard";

interface NotificationsProps {
  visible: boolean;
  requestClose: () => void;
}

const array = [
  {
    title: "Alerta sustentável",
    description: "Você atingiu 80% da meta de energia mensal.",
  },
  {
    title: "Alerta sustentável",
    description: "Você atingiu 80% da meta de energia mensal.",
  },
  {
    title: "Alerta sustentável",
    description: "Você atingiu 80% da meta de energia mensal.",
  },
  {
    title: "Alerta sustentável",
    description: "Você atingiu 80% da meta de energia mensal.",
  },
];

const Notifications: React.FC<NotificationsProps> = ({
  visible,
  requestClose,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <NotificationsWrapper
          initial={{ opacity: 1, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
        >
          <div className="notification-body">
            <header>
              <button onClick={() => requestClose()}>X</button>
            </header>

            <div className="notifications-container">
              <h1>Notificações</h1>
              {array.map((notification) => (
                <NotificationCard
                  title={notification.title}
                  description={notification.description}
                />
              ))}
            </div>
          </div>
        </NotificationsWrapper>
      )}
    </AnimatePresence>
  );
};

export default Notifications;

const NotificationsWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: var(--fundo);
  height: 100%;

  .notification-body {
    max-width: 480px;
    width: 100%;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: end;

    button {
      background-color: var(--fundo);
      font-size: 36px;
      padding: 8px;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    color: var(--white);
    text-align: start;
    min-width: 360px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .notifications-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;
