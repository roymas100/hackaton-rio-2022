import React from "react";
import styled from "styled-components";
import { usePages } from "../../hooks/usePages";

// import { Container } from './styles';

const Menu: React.FC = () => {
  const { currentPage, setPage } = usePages();

  return (
    <>
      <MenuWrapper>
        <div onClick={() => setPage("dados")}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 9.93841C1.5 8.71422 2.06058 7.55744 3.02142 6.79888L8.52142 2.45677C9.97466 1.30948 12.0253 1.30948 13.4786 2.45677L18.9786 6.79888C19.9394 7.55744 20.5 8.71422 20.5 9.93841V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H15C14.4477 20.5 14 20.0523 14 19.5V16.5C14 15.3954 13.1046 14.5 12 14.5H10C8.89543 14.5 8 15.3954 8 16.5V19.5C8 20.0523 7.55228 20.5 7 20.5H5.5C3.29086 20.5 1.5 18.7091 1.5 16.5L1.5 9.93841Z"
              stroke={currentPage === "dados" ? "#D0DE06" : "white"}
              stroke-width="2"
            />
          </svg>

          <span
            style={{ color: currentPage === "dados" ? "#D0DE06" : "white" }}
          >
            Home
          </span>
        </div>
        <div onClick={() => setPage("rooms")}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.5"
              x="1"
              y="1"
              width="20"
              height="20"
              rx="5"
              stroke={currentPage === "rooms" ? "#D0DE06" : "white"}
              stroke-width="1.5"
            />
            <path
              opacity="0.5"
              d="M7 16L7 13"
              stroke={currentPage === "rooms" ? "#D0DE06" : "white"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.5"
              d="M11 16L11 6"
              stroke={currentPage === "rooms" ? "#D0DE06" : "white"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.5"
              d="M15 16L15 9"
              stroke={currentPage === "rooms" ? "#D0DE06" : "white"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            style={{ color: currentPage === "rooms" ? "#D0DE06" : "white" }}
          >
            Espaços
          </span>
        </div>
      </MenuWrapper>
    </>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  background-color: #212121;
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  background-blend-mode: overlay;
  /* Glassmorphism */

  backdrop-filter: blur(12px);

  height: 80px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;

  div {
    cursor: pointer;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
    }

    span {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
