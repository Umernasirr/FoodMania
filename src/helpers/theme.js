import { StyleSheet } from "react-native";

export const Colors = {
  primary: "#FCC812",
  secondary: "#F56B6B",
  dark: "#2E2F31",
  light: "#e4e4e4",
};

export const globalStyles = StyleSheet.create({
  container: {
    height: 200,
    width: 400,
    marginVertical: 20,
    borderColor: "#2E2F31",
    borderWidth: 2,
    backgroundColor: Colors.secondary,
  },

  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },

  button: {
    padding: 10,
    backgroundColor: Colors.secondary,
  },
});
