/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../components/header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import bottomTabs from '../meta/bottom_navigate_meta-data';
import useNotificationController from '../hooks/useNotificationController';

export type BottomNavigatorParamList = {
  Home: undefined;
  User: undefined;
  Program: undefined;
  Notice: undefined;
  Setting: undefined;
};

const BottomNav = createBottomTabNavigator<BottomNavigatorParamList>();

const BottomNavigator = () => {
  useNotificationController();

  const tabs = bottomTabs;
  return (
    <BottomNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: Header,
      }}>
      {tabs.map(({ name, component, color, korean, icon }) => (
        <BottomNav.Screen
          key={`bottom_tab_${name}`}
          name={name}
          component={component}
          options={{
            title: korean,
            tabBarShowLabel: false,
            tabBarActiveTintColor: color,
            tabBarInactiveTintColor: '#828282',
            tabBarIcon: ({ color: iconColor }) => (
              <Icon name={icon} color={iconColor} size={28} />
            ),
          }}
        />
      ))}
    </BottomNav.Navigator>
  );
};

export default BottomNavigator;
