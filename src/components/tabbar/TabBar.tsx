import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React from 'react';
import TabButton from '../tabbutton/TabButton';
import TabBarStyle from './styles';

const TabBar = ({ state, navigation }: MaterialTopTabBarProps) => {
  const { index, routes } = state;

  return (
    <TabBarStyle>
      {routes.map((route, idx) => {
        // @ts-ignore
        const { title = route.name } = route.params;
        const label = title;
        const isFocused = index === idx;
        return (
          <TabButton
            key={`tab_button_to_${label}`}
            {...{ navigation, label, isFocused, route }}
          />
        );
      })}
    </TabBarStyle>
  );
};

export default TabBar;
