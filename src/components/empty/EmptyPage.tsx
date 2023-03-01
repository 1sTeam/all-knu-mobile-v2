import React from 'react';
import Lottie from 'lottie-react-native';
import lottieFile from '../../../public/lottie/astronaut-light-theme.json';
import {
  EmptyImageStyle,
  EmptyPageStyle,
  EmptyTextContainerStyle,
  EmptyTextStyle,
} from './styles';

interface IEmptyPageProps {
  description?: string;
}

const EmptyPage = ({ description }: IEmptyPageProps) => {
  return (
    <EmptyPageStyle>
      <EmptyImageStyle>
        <Lottie source={lottieFile} autoPlay loop />
      </EmptyImageStyle>
      <EmptyTextContainerStyle>
        <EmptyTextStyle category="title">빈 정보</EmptyTextStyle>
        <EmptyTextStyle>{description}</EmptyTextStyle>
      </EmptyTextContainerStyle>
    </EmptyPageStyle>
  );
};

export default EmptyPage;
