import styled from 'styled-components/native';

interface IErrorTextStyleProps {
  category?: 'title' | 'description';
}

export const ErrorPageStyle = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ErrorImageStyle = styled.View`
  flex: 1.5;
  width: 100%;
  height: 240px;
`;

export const ErrorTextContainerStyle = styled.View`
  flex: 1;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
`;

export const ErrorTextStyle = styled.Text<IErrorTextStyleProps>`
  font-size: ${({ category }) => (category === 'title' ? '32px' : '16px')};
  font-weight: ${({ category }) => (category === 'title' ? 600 : 400)};
`;
