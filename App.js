import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Navigation-Stack-import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

//Screens
import Base from './AnimationScreen/Base';
import Box from './AnimationScreen/1first';
import Box2 from './AnimationScreen/2Sceond';
import WobbleExample from './AnimationScreen/3Third';
import Gesture from './AnimationScreen/4Four';
import SignUpScreen from './AnimationScreen/test'

//Navigation-Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Base" component={Base} options={{ headerShown:false}} />
        <Stack.Screen name="Test" component={SignUpScreen}  options={{ headerShown:false}}/>
        <Stack.Screen name="First" component={Box} options={{ headerShown:false}} />
        <Stack.Screen name="Second" component={Box2}  options={{ headerShown:false}}/>
        <Stack.Screen name="Third" component={WobbleExample}  options={{ headerShown:false}}/>
        <Stack.Screen name="Four" component={Gesture}  options={{ headerShown:false}}/>
        <Stack.Screen name="Five" component={EventsExample2}  options={{ headerShown:false}}/>
      </Stack.Navigator>
      <View>
     
      </View>
    </NavigationContainer>


  );

}