import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/button/Button';
import useAuth from '../hooks/useAuth';

const SettingScreen = ({ navigation }) => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>Settings</Text>
      <Button title="로그아웃" onPress={signOut} />
      <Button title="Modal 열기" onPress={() => navigation.navigate('Modal')} />
      <Button
        title="External WebPage 열기"
        onPress={() =>
          navigation.navigate('ExternalWebPage', {
            uri: 'https://www.daum.net',
          })
        }
      />
      <Button
        title="Dialog 열기"
        onPress={() =>
          navigation.navigate('Dialog', {
            body: { image: 'Confirm', title: '성공' },
            footer: [{ onClick: () => console.log('clicked'), title: '닫기' }],
          })
        }
      />
    </View>
  );
};

export default SettingScreen;
