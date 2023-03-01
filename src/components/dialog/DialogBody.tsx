/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { DialogBodyStyle, DialogBodyTitleStyle } from './styles';
import Lottie from 'lottie-react-native';
import ConfirmLottie from '../../../public/lottie/confirm.json';
import RejectLottie from '../../../public/lottie/reject.json';

const LottieImages = {
  Confirm: ConfirmLottie,
  Reject: RejectLottie,
};

export type DialogImagesName = keyof typeof LottieImages;

interface IDialogBodyProps {
  image: DialogImagesName;
  title: string;
}

const DialogBody = ({ image, title }: IDialogBodyProps) => {
  return (
    <DialogBodyStyle>
      <Lottie
        source={LottieImages[image]}
        style={{
          width: 128,
          height: 128,
        }}
        autoPlay
        loop
      />
      <DialogBodyTitleStyle>{title}</DialogBodyTitleStyle>
    </DialogBodyStyle>
  );
};

export default DialogBody;
