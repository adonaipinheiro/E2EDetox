import styled from 'styled-components/native';

interface Props {
  color: string;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
  border-color: #b8b8b8;
  border-right-width: 1px;
  border-bottom-width: 1px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const TagArea = styled.View<Props>`
  background-color: ${(props) => '#' + props.color + '95'};
  width: 35px;
  height: 15px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  margin: 10px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const Content = styled.Text`
  font-size: 14px;
  font-weight: normal;
`;
