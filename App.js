import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

// Screens
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Home />
        <Settings />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
