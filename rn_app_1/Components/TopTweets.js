import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

//change this to figure out who likes your tweets most consistently
const TopTweets = (props) => {

    const [username,setusername] = React.useState("");
    const userid = "";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer ");
    myHeaders.append("Cookie", "guest_id=v1%3A165885193732030660");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    const getUserIdFromUsername = () => {
        fetch("https://api.twitter.com/2/users/by?usernames="+username, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data[0].id);
            getTweetsFromUsername(result.data[0].id)
        }
            )
        .catch(error => console.log('error', error));
    }
    
    const getTweetsFromUsername = (id) => {
        fetch("https://api.twitter.com/2/users/"+id+"/tweets", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        }
            )
        .catch(error => console.log('error', error));
    }

    return(
        <View style = {MyStyles.center}>
            <Text style={MyStyles.secondary_text}>Enter a username to see how many likes they get on average and their most liked tweet on their last 100</Text>
            <TextInput 
            style={MyStyles.textinput}
            onChangeText={setusername}
            ></TextInput>
            <Button
            onPress={getUserIdFromUsername}
            title="Submit"
            />

        </View>
    )
    

}

export default TopTweets