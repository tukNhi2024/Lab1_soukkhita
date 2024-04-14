import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    input:{
        marginTop: 10,
        backgroundColor:'(rgba(0,0,0,0.1',
        padding: 10,
        borderRadius: 5,
    },
});
export default () => {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.label}> What is your name?</Text>
            <TextInput style={styles.input} 
            placeholder='John Doe'
            placeholderTextColor='rgba(0,0,0,0.5'
            onChangeText={(text) => setName(text)}
            value={name}>
            </TextInput>
            <Button title='Say Hello' 
            onPress={()=> {alert(`Hello, ${name}!`);
            setName('');
            }}></Button>
        </View>
    );
};