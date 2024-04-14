import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';

const Button = (props) => (
    <TouchableOpacity onPress={props.onPress}
    style={{
        backgroundColor:'#ff637c',
        alignSelf: 'center',
        padding:10,
        ...props.buttonStyle,
    }}>
        <Text style={{color:'#fff'}}>{props.text}</Text>
    </TouchableOpacity>
);
export default() => (
    <View style={{flex:1, justifyContent:'center'}}>
        <Button text='Say Hello' onPress={() => alert('hello!')}></Button>
        <Button text='Say Goodbye' onPress={() => alert('Goodbye!')} buttonStyle={{backgroundColor:'#4dc2c2'}}></Button>
    </View>
);