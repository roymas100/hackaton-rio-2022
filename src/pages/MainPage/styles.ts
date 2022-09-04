import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  border: 1px solid red;

  border: 2px solid black;
  border-radius: 1px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 80px);
  border: 1px solid red;

  border: 2px solid black;
  border-radius: 1px;

  overflow-y: scroll;
`;
