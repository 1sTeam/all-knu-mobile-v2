import styled from 'styled-components/native';

export const SettingCategoryStyle = styled.View`
  width: 100%;
  min-height: 200px;
  padding: 16px 0;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 12px;
  shadow-color: black;
  shadow-offset: {
    width: 0;
    height: 4px;
  }
  shadow-opacity: 0.08;
  shadow-radius: 12px;
  elevation: 1;
`;

export const SettingCategoryIconStyle = styled.View`
  width: 25%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
