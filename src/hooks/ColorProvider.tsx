import React, { createContext, useContext, useState } from "react";
import { ResourceType } from "../types/ResourceType";

interface ColorContextData {
  type: ResourceType;
  setType: (type: ResourceType) => void;
}

const ColorContext = createContext<ColorContextData>({} as ColorContextData);

export const ColorProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [type, setType] = useState<ResourceType>("energy");
  return (
    <ColorContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export function useColor(): ColorContextData {
  const context: ColorContextData = useContext(ColorContext);

  if (!context) {
    throw new Error("useColor must be used within an RoleProvider");
  }

  return context;
}
