import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const Colors = {
  primary: "#FCCA3E",
  secondary: "#F56B6B",
  dark: "#2E2F31",
  light: "#e4e4e4",
  white: "#FFFFFF",
  black: "#000000",
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

  triangleTop: {
    position: "absolute",
    top: -20,
    left: -40,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 150,
    borderRightWidth: 150,
    borderBottomWidth: 250,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.light,
    transform: [{ rotate: "90deg" }],
  },

  triangleBottom: {
    position: "absolute",
    bottom: -20,
    right: -40,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 150,
    borderRightWidth: 150,
    borderBottomWidth: 250,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.secondary,
    transform: [{ rotate: "270deg" }],
    opacity: 0.3,
  },
});

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
  },
};
