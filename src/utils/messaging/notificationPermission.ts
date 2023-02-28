import messaging from '@react-native-firebase/messaging';

export const requestNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const { AUTHORIZED, PROVISIONAL } = messaging.AuthorizationStatus;
  const enabled = authStatus === AUTHORIZED || authStatus === PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};
