import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SettingOtherItemStyle, SettingOtherItemTextStyle } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface ISettingOtherItem extends TouchableOpacityProps {
  title: string;
  type: 'navigation' | 'default';
}

const SettingOtherItem = ({ title, type, onPress }: ISettingOtherItem) => {
  const titleColor = title === '로그아웃' ? 'red' : 'black';
  return (
    <SettingOtherItemStyle onPress={onPress}>
      <SettingOtherItemTextStyle color={titleColor}>
        {title}
      </SettingOtherItemTextStyle>
      {type === 'navigation' ? <Icon name="navigate-next" size={28} /> : null}
    </SettingOtherItemStyle>
  );
};

export default SettingOtherItem;
