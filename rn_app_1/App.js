import {Button, Text, View} from 'react-native';
import React from "react"
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//my imports
import MyStyles from './MyStyles';
import DadJoke from './Components/DadJoke';
import Login from './Components/Login';
import TwitLookup from './Components/TwitLookup';

function HomeScreen({navigation}) {
  return (
    <View style = {MyStyles.center}>
    <Text style = {MyStyles.text}>Playground</Text>
    <Text style = {MyStyles.secondary_text}>This is a testing app junaid is building for learning purposes.</Text>
    <Button
    title="Login Functionality"
    onPress={() => navigation.navigate('Login')}
    />
    <Button
    title="Dad Joke API (Public API)"
    onPress={() => navigation.navigate('DadJoke')}
    />
    <Button
    title="Twitter API (Private API)"
    onPress={() => navigation.navigate('TwitLookup')}
    />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DadJoke" component={DadJoke}/>
        <Stack.Screen name='TwitLookup' component={TwitLookup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

