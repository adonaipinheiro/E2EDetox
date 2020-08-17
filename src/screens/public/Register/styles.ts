import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FIcon from 'react-native-vector-icons/Feather';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const uri =
  'https://floriculturapontoverde.com.br/wp-content/themes/intrigue%20child/images/fb_icon.png';

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
  source: {
    uri: uri,
  },
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
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
