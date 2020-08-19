import React, {useEffect, useCallback} from 'react';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {Container, LoadingSpinner, Logo, LoadingText} from './styles';

const Preload: React.FC<NavigationProps> = ({navigation}) => {
  const navigateTo = useCallback(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 10000);
  }, [navigation]);

  useEffect(() => {
    navigateTo();
  }, [navigateTo]);

  return (
    <Container testID="preload">
      <Logo />
      <LoadingText>Carregando</LoadingText>
      <LoadingSpinner />
    </Container>
  );
};

export default Preload;
