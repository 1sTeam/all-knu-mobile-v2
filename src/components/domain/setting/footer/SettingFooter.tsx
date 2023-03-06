import React from 'react';

import {
  SettingFooterLinkStyle,
  SettingFooterStyle,
  SettingFooterTextLinkStyle,
  SettingFooterTextStyle,
} from './styles';

const SettingFooter = () => {
  return (
    <SettingFooterStyle>
      <SettingFooterLinkStyle>
        <SettingFooterTextLinkStyle>
          개인정보처리방침
        </SettingFooterTextLinkStyle>
      </SettingFooterLinkStyle>
      <SettingFooterTextStyle>
        강낭이 아이콘 제공자 : "권혜상"
      </SettingFooterTextStyle>
      <SettingFooterTextStyle>
        Copyright © 2022 @ReBuild all rights reserved
      </SettingFooterTextStyle>
    </SettingFooterStyle>
  );
};

export default SettingFooter;
