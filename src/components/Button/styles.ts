import styled from 'styled-components/native';

// Types
export type ButtonProps = {
  isDisabled?: boolean;
  color?: string;
};

export type TextProps = {
  isDisabled?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  background-color: ${(props) => props.color || '#ddd'};
  width: 200px;
  height: 60px;
`;

export const ButtonText = styled.Text<TextProps>`
  text-transform: uppercase;
`;
