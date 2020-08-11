import styled from 'styled-components/native';

export const Container = styled.View`
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
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#00acee',
})``;
