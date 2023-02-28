import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import Login from '../page/Login';
import BottomNavigator from './BottomNavigator';
import useInterceptor from '../hooks/useInterceptor';
import { topicNotificationHandler } from '../utils/messaging/topicNotificationHandler';

export type StackNavigatorParamList = {
  Login: undefined;
  Main: undefined;
  ExternalWebPage: undefined;
};

const StackNav = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  useInterceptor();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    topicNotificationHandler('SUBSCRIBE', 'INSTALLER');
  }, []);

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      {isAuthorized ? (
        <StackNav.Screen name="Main" component={BottomNavigator} />
      ) : (
        <StackNav.Screen
          name="Login"
          component={Login}
          options={{ animationTypeForReplace: isAuthorized ? 'pop' : 'push' }}
        />
      )}
    </StackNav.Navigator>
  );
};

export default StackNavigator;
