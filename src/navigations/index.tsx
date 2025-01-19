import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { DetailScreen, HomeScreen } from '@/screens';

// Stackの準備
const Stack = createStackNavigator();

// Mainの画面構成
function Main() {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </>
    );
}

export default Main;