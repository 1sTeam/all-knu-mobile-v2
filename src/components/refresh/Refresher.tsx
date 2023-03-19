import React from 'react';
import { RefreshControl } from 'react-native';

interface RefresherProps {
  onRefresh: () => void;
  refreshing: boolean;
}

const Refresher = ({ onRefresh, refreshing }: RefresherProps) => {
  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default Refresher;
