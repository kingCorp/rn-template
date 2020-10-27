import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard from '../src/screens/Onboard/Onboard';
import Welcome from '../src/screens/Welcome/welcome';

const Stack = createStackNavigator();

export default function() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='onboard' component={Onboard} />
            <Stack.Screen name='welcome' component={Welcome} />
      </Stack.Navigator>
    )}