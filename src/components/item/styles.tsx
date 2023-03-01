import styled from 'styled-components/native';

interface IItemTextStyleProps {
  options?: 'title' | 'sub';
}

export const ItemStyle = styled.View`
  min-height: 80px;
  padding: 8px;
  gap: 4px;
  flex-direction: row;
  background-color: white;
  border-radius: 12px;
  shadow-color: black;
  shadow-offset: {
    width: 0;
    height: 4px;
  }
  shadow-opacity: 0.08;
  shadow-radius: 12;
  elevation: 1;
`;

export const ItemLeftStyle = styled.View`
  flex: 1;
  align-items: center;
  padding: 4px;
`;

export const ItemRightStyle = styled.View`
  flex: 5;
  padding: 4px 0;
  gap: 1px;
`;

export const ItemTextStyle = styled.Text<IItemTextStyleProps>`
  ${({ options }) => {
    const temp = options ?? 'default';
    switch (temp) {
      case 'title':
        return 'font-size: 14px; font-weight: 700;';
      case 'sub':
        return 'padding-top: 2px; font-size: 10px; color: gray;';
      default:
        return 'width: 95%; font-size: 12px;';
    }
  }}
`;
