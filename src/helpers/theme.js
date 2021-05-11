import { StyleSheet } from "react-native";

export const Colors = {
  primary: "#FCC812",
  secondary: "#F56B6B",
  dark: "#2E2F31",
  light: "#e4e4e4",
  white: "#FFFFFF",
};

export const globalStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    margin: 16,
  },

  authContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },

  spacer: {
    margin: 8,
  },

  bigSpacer: { margin: 16 },
  button: {
    padding: 10,
    backgroundColor: Colors.secondary,
  },
});
