import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { InputContainerStyle, InputLabel, InputStyle } from './styles';

export type CustomTextInputType = TextInput & {
  value: string;
};

interface IInputProps {
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  needSecured?: boolean;
}

const Input = (
  { label, defaultValue, placeholder, needSecured }: IInputProps,
  ref: React.ForwardedRef<CustomTextInputType>,
) => {
  const onChange = (text: string) => {
    ref.current.value = text;
  };

  return (
    <InputContainerStyle>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <InputStyle
        ref={ref}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChangeText={onChange}
        autoComplete="off"
        secureTextEntry={needSecured}
      />
    </InputContainerStyle>
  );
};

export default forwardRef(Input);
