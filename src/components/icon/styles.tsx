import styled from 'styled-components/native';

interface IIconStyleProps {
  size: number;
}

export const IconStyle = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const IconContainerStyle = styled.View<IIconStyleProps>`
  ${({ size }) => `width: ${size}px; height: ${size}px`};
  border-radius: ${({ size }) => `${size}px`};
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;
