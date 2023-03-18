import styled from 'styled-components/native';

export const MapInfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
`;

export const MapInfoHeaderImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background-color: beige;
  padding: 8px;
`;

export const MapInfoHeaderTextContainer = styled.View`
  align-items: flex-end;
`;
export const MapInfoHeaderText = styled.Text`
  font-size: 12px;
`;

export const MapInfoHeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 2px;
`;

export const MapInfoFooter = styled.View`
  padding: 8px 4px;
`;

export const MapInfoFooterText = styled.Text`
  font-size: 12px;
`;
