import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { users } from "../constants/index";
import { Colors, globalStyles } from "../helpers/theme";
const Settings = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Settings</Text>
      <Text>{users[0].name}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
