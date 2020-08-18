import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.View`
  margin: 30px 30px 0;
`;

export const TagsTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const TagsFlatList = styled(FlatList)`
  margin-top: 10px;
`;
