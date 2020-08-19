import React from 'react';
import {Text, View,Button} from 'react-native';

const LoginScreen = ({navigation}) => {
    return(
        <View>
            <Text>Login Screen</Text>
            <Button title='Logout' onPress={()=>navigation.navigate('Login')}/>
        </View>
    );
}

export default LoginScreen;