import styled from 'styled-components/native';

interface ISettingOtherItemTextHighlight {
  color?: string;
}

export const SettingOthersStyle = styled.View`
  padding: 8px 0;
  gap: 24px;
`;

export const SettingOtherItemStyle = styled.TouchableOpacity`
  height: 28px;
  padding: 0 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingOtherItemSwitchStyle = styled.View`
  height: 28px;
  padding: 0 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingOtherItemTextStyle = styled.Text<ISettingOtherItemTextHighlight>`
  color: ${({ color }) => color ?? 'black'};
  font-size: 20px;
`;

export const SettingOtherItemDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  border-radius: 1px;
`;
