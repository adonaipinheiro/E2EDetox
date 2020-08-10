import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from './routeList';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type NavigationProps = {
  navigation: ScreenNavigationProp;
};
