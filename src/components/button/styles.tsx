import styled from 'styled-components/native';

export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.button.primary.background};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextStyle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;
