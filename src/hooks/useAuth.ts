import { useMemo } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { login, logout, refreshSession } from '../api';
import { authState } from '../store/auth';
import { loginInfoState } from '../store/loginInfo';
import { studentState } from '../store/student';

const useAuth = () => {
  const [authorize, setAuthorize] = useRecoilState(authState);
  const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
  const setUser = useSetRecoilState(studentState);

  const isAuthorized = useMemo(
    () => (authorize.sessionInfo ? true : false),
    [authorize],
  );

  const resetSession = useResetRecoilState(authState);
  const resetStudent = useResetRecoilState(studentState);
  const resetLoginInfo = useResetRecoilState(loginInfoState);

  const signIn = async (id: string, password: string) => {
    const { sessionInfo, studentInfo } = await login(id, password);
    if (sessionInfo && studentInfo) {
      setLoginInfo({ id, password });
      setAuthorize(sessionInfo);
      setUser(studentInfo);
    }
  };

  const signOut = async () => {
    await logout();
    resetStudent();
    resetSession();
    resetLoginInfo();
  };

  const refreshAuth = async () => {
    const { sessionInfo } = await refreshSession(loginInfo, authorize);
    if (sessionInfo) {
      setAuthorize(sessionInfo);
    }
  };

  return { authorize, isAuthorized, signIn, signOut, refreshAuth };
};

export default useAuth;
