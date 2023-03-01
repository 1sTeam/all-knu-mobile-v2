import React from 'react';
import {
  ItemLeftStyle,
  ItemRightStyle,
  ItemStyle,
  ItemTextStyle,
} from './styles';
import Icon from '../icon/Icon';
import moment from 'moment';

interface IItemProps {
  id: string;
  title?: string;
  body?: string;
  sub?: moment.Moment | string;
}

const Item = ({ title, body, sub }: IItemProps) => {
  const convertSub =
    typeof sub !== 'string' ? moment().diff(sub, 'hours') : sub;
  return (
    <ItemStyle>
      <ItemLeftStyle>
        <Icon name="notifications" size={40} />
      </ItemLeftStyle>
      <ItemRightStyle>
        <ItemTextStyle options="title">{title}</ItemTextStyle>
        <ItemTextStyle numberOfLines={2}>{body}</ItemTextStyle>
        <ItemTextStyle options="sub">{convertSub}</ItemTextStyle>
      </ItemRightStyle>
    </ItemStyle>
  );
};

export default Item;
