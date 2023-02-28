import { AtomEffect, DefaultValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const notificationStorageEffect: <T>() => AtomEffect<T> =
  () =>
  ({ setSelf, onSet }) => {
    setSelf(
      AsyncStorage.getItem('notification-data').then(savedValue =>
        savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
      ),
    );

    onSet((newValue, oldValue, isReset) => {
      if (isReset) {
        AsyncStorage.getItem('notification-data').then(value =>
          value ? AsyncStorage.removeItem('notification-data') : null,
        );
        return;
      }

      if (newValue !== oldValue) {
        AsyncStorage.setItem('notification-data', JSON.stringify(newValue));
      }
    });
  };
