import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import FIcon from 'react-native-vector-icons/Feather';

// Type
import {Props} from './';

// Assets
import {profileImg} from '../../assets/Timeline';

const buttonConfig = {
  activeOpacity: 0.7,
};

export const Container = styled.View`
  width: 100%;
`;

export const ContainerBackground = styled.View<Props>`
  width: ${Dimensions.get('screen').width + 'px'};
  height: 150px;
  background-color: #00ffd133;
  justify-content: flex-end;
  align-items: flex-start;

  ${({timeline}) =>
    !timeline &&
    `
    width: ${Dimensions.get('screen').width + 'px'};
    background-color: #00ffd133;
    justify-content: center;
    align-items: center;
    padding-top: ${getStatusBarHeight(true) + 'px'};
    height: 400px;
  `}
`;

export const UserContainer = styled.View<Props>`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0 23.7px;

  ${({timeline}) =>
    !timeline &&
    `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  `}
`;

export const ImageContainer = styled.TouchableOpacity.attrs(buttonConfig)<
  Props
>`
  bottom: -23.5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #0000001a;
  elevation: 5;

  ${({timeline}) =>
    !timeline &&
    `
    bottom: 0;
  `}
`;

export const Image = styled.Image.attrs({
  source: profileImg,
})<Props>`
  background-color: #ddd;
  width: 97px;
  height: 97px;
  border-radius: 48.5px;
  border-width: 5px;
  border-color: #ffffff;

  ${({timeline}) =>
    !timeline &&
    `
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-bottom: 21px;
  `}
`;

export const NameContainer = styled.TouchableOpacity.attrs(buttonConfig)<Props>`
  margin: 0 0 5px 10px;

  ${({timeline}) =>
    !timeline &&
    `
    margin: 0;
  `}
`;

export const Name = styled.Text<Props>`
  font-size: 24px;
  font-weight: bold;
  color: #012720;

  ${({timeline}) =>
    !timeline &&
    `
    font-size: 32px;
  `}
`;

export const LogoutButtonArea = styled.TouchableOpacity.attrs(buttonConfig)<
  Props
>`
  position: absolute;
  right: 18px;
  top: ${getStatusBarHeight() + 'px'};

  ${({timeline}) =>
    !timeline &&
    `
    display: none;
  `}
`;

export const LogoutButtonText = styled.Text`
  color: #05a387;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity.attrs(buttonConfig)<Props>`
  position: absolute;
  top: ${getStatusBarHeight(true) + 'px'};
  left: 20px;

  ${({timeline}) =>
    timeline &&
    `
    display: none;
  `}
`;

export const BackButtonIcon = styled(FIcon)`
  font-size: 30px;
  color: #05a387;
`;
