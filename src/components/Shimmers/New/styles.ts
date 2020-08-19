import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const shimmerConfig = {
  autoRun: true,
  visible: false,
  colorShimmer: ['#ebebeb', '#c5c5c5', '#ebebeb'],
};

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  position: absolute;
  top: ${getStatusBarHeight() + 'px'};
  left: 20px;
  width: 30px;
  height: 30px;
`;

export const Logo = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  width: 40px;
  height: 40px;
`;

export const Title = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  height: 21px;
  width: 75px;
  margin: 20px;
`;

export const TagArea = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 60px;
  border-radius: 30px;
  padding: 5px 10px;
  margin-bottom: 20px;
`;

export const ContentArea = styled(ShimmerPlaceHolder).attrs(shimmerConfig)`
  flex: 1;
  padding: 0 20px;
  width: 100%;
`;
