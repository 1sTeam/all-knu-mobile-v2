import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import CustomIcon from 'react-native-vector-icons/Ionicons';
import { IconContainerStyle, IconStyle } from './styles';

interface IIconProps extends TouchableOpacityProps {
  name: string;
  size: number;
  title?: string;
  color?: string;
}

const Icon = ({ name, size, color, title, onPress, disabled }: IIconProps) => {
  const insideSize = Math.floor(size * 0.6);
  return (
    <IconStyle disabled={disabled} onPress={onPress}>
      <IconContainerStyle size={size}>
        <CustomIcon name={name} size={insideSize} color={color ?? 'black'} />
      </IconContainerStyle>
      {title ? <Text>{title}</Text> : null}
    </IconStyle>
  );
};

export default Icon;
