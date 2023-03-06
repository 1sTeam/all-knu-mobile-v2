import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useRecoilState } from 'recoil';
import useAuth from '../../../../hooks/useAuth';
import { StackNavigatorParamList } from '../../../../navigation/StackNavigator';
import { darkModeState } from '../../../../store/darkMode';
import { profileImageState } from '../../../../store/profileImage';
import SettingOtherItem from './SettingOtherItem';
import SettingOtherItemSwitch from './SettingOtherItemSwitch';
import { SettingOthersStyle } from './styles';

const SettingOtherGroups = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamList>>();
  const { signOut } = useAuth();
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [profileImage, setProfileImage] = useRecoilState(profileImageState);

  return (
    <SettingOthersStyle>
      <SettingOtherItemSwitch
        title="다크 모드"
        isEnabled={darkMode}
        toggleSwitch={setDarkMode}
      />
      <SettingOtherItemSwitch
        title="프로필 사진 가리기"
        isEnabled={profileImage}
        toggleSwitch={setProfileImage}
      />
      <SettingOtherItem
        title="고객센터"
        type="navigation"
        onPress={() =>
          navigation.navigate('ExternalWebPage', {
            uri: 'https://www.kangnam.ac.kr',
          })
        }
      />
      <SettingOtherItem title="로그아웃" type="default" onPress={signOut} />
    </SettingOthersStyle>
  );
};

export default SettingOtherGroups;
