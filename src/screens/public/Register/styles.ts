import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FIcon from 'react-native-vector-icons/Feather';

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

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight(true) + 20 + 'px'};
  left: 20px;
`;

export const BackButtonIcon = styled(FIcon)`
  font-size: 24px;
  color: #0066cc;
`;

export {Input, Button};
