import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { HeaderTitleStyle, HeaderStyle } from './styles';

interface IHeaderProps extends BottomTabHeaderProps {}

const Header = ({ route, options }: IHeaderProps) => {
  const { name } = route;
  const title = getHeaderTitle(options, name);

  return (
    <HeaderStyle>
      <HeaderTitleStyle>{title}</HeaderTitleStyle>
    </HeaderStyle>
  );
};

export default Header;
