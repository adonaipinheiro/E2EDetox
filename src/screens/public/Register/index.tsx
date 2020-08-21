import React, {useState} from 'react';
import {Keyboard} from 'react-native';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {
  Container,
  Logo,
  PageTitle,
  BackButton,
  BackButtonIcon,
  Button,
  Input,
} from './styles';

const Register: React.FC<NavigationProps> = ({navigation}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const goBack = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const register = () => {
    Keyboard.dismiss();
    navigation.navigate('Login');
  };

  return (
    <Container testID="register">
      <BackButton onPress={goBack}>
        <BackButtonIcon name="arrow-left" />
      </BackButton>
      <Logo />
      <PageTitle>Cadastre-se</PageTitle>
      <Input
        testID="registerNameField"
        error={false}
        errorMessage="O nome não pode estar em branco"
        icon="user"
        value={name}
        placeholder="Nome"
        returnKeyType="next"
        onChangeText={(text) => setName(text)}
      />
      <Input
        testID="registerEmailField"
        error={false}
        errorMessage="O e-mail não pode estar vazio"
        icon="mail"
        value={email}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        testID="registerPassField"
        error={false}
        errorMessage="A senha não pode estar em branco"
        icon="lock"
        value={password}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        testID="registerRePassField"
        error={password !== passwordConfirm}
        errorMessage="As senhas não conferem"
        icon="repeat"
        value={passwordConfirm}
        placeholder="Repetir senha"
        secureTextEntry
        onChangeText={(text) => {
          setPasswordConfirm(text);
        }}
      />
      <Button
        testID="registerButtonAccess"
        isLoading={password !== passwordConfirm}
        isDisabled={password !== passwordConfirm}
        buttonText="Cadastrar"
        onPress={register}
      />
    </Container>
  );
};

export default Register;
