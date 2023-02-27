import styled from 'styled-components/native';

export const LoginContainerStyle = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  flex-direction: column;
  gap: 14px;
`;

export const LoginTitle = styled.Text`
  font-size: 32px;
  font-weight: 600;
`;

export const LoginTopStyle = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;

export const LoginBottomStyle = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-evenly;
`;

export const LoginFormStyle = styled.View`
  gap: 24px;
`;

export const LoginVersionStyle = styled.View`
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LoginVersionTextStyle = styled.Text`
  font-size: 12px;
`;
