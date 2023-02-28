import AsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { notificationFormatter } from './notificationFormatter';

export const backNotificationHandler = async (
  remotedMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  try {
    if (remotedMessage) {
      const notification = notificationFormatter(remotedMessage);
      const storageData = await AsyncStorage.getItem('notification-data');
      if (storageData) {
        const oldData = JSON.parse(storageData);
        await AsyncStorage.setItem(
          'notification-data',
          JSON.stringify([notification, ...oldData]),
        );
        return;
      }
      await AsyncStorage.setItem(
        'notification-data',
        JSON.stringify([notification]),
      );
    }
  } catch (e) {
    return;
  }
};
