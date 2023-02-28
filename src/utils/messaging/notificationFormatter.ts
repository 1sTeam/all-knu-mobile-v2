import moment from 'moment';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const notificationFormatter = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const { messageId, notification, data } = remoteMessage;
  const { title, body } = notification!;
  const id = messageId!;
  const link = data && data.link ? data.link : null;
  const receivedDateTime = moment();

  return { id, title, body, link, receivedDateTime };
};
