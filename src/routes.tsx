import {createAppContainer} from 'react-navigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

// Screens publics
import Login from './screens/public/Login';
import Preload from './screens/public/Preload';
import Register from './screens/public/Register';

// Screens privates
import Timeline from './screens/private/Timeline';
import Profile from './screens/private/Profile';
import New from './screens/private/Timeline/New';

const stackNavigator = createSharedElementStackNavigator(
  {
    Preload,
    Login,
    Register,
    Timeline,
    Profile,
    New,
  },
  {
    initialRouteName: 'Preload',
    mode: 'card',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: '#f2f2f2'},
      cardOverlayEnabled: true,
    },
  },
);

const Routes = createAppContainer(stackNavigator);

export default Routes;
