import { atom } from 'recoil';
import { defaultStorageEffect } from '../utils/storage/defaultStorageEffect';

type DarkModeState = boolean;

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects: [defaultStorageEffect<DarkModeState>('dark-mode')],
});
