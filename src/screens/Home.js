import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { users } from "../constants/index";
import { Colors, globalStyles } from "../helpers/theme";
const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Food Mania</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
});
