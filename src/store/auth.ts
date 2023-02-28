import { atom } from 'recoil';
import { encyrptedStorageEffect } from '../utils/storage/encryptedStorageEffect';

export interface IAuthState {
  sessionInfo: {
    mobileCookies: any;
    ssoCookies: any;
    veriusCookies: any;
  };
}

export const authState = atom<IAuthState>({
  key: 'authState',
  default: {} as IAuthState,
  effects: [encyrptedStorageEffect<IAuthState>('user-auth')],
});
