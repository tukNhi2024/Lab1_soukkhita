
import { View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default () => {
    const [pressCount, setPressCount] = useState(0);
    return (
        <View style={{alignItems: 'center', marginTop: 20}}> 
            <Text> You've pressed the button: {pressCount} time(s)</Text>
            <Button title={`Pressed ${pressCount} time(s)`}
            onPress={() => setPressCount(pressCount + 1)}></Button>
        </View>
    );
};