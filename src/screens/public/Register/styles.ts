import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FIcon from 'react-native-vector-icons/Feather';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {logo} from '../../../assets/Logo';

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
  margin-bottom: 15px;
`;

export const PageTitle = styled.Text`
  font-size: 21px;
  color: #012720;
  margin: 50px 0;
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight(true) + 20 + 'px'};
  left: 20px;
`;

export const BackButtonIcon = styled(FIcon)`
  font-size: 30px;
  color: #05a387;
`;

export {Input, Button};
