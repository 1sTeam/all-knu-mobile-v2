import React from 'react';
import {
  SettingOtherItemSwitchStyle,
  SettingOtherItemTextStyle,
} from './styles';
import Switch, { ISwitchProps } from '../../../swtitch/Switch';

export interface ISettingOtherItemSwitch extends ISwitchProps {
  title: string;
}

const SettingOtherItemSwitch = ({
  title,
  isEnabled,
  toggleSwitch,
}: ISettingOtherItemSwitch) => {
  return (
    <SettingOtherItemSwitchStyle>
      <SettingOtherItemTextStyle>{title}</SettingOtherItemTextStyle>
      <Switch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </SettingOtherItemSwitchStyle>
  );
};

export default SettingOtherItemSwitch;
