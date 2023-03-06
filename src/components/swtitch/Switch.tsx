import React from 'react';
import { Switch as NativeSwitch } from 'react-native';

export interface ISwitchProps {
  isEnabled: boolean;
  toggleSwitch: any;
}

const Switch = ({ isEnabled, toggleSwitch }: ISwitchProps) => {
  const onChangeValue = () => {
    toggleSwitch(!isEnabled);
  };
  return (
    <NativeSwitch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChangeValue}
      value={isEnabled}
    />
  );
};

export default React.memo(Switch);
