import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native';
import { StackNavigatorParamList } from '../../navigation/StackNavigator';
import { DialogContainerStyle, DialogStyle } from './styles';
import useAnimation from '../../utils/animation/useAnimation';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';
import DialogBody from './DialogBody';

const Dialog = ({
  navigation,
  route,
}: StackScreenProps<StackNavigatorParamList, 'Dialog'>) => {
  const { footer, body, header } = route.params;
  const { animation, endAnimation } = useAnimation(0, 1);

  const exitDialog = () => {
    endAnimation();
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={exitDialog}>
      <DialogContainerStyle>
        <TouchableWithoutFeedback>
          <DialogStyle style={{ opacity: animation }}>
            <DialogHeader header={header} />
            <DialogBody {...body} />
            <DialogFooter footer={footer} />
          </DialogStyle>
        </TouchableWithoutFeedback>
      </DialogContainerStyle>
    </TouchableWithoutFeedback>
  );
};

export default Dialog;
