import React from 'react';
import { ScrollView } from 'react-native';
import SettingCategory from '../components/domain/setting/category/SettingCategory';
import SettingFooter from '../components/domain/setting/footer/SettingFooter';
import SettingOthers from '../components/domain/setting/others/SettingOthers';

const SettingScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SettingCategory />
      <SettingOthers />
      <SettingFooter />
    </ScrollView>
  );
};

export default SettingScreen;
