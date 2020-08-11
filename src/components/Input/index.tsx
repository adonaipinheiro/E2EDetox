import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, IconArea, Icon, InputArea} from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  icon: string;
  onChangeText: (arg1: string) => void;
}

const Input: React.FC<Props> = ({
  placeholder,
  onChangeText,
  value,
  icon,
  ...props
}) => {
  return (
    <>
      <Container>
        <IconArea>
          <Icon name={icon} />
        </IconArea>
        <InputArea
          {...props}
          value={value}
          placeholder={placeholder}
          onChangeText={(text: string) => onChangeText(text)}
        />
      </Container>
    </>
  );
};

export default Input;
