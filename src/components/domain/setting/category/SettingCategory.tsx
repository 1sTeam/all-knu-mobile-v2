/* eslint-disable react-native/no-inline-styles */

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StackNavigatorParamList } from '../../../../navigation/StackNavigator';
import Container from '../../../container/Contianer';
import Icon from '../../../icon/Icon';
import { SettingCategoryIconStyle, SettingCategoryStyle } from './styles';

const categoryItemData = [
  {
    name: '강의계획서',
    icon: 'today-outline',
    uri: 'https://app.kangnam.ac.kr/knumis/sbr/sbr1010.jsp',
  },
  {
    name: '메일스튜디오',
    icon: 'mail-outline',
    uri: 'http://mail.kangnam.ac.kr/mobile/mail/list.do',
  },
  {
    name: '무선인터넷',
    icon: 'wifi-outline',
    uri: 'https://web.kangnam.ac.kr/menu/17b48e20705c3eb60d0ed941cb23bdfb.do',
  },
  {
    name: '국가장학금',
    icon: 'file-tray-full-outline',
    uri: 'http://m.kosaf.go.kr/ko/main.do',
  },
];

const SettingCategory = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackNavigatorParamList>>();

  return (
    <Container title="카테고리">
      <SettingCategoryStyle>
        {categoryItemData.map(({ name, icon, uri }) => (
          <SettingCategoryIconStyle>
            <Icon
              key={`category_icon_${name}`}
              name={icon}
              title={name}
              size={36}
              onPress={() => navigation.navigate('ExternalWebPage', { uri })}
            />
          </SettingCategoryIconStyle>
        ))}
      </SettingCategoryStyle>
    </Container>
  );
};

export default SettingCategory;
