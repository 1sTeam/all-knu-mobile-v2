import messaging from '@react-native-firebase/messaging';

type TopicMode = 'SUBSCRIBE' | 'UNSUBSCRIBE';

export const topicNotificationHandler = async (
  mode: TopicMode,
  topic: string,
) => {
  switch (mode) {
    case 'SUBSCRIBE':
      await messaging().subscribeToTopic(topic);
      break;
    case 'UNSUBSCRIBE':
      await messaging().unsubscribeFromTopic(topic);
      break;
    default:
      break;
  }
};
