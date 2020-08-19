import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
        SignUp: SignUpScreen
    },
    {
        initialRouteName: 'SignUp',
    }
);

export default createAppContainer(AppNavigator);