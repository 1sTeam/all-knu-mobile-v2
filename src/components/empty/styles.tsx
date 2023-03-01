import styled from 'styled-components/native';

interface IEmptyTextStyleProps {
  category?: 'title' | 'description';
}

export const EmptyPageStyle = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const EmptyImageStyle = styled.View`
  flex: 1.5;
  width: 100%;
  height: 240px;
`;

export const EmptyTextContainerStyle = styled.View`
  flex: 1;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
`;

export const EmptyTextStyle = styled.Text<IEmptyTextStyleProps>`
  font-size: ${({ category }) => (category === 'title' ? '32px' : '16px')};
  font-weight: ${({ category }) => (category === 'title' ? 600 : 400)};
`;
