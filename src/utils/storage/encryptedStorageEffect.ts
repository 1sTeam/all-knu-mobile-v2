import { AtomEffect, DefaultValue } from 'recoil';
import EncryptedStorage from 'react-native-encrypted-storage';

export const encyrptedStorageEffect: <T>(key: string) => AtomEffect<T> =
  key =>
  ({ setSelf, onSet }) => {
    setSelf(
      EncryptedStorage.getItem(key).then(savedValue =>
        savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
      ),
    );

    onSet((newValue, _, isReset) => {
      isReset
        ? EncryptedStorage.getItem(key).then(value =>
            value ? EncryptedStorage.removeItem(key) : null,
          )
        : EncryptedStorage.setItem(key, JSON.stringify(newValue));
    });
  };
