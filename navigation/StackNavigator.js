import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash';
import Login from '../src/Screens/Login';
import Home from '../src/Screens/Home/Home';
import ChatScreen from '../src/Screens/ChatScreen';
import MyHeader from '../src/component/MyHeader';
import Astromall from '../src/Screens/Astromall';
import ChatHistory from '../src/Screens/ChatHistory';
import CallHistory from '../src/Screens/CallHistory';
import AstromallHistory from '../src/Screens/AstromallHistory';
import AcceptCall from '../src/Screens/AcceptCall';
import AcceptChat from '../src/Screens/AcceptChat';
import OnCall from '../src/Screens/OnCall';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OnCall">
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MyHeader" component={MyHeader} />
      <Stack.Screen
        name="Astromall"
        component={Astromall}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatHistory"
        component={ChatHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CallHistory"
        component={CallHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AstromallHistory"
        component={AstromallHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AcceptCall"
        component={AcceptCall}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AcceptChat"
        component={AcceptChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnCall"
        component={OnCall}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
