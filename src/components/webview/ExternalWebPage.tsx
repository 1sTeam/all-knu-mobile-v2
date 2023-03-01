import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import WebView from 'react-native-webview';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../../navigation/StackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useAnimation from '../../utils/animation/useAnimation';
import {
  ExternalContainerStyle,
  ExternalHeaderStyle,
  ExternalHeaderTextStyle,
  ExternalHeaderTitleStyle,
  ExternalStyle,
} from './styles';
import { DEFAULT_SLIDE_UP_INTERPOLATE } from '../../utils/animation/interpolateData';

const ExternalWebPage = ({
  route,
  navigation,
}: StackScreenProps<StackNavigatorParamList, 'ExternalWebPage'>) => {
  const { uri } = route.params;

  const { animation, endAnimation } = useAnimation(0, 1);
  const animationStyles = {
    transform: [
      {
        translateY: animation.interpolate(DEFAULT_SLIDE_UP_INTERPOLATE),
      },
    ],
  };

  const exitModal = () => {
    endAnimation();
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={exitModal}>
      <ExternalContainerStyle>
        <TouchableWithoutFeedback>
          <ExternalStyle style={animationStyles}>
            <ExternalHeaderStyle>
              <Icon name="close" size={24} color="gray" onPress={exitModal} />
              <ExternalHeaderTitleStyle>
                <ExternalHeaderTextStyle>Text1</ExternalHeaderTextStyle>
                <ExternalHeaderTextStyle>Text2</ExternalHeaderTextStyle>
              </ExternalHeaderTitleStyle>
              <Icon name="reload" size={24} color="gray" onPress={exitModal} />
            </ExternalHeaderStyle>
            <WebView
              source={{ uri }}
              originWhitelist={['*']}
              sharedCookiesEnabled={true}
              thirdPartyCookiesEnabled={true}
            />
          </ExternalStyle>
        </TouchableWithoutFeedback>
      </ExternalContainerStyle>
    </TouchableWithoutFeedback>
  );
};

export default ExternalWebPage;
