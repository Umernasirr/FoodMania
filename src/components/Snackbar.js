import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar as RNSnackbar } from "react-native-paper";

const Snackbar = ({ label, visible }) => {
  const [isVisible, setIsVisible] = React.useState(visible);

  const onToggleSnackBar = () => setIsVisible(!isVisible);

  const onDismissSnackBar = () => setIsVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{isVisible ? "Hide" : "Show"}</Button>
      <RNSnackbar
        visible={isVisible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        {label}
      </RNSnackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Snackbar;
