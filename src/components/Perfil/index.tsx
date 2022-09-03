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
  width: 30px;
  height: 30px;

  border-radius: 100%;
`;
