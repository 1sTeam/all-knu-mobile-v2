import React from 'react';
import CustomIcon from 'react-native-vector-icons/MaterialIcons';
import { IconStyle } from './styles';

interface IIconProps {
  name: string;
  size: number;
  color?: string;
}

const Icon = ({ name, size, color }: IIconProps) => {
  const insideSize = Math.floor(size * 0.6);
  return (
    <IconStyle size={size}>
      <CustomIcon name={name} size={insideSize} color={color ?? 'black'} />
    </IconStyle>
  );
};

export default Icon;
