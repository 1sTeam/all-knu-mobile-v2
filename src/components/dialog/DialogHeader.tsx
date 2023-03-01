import React from 'react';
import { DialogHeaderStyle, DialogHeaderTextStyle } from './styles';

interface IDiaglogHeaderProps {
  header?: string;
}

const DialogHeader = ({ header }: IDiaglogHeaderProps) => {
  return header ? (
    <DialogHeaderStyle>
      <DialogHeaderTextStyle>{header}</DialogHeaderTextStyle>
    </DialogHeaderStyle>
  ) : null;
};

export default DialogHeader;
