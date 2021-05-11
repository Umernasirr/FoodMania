import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import {
  ActivityIndicator,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";

// Screens
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { Colors } from "./src/helpers/theme";

// TODO: Install a library material bottom navigator

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
  },
};

export default function App() {
  const [loaded] = useFonts({
    LemonMilk: require("./assets/fonts/LEMONMILK-Medium.otf"),
  });

  const Stack = createStackNavigator();

  return loaded ? (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  ) : (
    <ActivityIndicator />
  );
}

const styles = StyleSheet.create({});
