import React from "react";
import { GlobalStyles } from "../styles/globalStyles";
import { ColorProvider } from "./ColorProvider";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ColorProvider>
      <GlobalStyles />
      {children}
    </ColorProvider>
  );
};

export default AppProvider;
