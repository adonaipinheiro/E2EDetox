import React from 'react';

import {Container, IconArea, Icon, InputArea} from './styles';

interface Props {
  placeholder: string;
  value: string;
  isPass?: boolean;
  onChangeText: (arg1: string) => void;
}

const Input: React.FC<Props> = ({placeholder, onChangeText, value, isPass}) => {
  return (
    <Container>
      <IconArea>
        <Icon />
      </IconArea>
      <InputArea
        value={value}
        secureTextEntry={isPass}
        placeholder={placeholder}
        onChangeText={(text: string) => onChangeText(text)}
      />
    </Container>
  );
};

export default Input;
