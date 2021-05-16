import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { users } from "../constants";
import { Switch } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
const Settings = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text>Name: Umer Nasir </Text>
      <Text>Email: umeri@nasir.com </Text>
      <Text>
        Notification:{" "}
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />{" "}
      </Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
