import { atom, DefaultValue, AtomEffect } from 'recoil';
import EncryptedStorage from 'react-native-encrypted-storage';

export interface IAuthState {
  sessionInfo: {
    mobileCookies: any;
    ssoCookies: any;
    veriusCookies: any;
  };
}

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
        ? EncryptedStorage.removeItem(key)
        : EncryptedStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authState = atom<IAuthState>({
  key: 'authState',
  default: {} as IAuthState,
  effects: [encyrptedStorageEffect<IAuthState>('user-auth')],
});
