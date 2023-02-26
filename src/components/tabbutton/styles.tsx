import styled from 'styled-components/native';

interface ITabButtonStyleProps {
  isFocused: boolean;
}

export const TabButtonStyle = styled.TouchableOpacity<ITabButtonStyleProps>`
  min-width: 50px;
  height: 32px;
  border-radius: 24px;
  background-color: ${({ isFocused }) => (isFocused ? '#2F80ED' : 'white')};
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.8)};
`;

export const TabButtonTextStyle = styled.Text<ITabButtonStyleProps>`
  font-size: 14px;
  text-align: center;
  line-height: 32px;
  padding: 0 12px;
  color: ${({ isFocused }) => (isFocused ? 'white' : '#2F80ED')};
`;
