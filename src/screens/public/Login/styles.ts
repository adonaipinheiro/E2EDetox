import styled from 'styled-components/native';

import {logo} from '../../../assets/Logo';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 47px;
  background-color: #57ceb926;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 75px;
  height: 75px;
  border-radius: 4px;
`;

export const PageTitle = styled.Text`
  font-size: 21px;
  color: #012720;
  margin: 50px 0;
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

export const ButtonRegister = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 100px;
`;

export const ButtonRegisterText = styled.Text`
  font-size: 14px;
  color: #012720;
`;

export const ButtonRegisterTextBold = styled(ButtonRegisterText)`
  font-weight: bold;
  color: #2abfa4;
  text-decoration: underline;
  text-decoration-color: #2abfa4;
`;

export {Input, Button};
