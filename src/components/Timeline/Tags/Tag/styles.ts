import styled from 'styled-components/native';

interface Props {
  color: string;
}

export const Container = styled.View<Props>`
  background-color: ${(props) => '#' + props.color + '95'};
  border-width: 1px;
  border-color: ${(props) => '#' + props.color};
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const TagName = styled.Text`
  color: #fff;
  font-weight: bold;
`;
