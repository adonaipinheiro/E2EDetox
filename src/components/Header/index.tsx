import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
}

const Header: React.FC<Props> = ({timeline, ...props}) => {
  const navigation = useNavigation();

  const logOut = () => {
    navigation.navigate('Preload');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ContainerBackground timeline={timeline}>
        {!timeline && (
          <BackButton timeline={timeline} onPress={goBack}>
            <BackButtonIcon name="arrow-left" />
          </BackButton>
        )}

        <UserContainer timeline={timeline}>
          <ImageContainer testID="imageProfile" timeline={timeline} {...props}>
            <Image timeline={timeline} />
          </ImageContainer>
          <NameContainer timeline={timeline} {...props}>
            <Name timeline={timeline}>Mia Polive</Name>
          </NameContainer>
        </UserContainer>

        {timeline && (
          <LogoutButtonArea timeline={timeline} onPress={logOut}>
            <LogoutButtonText>Sair</LogoutButtonText>
          </LogoutButtonArea>
        )}
      </ContainerBackground>
    </Container>
  );
};

export default Header;
