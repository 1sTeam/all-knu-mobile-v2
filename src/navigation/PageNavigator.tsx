import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WebPage from '../components/webview/WebPage';
import TabBar from '../components/tabbar/TabBar';

interface IPageNavigatorProps {
  tabs: {
    name: string;
    url: string | null;
    korean: string;
  }[];
}

const PageNavi = createMaterialTopTabNavigator();

const PageNavigator = ({ tabs }: IPageNavigatorProps) => {
  return (
    <PageNavi.Navigator tabBar={TabBar}>
      {tabs.map(({ name, korean }) => (
        <PageNavi.Screen
          key={`page_tab_${name}`}
          name={name}
          component={WebPage}
          initialParams={{ title: korean }}
        />
      ))}
    </PageNavi.Navigator>
  );
};

export default PageNavigator;
