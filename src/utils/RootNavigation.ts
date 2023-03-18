import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef =
  React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

export const rootNavigate = (name: string, params: {}) => {
  navigationRef.current?.navigate(name, params);
};
