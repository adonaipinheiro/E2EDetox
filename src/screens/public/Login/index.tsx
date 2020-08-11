import React, {useState} from 'react';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {
  Container,
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
    navigation.replace('Timeline');
  };

  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <Logo />
      <Input
        icon="user"
        keyboardType="email-address"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="key"
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
          <ButtonRegisterTextBold>Cadastre-se</ButtonRegisterTextBold>
        </ButtonRegisterText>
      </ButtonRegister>
    </Container>
  );
};

export default Login;
