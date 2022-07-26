import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Image, ScrollView } from 'react-native';
import React from "react"
import DadJoke from './Components/DadJoke';
import Feed from './Components/Feed';
import Login from './Components/Login';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStyles from './MyStyles';

const vader_pic = {
  uri: 'https://assets-prd.ignimgs.com/2022/05/03/star-wars-the-black-series-darth-vader-premium-electronic-helmet-1-1651608395546.jpg',
  width: 120,
  height: 120
};

function HomeScreen({navigation}) {
  return (
    <View style = {MyStyles.center}>
    <Text style = {styles.text}>Test App</Text>
    <Button
    title="Log in"
    onPress={() => navigation.navigate('Login')}
    />
    <Button
    title="Sign Up"
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
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="DadJoke" component={DadJoke}/>

      </Stack.Navigator>

    </NavigationContainer>


    //also old code
    /*  */

    //below is your old app
    // <ScrollView>
    //   {/* without scrollview, you can't scroll */}
    //   <View style={styles.container}>
    //   <Text>Welcome to test app!</Text>
    //   <ButtonEx name = 'Drake'></ButtonEx>
    //   <TextEx></TextEx>
    //   <StatusBar style="auto" />
    //   <Text style = {{fontWeight:'bold'}}>Below has a lot of images bunched up so you can understand scrollview</Text>
    //   <Image source={vader_pic}/>
    //   <Image source={vader_pic}/>
    //   {/* <FlatListEx></FlatListEx> */}
    // </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    hieght: '100%'
  },
  text: {
    fontSize: 30
  }
});
