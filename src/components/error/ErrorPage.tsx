import React from 'react';
import Lottie from 'lottie-react-native';
import lottieFile from '../../../public/lottie/error-404.json';
import {
  ErrorImageStyle,
  ErrorPageStyle,
  ErrorTextContainerStyle,
  ErrorTextStyle,
} from './styles';

interface IErrorPageProps {
  title: string;
  description?: string;
}

const ErrorPage = ({ title, description }: IErrorPageProps) => {
  return (
    <ErrorPageStyle>
      <ErrorImageStyle>
        <Lottie source={lottieFile} autoPlay loop />
      </ErrorImageStyle>
      <ErrorTextContainerStyle>
        <ErrorTextStyle category="title">{title}</ErrorTextStyle>
        <ErrorTextStyle>{description}</ErrorTextStyle>
      </ErrorTextContainerStyle>
    </ErrorPageStyle>
  );
};

export default ErrorPage;
