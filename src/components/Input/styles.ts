import styled from 'styled-components/native';
import FIcon from 'react-native-vector-icons/Feather';

interface InputProps {
  error: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<InputProps>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: ${(props) => (props.error ? '0' : '15px')};
  padding: 5px;
`;

export const IconArea = styled.View`
  width: 30px;
  height: 30px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Icon = styled(FIcon)`
  font-size: 20px;
  color: #2abfa4;
  margin-left: 2.5px;
`;

export const InputArea = styled.TextInput`
  padding: 5px 10px 5px 5px;
  width: 170px;
  color: #000000;
  font-size: 14px;
`;

export const ErrorArea = styled.View<InputProps>`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const ErrorText = styled.Text`
  color: #ff0000;
`;
