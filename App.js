/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
const App=()=> {


  return (
<SafeAreaView style={{ flex: 1 }}>
     <Provider  store={store}>
        <NavigationContainer>
          <StackNavigator />          
        </NavigationContainer>
        </Provider>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 

});

export default App;
