import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonText, Spinner} from './styles';

// Types
interface Props extends TouchableOpacityProps {
  isDisabled: boolean;
  isLoading: boolean;
  color?: string;
  buttonTextColor?: string;
  buttonText: string;
}

const Button: React.FC<Props> = ({
  color,
  buttonText,
  buttonTextColor,
  isDisabled,
  isLoading,
  ...props
}) => {
  return (
    <Container
      activeOpacity={0.6}
      disabled={isDisabled}
      isDisabled={isDisabled}
      color={color}
      {...props}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ButtonText isDisabled={isDisabled} color={buttonTextColor}>
          {buttonText}
        </ButtonText>
      )}
    </Container>
  );
};

export default Button;
