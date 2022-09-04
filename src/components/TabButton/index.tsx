import React from "react";
import styled, { css } from "styled-components";
import icons, { IconsKey } from "../../assets/icons";
import { ResourceType } from "../../types/ResourceType";

// import { Container } from './styles';

interface TabButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  active?: boolean;
  onClick?: () => void;
  icon?: "calendar" | "room" | "porta";
  type?: ResourceType;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
}

const TabButton: React.FC<TabButtonProps> = ({
  active = false,
  onClick,
  icon,
  children,
  type = "energy",
  ...props
}) => {
  const colorType = type === "water" ? "azul" : "verde";

  const color = active ? colorType : "branco";

  return (
    <TabButtonWrapper active={active} onClick={onClick} type={type} {...props}>
      {icon && icons[icon] && <img src={icons[icon][color]} alt={icon} />}
      {children}
    </TabButtonWrapper>
  );
};

export default TabButton;

const TabButtonWrapper = styled.div<{ active: boolean; type: ResourceType }>`
  padding: 12px 18px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: var(--white);
  border-radius: 16px;
  border: 1px solid rgba(217, 217, 217, 0.1);

  white-space: nowrap;

  background: var(--background);

  ${({ active, type }) =>
    active &&
    css`
      img {
        color: var(--${type});
        filter: var(--${type});
      }
      border: 1px solid ${type === "water" ? "#06DEDE4d" : "#d0de064d"};
    `};
`;
