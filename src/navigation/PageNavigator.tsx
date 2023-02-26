import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

interface IPageNavigatorProps {
  tabs: {
    name: string;
    component: any;
  }[];
}

const PageNavi = createMaterialTopTabNavigator();

const PageNavigator = ({ tabs }: IPageNavigatorProps) => {
  return (
    <PageNavi.Navigator>
      {tabs.map(({ name, component }) => (
        <PageNavi.Screen
          key={`page_tab_${name}`}
          name={name}
          component={component}
        />
      ))}
    </PageNavi.Navigator>
  );
};

export default PageNavigator;
