import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const DialogContainerStyle = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const DialogStyle = styled(Animated.View)`
  width: 90%;
  min-height: 360px;
  background-color: white;
  border-radius: 16px;
`;

export const DialogHeaderStyle = styled.View`
  flex: 0.7;
  padding: 4px 8px;
  justify-content: center;
`;

export const DialogHeaderTextStyle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const DialogBodyStyle = styled.View`
  flex: 5;
  gap: 6px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export const DialogBodyTitleStyle = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

export const DialogFooterStyle = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;
