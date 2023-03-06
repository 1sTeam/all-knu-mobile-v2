import { atom } from 'recoil';
import { defaultStorageEffect } from '../utils/storage/defaultStorageEffect';

type ProfileImageState = boolean;

export const profileImageState = atom({
  key: 'profileImageState',
  default: false,
  effects: [defaultStorageEffect<ProfileImageState>('profile-image')],
});
