import React, {useState} from 'react';
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

const Stack = createStackNavigator();

function Routes() {
  const [isLogged] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen name="Timeline" component={Timeline} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="New" component={New} />
          </>
        ) : (
          <>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
