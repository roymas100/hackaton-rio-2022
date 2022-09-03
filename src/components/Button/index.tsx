import React from "react";
import styled from "styled-components";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ref?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>
    | null
    | undefined;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <ButtonWrapper {...props} />;
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: var(--white);
  color: var(--black);

  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border-radius: 16px;
`;
