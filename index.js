import React, { Suspense } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import App from './src/App';
import messaging from '@react-native-firebase/messaging';
import { name as appName } from './app.json';
import { backNotificationHandler } from './src/utils/messaging/backNotificationHandler';
import { RecoilRoot } from 'recoil';

messaging().setBackgroundMessageHandler(backNotificationHandler);

const ProviderWithApp = () => (
  <RecoilRoot>
    <Suspense
      fallback={
        <View>
          <Text>Loadin</Text>
          <Text>Loadin</Text>
          <Text>Loadin</Text>
          <Text>Loadin</Text>
          <Text>Loadin</Text>
        </View>
      }>
      <App />
    </Suspense>
  </RecoilRoot>
);

AppRegistry.registerComponent(appName, () => ProviderWithApp);
