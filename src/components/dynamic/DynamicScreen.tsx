import React from 'react';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { PageNavigatorParamList } from '../../navigation/PageNavigator';
import WebPage from '../../screen/WebPage';
import SettingScreen from '../../screen/SettingScreen';
import Notifications from '../../screen/Notifications';

const routeScreens = {
  WebPage: WebPage,
  Notifications: Notifications,
  SettingScreen: SettingScreen,
} as const;

type RouteScreen = keyof typeof routeScreens;

const DynamicScreen = (
  props: MaterialTopTabScreenProps<PageNavigatorParamList, 'DynamicScreen'>,
) => {
  const { componentName } = props.route.params;
  const screen = componentName ?? 'WebPage';

  const RouteComponent = routeScreens[screen as RouteScreen];
  return <RouteComponent {...props} />;
};

export default DynamicScreen;
