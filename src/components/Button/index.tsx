import React from 'react';

import {Container, ButtonText, Spinner} from './styles';

// Types
type Props = {
  isDisabled: boolean;
  isLoading: boolean;
  color?: string;
  buttonTextColor?: string;
  buttonText: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({
  color,
  buttonText,
  buttonTextColor,
  isDisabled,
  isLoading,
  onPress,
}) => {
  return (
    <Container
      disabled={isDisabled}
      isDisabled={isDisabled}
      color={color}
      onPress={onPress}>
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
