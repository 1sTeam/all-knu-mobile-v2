/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import useNotification from '../hooks/useNotification';
import Item from '../components/item/Item';
import { FlatList } from 'react-native';
import EmptyPage from '../components/empty/EmptyPage';

const ListEmptyComponent = () => (
  <EmptyPage description="새로운 알림을 받으면서 편리한 학교 생활을 누리세요" />
);

const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1, gap: 4 }}
      data={notifications}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={({ id }) => `notification_item_${id}`}
      renderItem={({ item }) => <Item {...item} />}
    />
  );
};

export default Notifications;
