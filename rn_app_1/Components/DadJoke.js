import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

const DadJoke = (props) => {

    const [dadJoke,setDadJoke] = React.useState("default");

    const getDadJokeFromAPI = () => console.log("yolo");
    
    const getMoviesFromApiAsync = async () => {
        try {
          const response = await fetch(
            'https://reactnative.dev/movies.json'
          );
          const json = await response.json();
          setDadJoke(json.movies[0].title)//movies is an array
        } catch (error) {
          console.error(error);
        } finally {
            console.log("it works!")
        }
      };

    return (
        <View style = {MyStyles.center}>
        <Text style={MyStyles.text}>{dadJoke}</Text>
        <Button
            onPress={getMoviesFromApiAsync}
            title = "Click for a Movie"
          />
        <Button
            onPress={getDadJokeFromAPI}
            title = "Click for a Dad Joke"
          />
        </View>
    )
}

export default DadJoke