import React from 'react';
import { LogoImageStyle, LogoStyle, LogoTextStyle } from './styles';

export interface ILogoProps {
  needImage?: boolean;
  name?: string;
  size: number;
}

const Logo = ({ needImage, name, size }: ILogoProps) => {
  const schoolLogoImage = require('../../../public/images/kangnam-logo.png');
  return (
    <LogoStyle>
      {needImage ? (
        <LogoImageStyle size={size} source={schoolLogoImage} />
      ) : null}
      {name ? <LogoTextStyle size={size}>{name}</LogoTextStyle> : null}
    </LogoStyle>
  );
};

export default Logo;
