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
  error: boolean;
  errorMessage: string;
  icon: string;
}

const Input: React.FC<Props> = ({
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
        <InputArea {...props} />
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
