import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as PaperProvider } from "react-native-paper";

// Screens
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

// TODO: Install a library material bottom navigator

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        {/* <Home />
        <Settings /> */}
        {/* <Login />
        <Register /> */}
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
