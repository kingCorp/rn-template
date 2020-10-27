import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import HomeStack from './HomeStack';
import WelcomeStack from './WelcomeStack';

const Stack = createStackNavigator();

const Navigation = (props) => {
  const [auth, setAuth] = useState(true);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      {auth ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={HomeStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="welcome" component={WelcomeStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.auth
});

export default connect(mapStateToProps, {})(Navigation);
