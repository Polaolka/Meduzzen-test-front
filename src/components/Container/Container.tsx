import React, { ReactNode } from 'react';
import { ContainerStyled } from './Container.styled';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;