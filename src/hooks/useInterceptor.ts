import axios from 'axios';
import { useEffect } from 'react';
import { AllKnuAPI } from '../api';
import useAuth from './useAuth';

const useInterceptor = () => {
  const {
    authorize: { sessionInfo },
    refreshAuth,
  } = useAuth();

  const requestInterceptor = AllKnuAPI.interceptors.request.use(
    config => {
      config.data = { ...config.data, sessionInfo };
      return config;
    },
    error => error,
  );

  const responseInterceptor = AllKnuAPI.interceptors.response.use(
    response => response,
    async error => {
      let refreshErrorCount = 0;
      const {
        config,
        response: { status },
      } = error;
      if (refreshErrorCount <= 1) {
        if (status === 401) {
          const originalRequest = config;
          try {
            const refreshedSession = await refreshAuth();
            if (refreshedSession) {
              axios(originalRequest);
            }
          } catch (e) {
            return Promise.reject(error);
          }
        }

        return Promise.reject(error);
      }
    },
  );

  useEffect(() => {
    return () => {
      AllKnuAPI.interceptors.request.eject(requestInterceptor);
      AllKnuAPI.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
};

export default useInterceptor;
