import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import Button from '../components/button/Button';
import useAuth from '../hooks/useAuth';
import { BottomNavigatorParamList } from '../navigation/BottomNavigator';
import PageNavigator from '../navigation/PageNavigator';
import { findTopTabMetaData } from '../utils/findTopTabMetaData';
import { PageContainerStyle } from './styles';

const Setting = ({
  route,
}: BottomTabScreenProps<BottomNavigatorParamList, 'Setting'>) => {
  const { name } = route;
  const tabs = findTopTabMetaData(name);

  const { signOut } = useAuth();
  return (
    <PageContainerStyle>
      <PageNavigator tabs={tabs} />
      <Button title="로그아웃" onPress={signOut} />
    </PageContainerStyle>
  );
};

export default Setting;
