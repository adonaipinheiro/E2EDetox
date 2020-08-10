import React from 'react';

import {Container, ButtonText} from './styles';

// Types
export type Props = {
  isDisabled?: boolean;
  color?: string;
  text: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({
  color,
  text,
  isDisabled = false,
  onPress,
}) => {
  return (
    <Container isDisabled={isDisabled} color={color} onPress={onPress}>
      <ButtonText isDisabled={isDisabled}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
