import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens publics
import Login from './screens/public/Login';
import Preload from './screens/public/Preload';
import Register from './screens/public/Register';

// Screens privates
import Timeline from './screens/private/Timeline';
import Profile from './screens/private/Profile';
import New from './screens/private/Timeline/New';

// Types
import {RootStackParamList} from './types/routeList';

const Stack = createStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer fallback={Preload}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Preload">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
