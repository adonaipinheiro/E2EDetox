import React, {useState} from 'react';

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

const Register: React.FC<NavigationProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const goBack = () => {
    navigation.goBack();
  };

  const register = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <BackButton onPress={goBack}>
        <BackButtonIcon name="arrow-left" />
      </BackButton>
      <Logo />
      <Input
        icon="user"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="mail"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="key"
        value={username}
        placeholder="Usuário"
        onChangeText={(user) => setUsername(user)}
      />
      <Input
        icon="key"
        value={password}
        placeholder="Senha"
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

export default Register;
