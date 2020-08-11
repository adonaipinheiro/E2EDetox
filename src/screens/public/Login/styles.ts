import styled from 'styled-components/native';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: {},
})`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-color: #ddd;
  margin-bottom: 15px;
`;

export const ButtonRegister = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;

export const ButtonRegisterText = styled.Text``;

export const ButtonRegisterTextBold = styled(ButtonRegisterText)`
  text-transform: uppercase;
  font-weight: bold;
`;

export {Input, Button};
