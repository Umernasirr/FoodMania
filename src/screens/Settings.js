import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { users } from "../constants";
import { Colors, globalStyles } from "../helpers/theme";
const Settings = ({ navigation, route }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      console.log(route.params);
      if (route.params?.category) {
        //  filterItemsOnCategory(route.params.category);
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
