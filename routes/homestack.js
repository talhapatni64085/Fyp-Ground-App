import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import Home from "../src/screens/Home";
import Grounds from "../src/screens/Grounds";
import Notification from "../src/screens/Notification";
import Profile from "../src/screens/Profile";
import Tournaments from "../src/screens/Tournaments";
import RLCA from "../src/screens/RLCA";
import PSL from "../src/screens/PSL";

 
const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Grounds" component={Grounds}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Tournaments" component={Tournaments}/>
        <Stack.Screen name="PSL" component={PSL}/>
        <Stack.Screen name="RLCA" component={RLCA}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};