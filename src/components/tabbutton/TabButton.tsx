import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import { TabButtonStyle, TabButtonTextStyle } from './styles';

interface ITabButtonProps
  extends Omit<
    MaterialTopTabBarProps,
    'layout' | 'position' | 'jumpTo' | 'state' | 'descriptors'
  > {
  route: { key: string; name: string };
  isFocused: boolean;
  label: string;
}

const TabButton = ({
  navigation,
  route,
  isFocused,
  label,
}: ITabButtonProps) => {
  const { name, key } = route;
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(name);
    }
  };

  return (
    <TabButtonStyle isFocused={isFocused} onPress={onPress}>
      <TabButtonTextStyle isFocused={isFocused}>{label}</TabButtonTextStyle>
    </TabButtonStyle>
  );
};

export default TabButton;
