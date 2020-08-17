import styled from 'styled-components/native';

const uri =
  'https://floriculturapontoverde.com.br/wp-content/themes/intrigue%20child/images/fb_icon.png';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2abfa4;
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
