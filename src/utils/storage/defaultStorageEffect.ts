import { AtomEffect, DefaultValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const defaultStorageEffect: <T>(key: string) => AtomEffect<T> =
  key =>
  ({ setSelf, onSet }) => {
    setSelf(
      AsyncStorage.getItem(key).then(savedValue =>
        savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
      ),
    );

    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.getItem(key).then(value =>
            value ? AsyncStorage.removeItem(key) : null,
          )
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
