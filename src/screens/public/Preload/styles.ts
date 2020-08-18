import styled from 'styled-components/native';
import {logoBranco} from '../../../assets/Logo';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2abfa4;
`;

export const Logo = styled.Image.attrs({
  source: logoBranco,
  resizeMode: 'contain',
})`
  width: 75px;
  height: 75px;
  border-radius: 4px;
`;

export const LoadingText = styled.Text`
  font-size: 21px;
  color: #ffffff;
  margin: 10px 0;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#ffffff',
})``;
