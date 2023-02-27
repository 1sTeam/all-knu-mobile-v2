import axios, { AxiosRequestConfig } from 'axios';
import { IAuthState } from '../store/auth';
import Config from 'react-native-config';

const ENDPOINT = Config.ENDPOINT;

export const AllKnuAPI = axios.create({
  baseURL: ENDPOINT,
  timeout: 3000,
});

export const login = async (id: string, password: string) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: `${ENDPOINT}/knu/login`,
      data: {
        id,
        password,
      },
    });
    return data.list;
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  const response = await AllKnuAPI.post('/knu/logout');
  return response;
};

export const refreshSession = async (
  loginInfo: { id: string; password: string },
  newSession: IAuthState,
) => {
  try {
    const { data } = await AllKnuAPI.post('/knu/refresh/session', {
      ...loginInfo,
      ...newSession,
    });
    return data.list;
  } catch (e) {
    console.log(e);
  }
};

export const getServerData = (
  url: string,
  config?: AxiosRequestConfig<any>,
) => {
  const { data } = AllKnuAPI.get(url, config);
  return data.list;
};
