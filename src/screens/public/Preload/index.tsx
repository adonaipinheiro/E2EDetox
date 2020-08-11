import React, {useEffect, useCallback} from 'react';
import {SharedElement} from 'react-navigation-shared-element';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {Container, LoadingSpinner, Logo} from './styles';

const Preload: React.FC<NavigationProps> = ({navigation}) => {
  const navigateTo = useCallback(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, [navigation]);

  useEffect(() => {
    navigateTo();
  }, [navigateTo]);

  return (
    <Container>
      <SharedElement id="logo">
        <Logo />
      </SharedElement>
      <LoadingSpinner />
    </Container>
  );
};

export default Preload;
