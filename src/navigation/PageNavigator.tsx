import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBar from '../components/tabbar/TabBar';
import DynamicScreen from '../components/dynamic/DynamicScreen';

export type PageNavigatorParamList = {
  DynamicScreen: {
    name: string;
    url: string | null;
    title: string;
    componentName?: string;
  };
};

interface IPageNavigatorProps {
  tabs: {
    name: string;
    url: string | null;
    korean: string;
    componentName?: string;
  }[];
}

const PageNavi = createMaterialTopTabNavigator<PageNavigatorParamList>();

const PageNavigator = ({ tabs }: IPageNavigatorProps) => {
  return (
    <PageNavi.Navigator tabBar={TabBar}>
      {tabs.map(({ name, korean, url, componentName }) => (
        <PageNavi.Screen
          key={`page_tab_${name}`}
          name={name}
          component={DynamicScreen}
          initialParams={{ name, title: korean, url, componentName }}
        />
      ))}
    </PageNavi.Navigator>
  );
};

export default PageNavigator;
