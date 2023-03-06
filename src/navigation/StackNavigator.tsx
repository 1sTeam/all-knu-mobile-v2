import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../hooks/useAuth';
import Login from '../page/Login';
import BottomNavigator from './BottomNavigator';
import useInterceptor from '../hooks/useInterceptor';
import { topicNotificationHandler } from '../utils/messaging/topicNotificationHandler';
import Modal from '../components/modal/Modal';
import Dialog from '../components/dialog/Dialog';
import { DialogImagesName } from '../components/dialog/DialogBody';
import ExternalWebPage from '../components/webview/ExternalWebPage';

export type StackNavigatorParamList = {
  Login: undefined;
  Main: undefined;
  ExternalWebPage: { uri: string };
  Modal: undefined;
  Dialog: {
    header?: string;
    body: { image: DialogImagesName; title: string };
    footer: { onPress: () => void; title: string }[];
  };
};

const StackNav = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  const { isAuthorized } = useAuth();

  useInterceptor();
  useEffect(() => {
    topicNotificationHandler('SUBSCRIBE', 'INSTALLER');
  }, []);

  return (
    <StackNav.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}>
      {isAuthorized ? (
        <>
          <StackNav.Screen name="Main" component={BottomNavigator} />
          <StackNav.Group screenOptions={{ presentation: 'transparentModal' }}>
            <StackNav.Screen name="Modal" component={Modal} />
            <StackNav.Screen name="Dialog" component={Dialog} />
            <StackNav.Screen
              name="ExternalWebPage"
              component={ExternalWebPage}
            />
          </StackNav.Group>
        </>
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
