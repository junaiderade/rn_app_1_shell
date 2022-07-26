import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

const TwitLookup = (props) => {
    const [twitterUname,twitterUnameLookup] = React.useState("");

    return (
        <View style={MyStyles.center}>
            <Text style={MyStyles.text}>Enter Twitter username below to lookup their 5 most popular tweets!</Text>
            <Text style={MyStyles.secondary_text}>Note: Account must be public</Text>

            <TextInput style={MyStyles.textinput}></TextInput>
            
        </View>
    )

}

export default TwitLookup;