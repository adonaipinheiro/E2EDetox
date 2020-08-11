import styled from 'styled-components/native';

// Types
type ButtonProps = {
  isDisabled?: boolean;
  color?: string;
};

type TextProps = {
  isDisabled?: boolean;
  color?: string;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    (props.color || '#0066CC') + (props.isDisabled ? '75' : '')};
  width: 200px;
  height: 40px;
  border-radius: 4px;
  margin: 0 0 15px;
`;

export const ButtonText = styled.Text<TextProps>`
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.color || '#FFF'};
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: '#FFF',
})``;
