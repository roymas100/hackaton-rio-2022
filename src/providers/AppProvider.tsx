import React from "react";
import { GlobalStyles } from "../styles/globalStyles";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default AppProvider;
