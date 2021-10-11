import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createStackNavigator}  from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import home from './screens/Home';
import feed from './screens/Feed';
import postScreen from './screens/PostScreen';
import profile from './screens/Profile';
import uploadPhoto from './screens/UploadPhoto';

const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
<Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Feed" component={feed} />
      <Stack.Screen name="PostScreen" component={postScreen} />
      <Stack.Screen name="Profile" component={profile} />
      <Stack.Screen name="UploadPhoto" component={uploadPhoto} />

    </Stack.Navigator>
  </NavigationContainer>

  );
}

