import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { StackNavigatorParamList } from '../../navigation/StackNavigator';
import {
  DEFAULT_SLIDE_UP_INTERPOLATE,
  SMALL_SLIDE_UP_INTERPOLATE,
} from '../../utils/animation/interpolateData';
import useAnimation from '../../utils/animation/useAnimation';
import DynamicModal from '../dynamic/DynamicModal';
import { ModalContainerStyle, ModalStyle } from './styles';

const Modal = ({
  route,
  navigation,
}: StackScreenProps<StackNavigatorParamList, 'Modal'>) => {
  const { size, type, data } = route.params;
  const { animation, endAnimation } = useAnimation(0, 1, 100);

  const exitModal = () => {
    endAnimation();
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={exitModal}>
      <ModalContainerStyle>
        <TouchableWithoutFeedback>
          <ModalStyle
            size={size}
            style={{
              transform: [
                {
                  translateY: animation.interpolate(
                    size === 'sm'
                      ? SMALL_SLIDE_UP_INTERPOLATE
                      : DEFAULT_SLIDE_UP_INTERPOLATE,
                  ),
                },
              ],
            }}>
            <DynamicModal data={data} type={type} exitModal={exitModal} />
          </ModalStyle>
        </TouchableWithoutFeedback>
      </ModalContainerStyle>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
