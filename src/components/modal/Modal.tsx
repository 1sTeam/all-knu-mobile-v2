import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { StackNavigatorParamList } from '../../navigation/StackNavigator';
import { DEFAULT_SLIDE_UP_INTERPOLATE } from '../../utils/animation/interpolateData';
import useAnimation from '../../utils/animation/useAnimation';
import Button from '../button/Button';
import { ModalContainerStyle, ModalStyle } from './styles';

const Modal = ({
  navigation,
}: StackScreenProps<StackNavigatorParamList, 'Modal'>) => {
  const { animation, endAnimation } = useAnimation(0, 1);

  const exitModal = () => {
    endAnimation();
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={exitModal}>
      <ModalContainerStyle>
        <TouchableWithoutFeedback>
          <ModalStyle
            style={{
              transform: [
                {
                  translateY: animation.interpolate(
                    DEFAULT_SLIDE_UP_INTERPOLATE,
                  ),
                },
              ],
            }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={exitModal} title="Dismiss" />
          </ModalStyle>
        </TouchableWithoutFeedback>
      </ModalContainerStyle>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
