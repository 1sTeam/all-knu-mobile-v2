import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ExternalContainerStyle = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: flex-end;
`;

export const ExternalStyle = styled(Animated.View)`
  width: 100%;
  height: 90%;
  background-color: ${({ theme }) => theme.background.primary};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ExternalHeaderStyle = styled.View`
  width: 100%;
  height: 48px;
  padding: 8px;
  align-items: center;
  flex-direction: row;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom-color: ${({ theme }) => theme.background.secondary};
`;

export const ExternalHeaderTitleStyle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ExternalHeaderTextStyle = styled.Text`
  color: ${({ theme }) => theme.text.primary};
  font-size: 12px;
`;
