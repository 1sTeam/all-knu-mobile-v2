import moment from 'moment';
import { atom } from 'recoil';
import { notificationStorageEffect } from '../utils/storage/notificationStorageEffect';

export interface INotificationState {
  id: string;
  title: string | undefined;
  body: string | undefined;
  link: string | null;
  receivedDateTime: moment.Moment;
}

export const notificationState = atom<INotificationState[]>({
  key: 'notificationState',
  default: [],
  effects: [notificationStorageEffect<INotificationState[]>()],
});
