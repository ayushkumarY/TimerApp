import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const Application = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </Stack.Navigator>
    )
}

export default Application