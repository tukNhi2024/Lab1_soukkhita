import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

export default () => {
    return (
        <View style={Mystyle.container}>
            <Button title='Button 1' onPress={() => alert ('hello!')}></Button>
            <TouchableOpacity style={Mystyle.button}
            onPress={() => alert('hello 2!')}>
                <Text style={Mystyle.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const Mystyle= StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center'
        },
        button:{
            backgroundColor: 'blue',
            marginTop:10,
            alignItems: 'center',
            padding: 10
        },
        text:{
            color:'white',
            fontSize:18
        }
    }
)