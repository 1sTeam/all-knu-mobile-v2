import { atom } from 'recoil';
import { encyrptedStorageEffect } from './auth';

export interface ILoginInfoState {
  id: string;
  password: string;
}

export const loginInfoState = atom<ILoginInfoState>({
  key: 'loginInfoState',
  default: {} as ILoginInfoState,
  effects: [encyrptedStorageEffect<ILoginInfoState>('user-login')],
});
