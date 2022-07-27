import React from 'react';
import MyStyles from '../MyStyles'
import {Text, View, TextInput, Button, Alert } from 'react-native';

//change this to figure out who likes your tweets most consistently
const TwitterWordJumble = (props) => {

    const [username,setusername] = React.useState("");

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
            //console.log(result.data[0].id);
            getTweetsFromUsername(result.data[0].id)
        }
            )
        .catch(error => console.log('error', error));
    }
    
    const getTweetsFromUsername = (id) => {
        fetch("https://api.twitter.com/2/users/"+id+"/tweets?max_results=100", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            organizeWords(result.data)
        }
            )
        .catch(error => console.log('error', error));
    }

    const organizeWords = (tweets) => {

        let unique_words = new Set();
        
        for(let tweet of tweets){
            let words = tweet.text.split(" ");
            for(let word of words){
                if(!unique_words.has(word)){
                    unique_words.add(word);
                }
            }
        }

        let arr = Array.from(unique_words)
        console.log(arr.length)

    }

    return(
        <View style={MyStyles.center}>
            <Text style={MyStyles.secondary_text}>Enter a username to see a word jumble from their last 100 tweets</Text>
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
    

};

//change the name of this to word cloud

export default TwitterWordJumble;