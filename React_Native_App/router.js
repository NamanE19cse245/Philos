import React, { Component } from 'react';
import {SafeAreaView, TouchableOpacity, Image,ImageBackground,Text, StyleSheet, TextStyle,View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import SignUp from './Screens/Sign-Up';
import Login from './Screens/Login';
import Q1 from './Screens/Q1';
import Start from './Screens/Start';
import splash from './Screens/splash';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavi() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#4a4a4a',
        shadowColor: '#f2f2f2',
      }}>
      
      <Drawer.Screen name="Start" component={Start} />
      <Drawer.Screen name="Signup" component={SignUp} />
    </Drawer.Navigator>
  );
}
const MyStack = () => {
  return (
      
    <Stack.Navigator>
      <Stack.Screen
          name="splash"
          component={splash}
          options={{headerShown: false}}
        />
      <Stack.Screen
        name="Start"
        component={DrawerNavi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Q1"
        component={Q1}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
    return (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
    );
  };

  export default App;