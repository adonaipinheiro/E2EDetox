import styled from 'styled-components/native';

export const Container = styled.View`
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
  margin-bottom: 10px;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
})``;
