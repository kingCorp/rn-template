import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/Home/home';

const Stack = createStackNavigator();

export default function() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    )};