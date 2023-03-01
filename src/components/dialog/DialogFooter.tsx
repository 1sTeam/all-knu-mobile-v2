import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Button from '../button/Button';
import { DialogFooterStyle } from './styles';

interface IDialogFooterProps {
  footer: { onPress: () => void; title: string }[];
}

const DialogFooter = ({ footer }: IDialogFooterProps) => {
  const navigation = useNavigation();
  return (
    <DialogFooterStyle>
      <Button onPress={() => navigation.goBack()} title="닫기" />
      {/* {footer.map(props => (
        <Button {...props} />
      ))} */}
    </DialogFooterStyle>
  );
};

export default DialogFooter;
