import React from "react";
import styled, { css } from "styled-components";
import icons, { IconsKey } from "../../assets/icons";

// import { Container } from './styles';

interface TabButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  active?: boolean;
  onClick?: () => void;
  icon?: IconsKey;
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
  ...props
}) => {
  return (
    <TabButtonWrapper active={active} {...props}>
      {icon && icons[icon] && <img src={icons[icon]} alt={icon} />}
      {children}
    </TabButtonWrapper>
  );
};

export default TabButton;

const TabButtonWrapper = styled.div<{ active: boolean }>`
  padding: 12px 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: var(--white);
  border-radius: 16px;
  border: 1px solid rgba(217, 217, 217, 0.1);

  white-space: nowrap;

  background: var(--background);

  ${({ active }) =>
    active &&
    css`
      img {
        color: var(--primary);
      }
      border: 1px solid #d0de064d;
    `};
`;
