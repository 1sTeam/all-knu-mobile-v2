/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import Lottie from 'lottie-react-native';
import lottieFile from '../../../public/lottie/loading-animation.json';
import { LoadingPageStyle } from './styles';

const LoadingPage = () => {
  return (
    <LoadingPageStyle>
      <Lottie
        source={lottieFile}
        style={{ width: 360, height: 280 }}
        autoPlay
        loop
      />
    </LoadingPageStyle>
  );
};

export default LoadingPage;
