import styled from 'styled-components/native';
import { ILogoProps } from './Logo';

export const LogoStyle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const LogoImageStyle = styled.Image<ILogoProps>`
  ${({ size }) => `width: ${size}px; height: ${size}px`};
`;

export const LogoTextStyle = styled.Text<ILogoProps>`
  font-size: ${({ size }) => `${Math.floor(size * 0.6)}px`};
  font-weight: 600;
  text-shadow-color: rgba(0, 0, 0, 0.25);
  text-shadow-offset: 0px 4px;
  text-shadow-radius: 3px;
`;
