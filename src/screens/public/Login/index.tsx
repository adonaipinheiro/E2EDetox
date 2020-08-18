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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logIn = () => {
    Keyboard.dismiss();
    navigation.replace('Timeline');
  };

  const register = () => {
    Keyboard.dismiss();
    navigation.navigate('Register');
  };

  return (
    <Container>
      <Logo />
      <PageTitle>Entrar</PageTitle>
      <Input
        icon="user"
        keyboardType="email-address"
        error={false}
        errorMessage="Usuário não pode ser vazio"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="lock"
        error={false}
        errorMessage="Senha não pode ser vazia"
        secureTextEntry
        value={password}
        placeholder="Senha"
        onChangeText={(pass) => {
          setPassword(pass);
        }}
      />

      <Button
        isLoading={false}
        isDisabled={false}
        buttonText="Entrar"
        onPress={logIn}
      />

      <ButtonRegister onPress={register}>
        <ButtonRegisterText>
          Não possui conta?{' '}
          <ButtonRegisterTextBold>Crie sua conta</ButtonRegisterTextBold>
        </ButtonRegisterText>
      </ButtonRegister>
    </Container>
  );
};

export default Login;
