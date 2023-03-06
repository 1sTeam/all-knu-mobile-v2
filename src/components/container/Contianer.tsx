import React from 'react';
import { ViewProps } from 'react-native';
import { ContainerStyle, ContainerTitleStyle } from './styles';

interface IContainerProps extends ViewProps {
  title?: string;
  children?: React.ReactNode;
}

const Container = ({ title, children }: IContainerProps) => {
  return (
    <ContainerStyle>
      <ContainerTitleStyle>{title}</ContainerTitleStyle>
      {children}
    </ContainerStyle>
  );
};

export default Container;
