/* eslint-disable react-native/no-inline-styles */

import React, { useRef } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';
import Button from '../components/button/Button';
import Input, { CustomTextInputType } from '../components/input/Input';
import loginLottie from '../../public/lottie/login.json';
import Logo from '../components/logo/Logo';
import {
  LoginBottomStyle,
  LoginContainerStyle,
  LoginFormStyle,
  LoginTitle,
  LoginTopStyle,
  LoginVersionStyle,
  LoginVersionTextStyle,
} from '../components/login/styles';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const idRef = useRef<CustomTextInputType | null>(null);
  const pwdRef = useRef<CustomTextInputType | null>(null);

  const { signIn } = useAuth();

  const onPress = () => {
    if (idRef.current && pwdRef.current) {
      if (
        idRef.current.value.trim() === '' ||
        pwdRef.current.value.trim() === ''
      ) {
        console.log('아이디 또는 비밀번호 칸이 비워져 있습니다.');
        return;
      }
      signIn(idRef.current?.value, pwdRef.current?.value);
    }
  };

  return (
    <SafeAreaView>
      <LoginContainerStyle>
        <LoginTopStyle>
          <Lottie
            source={loginLottie}
            style={{ width: 320, height: 240 }}
            autoPlay
            loop
          />
        </LoginTopStyle>
        <LoginTitle>환영합니다!</LoginTitle>
        <LoginBottomStyle
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <LoginFormStyle>
            <Input label="학번" ref={idRef} />
            <Input label="비밀번호" ref={pwdRef} needSecured />
          </LoginFormStyle>
          <LoginVersionStyle>
            <Logo size={24} name="강남대학교" needImage />
            <LoginVersionTextStyle>Developed by @Rebuild</LoginVersionTextStyle>
          </LoginVersionStyle>
          <Button title="로그인" onPress={onPress} />
        </LoginBottomStyle>
      </LoginContainerStyle>
    </SafeAreaView>
  );
};

export default Login;
