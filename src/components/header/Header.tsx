import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

interface IHeaderProps extends BottomTabHeaderProps {}

const Header = ({ route, options }: IHeaderProps) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <SafeAreaView style={{ flexDirection: 'column' }}>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default Header;
