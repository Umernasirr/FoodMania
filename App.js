import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "expo-font";

import {
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";

// Screens
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Menu from "./src/screens/Menu";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { Colors, theme } from "./src/helpers/theme";
import ItemDetails from "./src/screens/ItemDetails";
import Cart from "./src/screens/Cart";

// TODO: Install a library material bottom navigator

export default function App() {
  const [loaded] = useFonts({
    LemonMilk: require("./assets/fonts/LEMONMILK-Medium.otf"),
  });

  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const RestaurantStack = createStackNavigator();

  const RestaurantStackComponent = () => (
    <RestaurantStack.Navigator headerMode="none" initialRouteName="MenuMain">
      <RestaurantStack.Screen name="MenuMain" component={Menu} />

      <RestaurantStack.Screen name="ItemDetails" component={ItemDetails} />
    </RestaurantStack.Navigator>
  );

  const MainStackComponent = () => (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );

  return loaded ? (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <BottomTab.Navigator
          initialRouteName="Cart"
          tabBarOptions={{
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.dark,
          }}
        >
          <BottomTab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="home-outline" size={24} />
              ),

              tabBarLabel: "Dashboard",
            }}
            name="Home"
            component={MainStackComponent}
          />

          <BottomTab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons color={color} name="restaurant-menu" size={24} />
              ),
            }}
            name="Menu"
            component={RestaurantStackComponent}
          />

          <BottomTab.Screen
            initialParams={[]}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="cart-outline" size={24} />
              ),
            }}
            name="Cart"
            component={Cart}
          />

          <BottomTab.Screen
            initialParams={[]}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons color={color} name="ios-settings-outline" size={24} />
              ),
            }}
            name="Settings"
            component={Settings}
          />
        </BottomTab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  ) : (
    <ActivityIndicator />
  );
}

const styles = StyleSheet.create({});
