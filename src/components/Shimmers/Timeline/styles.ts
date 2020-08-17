import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Dimensions} from 'react-native';

const shimmerConfig = {
  autoRun: true,
  visible: false,
  colorShimmer: ['#ebebeb', '#c5c5c5', '#ebebeb'],
};

export const Container = styled.View`
  flex: 1;
  background: #fbf8f8;
`;

export const Header = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  width: ${Dimensions.get('window').width + 'px'};
  height: 150px;
`;

export const ImageProfile = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  height: 97px;
  width: 97px;
  border-radius: 48.5px;
  margin-top: -73.5px;
  margin-left: 30px;
`;

export const TagTitle = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  width: 50px;
  margin-left: 30px;
  margin-top: 10px;
`;

export const TagArea = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  max-width: 100%;
  justify-content: space-between;
`;

export const TagItem = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  width: 70px;
  height: 30px;
  border-radius: 12.5px;
`;
