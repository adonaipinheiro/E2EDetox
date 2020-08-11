import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {
  SharedElement,
  SharedElementsComponentConfig,
} from 'react-navigation-shared-element';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {
  Container,
  Logo,
  BackButton,
  BackButtonIcon,
  Button,
  Input,
} from './styles';

const Register: React.FC<NavigationProps> & {sharedElements: Function} = ({
  navigation,
}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const goBack = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const register = () => {
    Keyboard.dismiss();
    navigation.navigate('Login');
  };

  return (
    <Container>
      <BackButton onPress={goBack}>
        <BackButtonIcon name="arrow-left" />
      </BackButton>
      <SharedElement id="logo">
        <Logo />
      </SharedElement>
      <Input
        icon="user"
        value={username}
        placeholder="Nome"
        returnKeyType="next"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="user"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="mail"
        value={username}
        placeholder="E-mail"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="lock"
        value={username}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="lock"
        value={password}
        placeholder="Repetir senha"
        secureTextEntry
        onChangeText={(pass) => {
          setPassword(pass);
        }}
      />
      <Button
        isLoading={false}
        isDisabled={false}
        buttonText="Cadastrar"
        onPress={register}
      />
    </Container>
  );
};

const sharedElements: SharedElementsComponentConfig = () => {
  return [{id: 'logo'}];
};

Register.sharedElements = sharedElements;

export default Register;
