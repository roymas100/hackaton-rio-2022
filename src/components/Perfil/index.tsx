import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

interface PerfilProps {
  image: any;
}

const Perfil: React.FC<PerfilProps> = ({ image }) => {
  return <Wrapper src={image} alt="Perfil" />;
};

export default Perfil;

const Wrapper = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 100%;
`;
