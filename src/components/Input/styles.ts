import styled from 'styled-components/native';
import FIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 40px;
  background-color: #ddd;
  margin: 0 0 15px;
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
  color: #0066cc;
`;

export const InputArea = styled.TextInput`
  padding: 5px 10px 5px 5px;
  width: 170px;
`;
