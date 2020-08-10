import React, {useState} from 'react';

// Types
import {NavigationProps} from '~/types/navigationProps';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {Container, Logo} from './styles';

const Login: React.FC<NavigationProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logIn = () => {};

  return (
    <Container>
      <Logo />
      <Input
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        isPass
        value={password}
        placeholder="Senha"
        onChangeText={(pass) => {
          setPassword(pass);
        }}
      />
      <Button text="Entrar" onPress={logIn} />
    </Container>
  );
};

export default Login;
