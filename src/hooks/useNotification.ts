import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { useMemo, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { notificationState } from '../store/notification';
import { notificationFormatter } from '../utils/messaging/notificationFormatter';

const useNotification = () => {
  const [notifications, setNotifications] = useRecoilState(notificationState);
  const resetNotifications = useResetRecoilState(notificationState);

  const [countReceivedNotification, setCountReceivedNotification] =
    useState<number>(0);
  const newReceviedNotification = () =>
    setCountReceivedNotification(prevCount => prevCount + 1);
  const resetReceivedNotification = () => setCountReceivedNotification(0);
  const needNotify = useMemo(
    () => (countReceivedNotification >= 1 ? true : false),
    [countReceivedNotification],
  );

  const foreNotificationHandler = (
    remotedMessage: FirebaseMessagingTypes.RemoteMessage,
  ) => {
    const message = notificationFormatter(remotedMessage);
    setNotifications(prevNotifications => [message, ...prevNotifications]);
  };

  return {
    notifications,
    countReceivedNotification,
    needNotify,
    newReceviedNotification,
    resetNotifications,
    resetReceivedNotification,
    foreNotificationHandler,
  };
};

export default useNotification;
