import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { users } from "../constants/index";
import { Colors, globalStyles } from "../helpers/theme";
const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
      <Text>{users[0].name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
