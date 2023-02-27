import { atom } from 'recoil';
import { encyrptedStorageEffect } from './auth';

export interface IStudentState {
  studentInfo: any;
}

export const studentState = atom<IStudentState>({
  key: 'studentState',
  default: {} as IStudentState,
  effects: [encyrptedStorageEffect<IStudentState>('user-student')],
});
