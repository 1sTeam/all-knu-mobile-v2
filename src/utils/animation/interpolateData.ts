import { Dimensions } from 'react-native';

export const DEFAULT_SLIDE_UP_INTERPOLATE = {
  inputRange: [0, 1],
  outputRange: [Math.floor(Dimensions.get('screen').height * 0.8), 0],
};
