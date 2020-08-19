import styled from 'styled-components/native';
import {logo} from '../../../../assets/Logo';
import Icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// Shimmer
import New from '../../../../components/Shimmers/New';

type TagType = {
  color: string;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${getStatusBarHeight() + 'px'};
  left: 20px;
`;

export const BackButtonIcon = styled(Icon).attrs({
  name: 'arrow-left',
})`
  font-size: 24px;
  color: #2abfa4;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 40px;
  height: 40px;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 20px;
`;

export const TagArea = styled.View<TagType>`
  background-color: ${(props) => '#' + props.color + '95'};
  border-width: 1px;
  border-color: ${(props) => '#' + props.color};
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 20px;
`;

export const TagName = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ContentArea = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const ContentText = styled.Text`
  color: #000000;
  font-weight: bold;
  text-align: justify;
`;

export {New};
