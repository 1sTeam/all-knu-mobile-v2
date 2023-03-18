import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainerStyle = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: flex-end;
`;

export const ModalStyle = styled(Animated.View)<{ size: 'sm' | 'md' }>`
  height: ${({ size }) => (size === 'sm' ? '40%' : '80%')};
  width: 100%;
  padding: 24px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalHeader = styled.View`
  flex: 0.5;
  width: 100%;
  padding: 4px;
  justify-content: center;
`;

export const ModalHeaderText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const ModalDivider = styled.View`
  width: 80%;
  height: 2px;
  border-radius: 2px;
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const ModalBody = styled.View`
  flex: 4;
  width: 100%;
  padding: 4px;
  justify-content: center;
`;

export const ModalFooter = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 4px;
`;
