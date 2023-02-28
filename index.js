import { AppRegistry } from 'react-native';
import App from './src/App';
import messaging from '@react-native-firebase/messaging';
import { name as appName } from './app.json';
import { backNotificationHandler } from './src/utils/messaging/backNotificationHandler';

messaging().setBackgroundMessageHandler(backNotificationHandler);

AppRegistry.registerComponent(appName, () => App);
