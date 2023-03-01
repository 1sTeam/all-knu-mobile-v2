import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainerStyle = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: flex-end;
`;

export const ModalStyle = styled(Animated.View)`
  width: 100%;
  height: 80%;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
