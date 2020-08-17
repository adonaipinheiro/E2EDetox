import styled from 'styled-components/native';

import TimelineShimmer from '../../../components/Shimmers/Timeline';
import Header from '../../../components/Header';

const switchConfig = {
  trackColor: {true: '#00FFD133', false: '#ddd'},
};

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fbf8f8;
`;

export const Items = styled.View`
  margin: 30px;
`;

export const ItemArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const ItemText = styled.Text`
  font-size: 21px;
  font-weight: normal;
`;

export const ItemSwitch = styled.Switch.attrs(switchConfig)``;

export const Separator = styled.View`
  height: 1px;
  background-color: #ddd;
  width: 100%;
  margin: 5px 0;
`;

export {TimelineShimmer, Header};
