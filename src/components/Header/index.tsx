import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {withNavigation} from 'react-navigation';

import {
  Container,
  ContainerBackground,
  BackButton,
  BackButtonIcon,
  UserContainer,
  ImageContainer,
  Image,
  NameContainer,
  Name,
  LogoutButtonArea,
  LogoutButtonText,
} from './styles';

export interface Props extends TouchableOpacityProps {
  timeline?: boolean;
  navigation?: any;
}

const Header: React.FC<Props> = ({timeline, navigation, ...props}) => {
  const logOut = () => {
    navigation.navigate('Preload');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ContainerBackground timeline={timeline}>
        <BackButton timeline={timeline} onPress={goBack}>
          <BackButtonIcon name="arrow-left" />
        </BackButton>
        <UserContainer timeline={timeline}>
          <ImageContainer timeline={timeline} {...props}>
            <Image timeline={timeline} />
          </ImageContainer>
          <NameContainer timeline={timeline} {...props}>
            <Name timeline={timeline}>Adonai Pinheiro</Name>
          </NameContainer>
        </UserContainer>
        <LogoutButtonArea timeline={timeline} onPress={logOut}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButtonArea>
      </ContainerBackground>
    </Container>
  );
};

export default withNavigation(Header);
