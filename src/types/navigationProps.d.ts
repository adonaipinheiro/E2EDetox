import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from './routeList';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface NavigationProps {
  navigation: ScreenNavigationProp;
}
