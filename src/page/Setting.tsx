import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomNavigatorParamList } from '../navigation/BottomNavigator';
import PageNavigator from '../navigation/PageNavigator';
import { findTopTabMetaData } from '../utils/findTopTabMetaData';
import { PageContainerStyle } from './styles';

const Setting = ({
  route,
}: BottomTabScreenProps<BottomNavigatorParamList, 'Setting'>) => {
  const { name } = route;
  const tabs = findTopTabMetaData(name);

  return (
    <PageContainerStyle>
      <PageNavigator tabs={tabs} />
    </PageContainerStyle>
  );
};

export default Setting;
