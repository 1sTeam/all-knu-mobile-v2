import React from 'react';
import { GestureResponderEvent } from 'react-native/types';
import { ButtonStyle, ButtonTextStyle } from './styles';

interface IButtonProps {
  title: string;
  onPress?: (event?: GestureResponderEvent) => void;
}

const Button = ({ title, onPress }: IButtonProps) => {
  return (
    <ButtonStyle onPress={onPress}>
      <ButtonTextStyle>{title}</ButtonTextStyle>
    </ButtonStyle>
  );
};

export default Button;
