import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import RootStackParams from '../components/models/RootStackParams';
import HomeScreen from '../components/screens/HomeScreen';
import SettingsScreen from '../components/screens/SettingScreen';
/* 
const RootStack = createStackNavigator<RootStackParams>();

const NavigationProvider: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen 
                name="Home" 
                component={HomeScreen} />
                <RootStack.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    presentation: 'modal',
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}} />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}
export default NavigationProvider; */