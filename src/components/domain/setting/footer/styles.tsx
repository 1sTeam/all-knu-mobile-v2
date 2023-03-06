import styled from 'styled-components/native';

export const SettingFooterStyle = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 36px;
`;

export const SettingFooterLinkStyle = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const SettingFooterTextStyle = styled.Text`
  color: gray;
  font-size: 10px;
`;

export const SettingFooterTextLinkStyle = styled(SettingFooterTextStyle)`
  text-decoration: underline;
`;
