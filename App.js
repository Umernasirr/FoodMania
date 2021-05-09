import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

// Screens
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <Home />
        <Settings /> */}
        <Login />
        <Register />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
