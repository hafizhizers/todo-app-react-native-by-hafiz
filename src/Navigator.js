import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import Home from './screens/Home';

import {Provider} from 'react-redux';
import store from './stores/store';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function Navigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator> */}

        {/* <BottomTab.Navigator initialRouteName="Home">
          <BottomTab.Screen name="Login" component={Login} />
          <BottomTab.Screen name="Home" component={Home} />
        </BottomTab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

export default Navigator;
