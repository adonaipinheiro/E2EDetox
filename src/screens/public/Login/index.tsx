import React, {useState} from 'react';
import {Keyboard} from 'react-native';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {
  Container,
  PageTitle,
  Logo,
  Input,
  Button,
  ButtonRegister,
  ButtonRegisterText,
  ButtonRegisterTextBold,
} from './styles';

const Login: React.FC<NavigationProps> = ({navigation}) => {
  const [error, setError] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const checkUserAndPass = () => {
    if (username !== 'adonai@gmail.com' || password !== '123456') {
      setError(true);
    } else {
      navigation.replace('Timeline');
    }
  };

  const logIn = () => {
    Keyboard.dismiss();
    checkUserAndPass();
  };

  const register = () => {
    Keyboard.dismiss();
    navigation.navigate('Register');
  };

  return (
    <Container testID="login">
      <Logo />
      <PageTitle>Entrar</PageTitle>
      <Input
        testID="userInput"
        icon="user"
        keyboardType="email-address"
        error={error}
        errorMessage="Usuário não encontrado"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        testID="passInput"
        icon="lock"
        error={error}
        errorMessage="Senha não correspondente"
        secureTextEntry
        value={password}
        placeholder="Senha"
        onChangeText={(pass) => {
          setPassword(pass);
        }}
      />

      <Button
        testID="loginButton"
        isLoading={false}
        isDisabled={false}
        buttonText="Entrar"
        onPress={logIn}
      />

      <ButtonRegister testID="registerButton" onPress={register}>
        <ButtonRegisterText>
          Não possui conta?{' '}
          <ButtonRegisterTextBold>Crie sua conta</ButtonRegisterTextBold>
        </ButtonRegisterText>
      </ButtonRegister>
    </Container>
  );
};

export default Login;
