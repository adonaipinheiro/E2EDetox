import React from 'react';
import {TextInputProps} from 'react-native';

import {
  Container,
  InputContainer,
  IconArea,
  Icon,
  InputArea,
  ErrorArea,
  ErrorText,
} from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  error: boolean;
  errorMessage: string;
  value: string;
  icon: string;
  onChangeText: (arg1: string) => void;
}

const Input: React.FC<Props> = ({
  placeholder,
  onChangeText,
  value,
  icon,
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <Container>
      <InputContainer error={error}>
        <IconArea>
          <Icon name={icon} />
        </IconArea>
        <InputArea
          {...props}
          value={value}
          placeholder={placeholder}
          onChangeText={(text: string) => onChangeText(text)}
        />
      </InputContainer>
      {error && (
        <ErrorArea error={error}>
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorArea>
      )}
    </Container>
  );
};

export default Input;
