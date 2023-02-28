/* eslint-disable react-hooks/exhaustive-deps */

import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { requestNotificationPermission } from '../utils/messaging/notificationPermission';
import { topicNotificationHandler } from '../utils/messaging/topicNotificationHandler';
import useNotification from './useNotification';

const useNotificationController = () => {
  const { foreNotificationHandler, newReceviedNotification } =
    useNotification();

  const listenerWithFeedback = (
    remoteMessage?: FirebaseMessagingTypes.RemoteMessage,
  ) => {
    if (remoteMessage) {
      foreNotificationHandler(remoteMessage);
    }
  };

  const listenerWithoutFeedback = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    foreNotificationHandler(remoteMessage!);
    newReceviedNotification();
  };

  useEffect(() => {
    requestNotificationPermission();
    topicNotificationHandler('SUBSCRIBE', 'ALL');

    messaging().onNotificationOpenedApp(listenerWithFeedback);
    messaging().getInitialNotification().then(listenerWithoutFeedback);

    const unsubscribe = messaging().onMessage(listenerWithoutFeedback);

    return unsubscribe;
  }, []);
};

export default useNotificationController;
