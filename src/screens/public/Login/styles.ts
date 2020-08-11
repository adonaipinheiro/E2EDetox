import styled from 'styled-components/native';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: {
    uri:
      'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png',
  },
  resizeMode: 'contain',
})`
  width: 125px;
  height: 125px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const ButtonRegister = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const ButtonRegisterText = styled.Text``;

export const ButtonRegisterTextBold = styled(ButtonRegisterText)`
  text-transform: uppercase;
  font-weight: bold;
  color: #00acee;
`;

export {Input, Button};
