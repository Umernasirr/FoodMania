import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { firebase } from "../firebase/config";

import { globalStyles, Colors } from "../helpers/theme";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();

            alert("Succesfully LoggedIn");
            navigation.navigate("Home");
            // navigation.navigate("Home", { user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={globalStyles.authContainer}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />

      <Text style={styles.heading}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        mode="outlined"
      />
      <Button style={styles.button} mode="contained" onPress={onLogin}>
        Login
      </Button>

      <Button onPress={() => navigation.navigate("Register")}>
        Create a New Account
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    margin: 16,
  },

  heading: {
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    margin: 8,
  },

  button: {
    margin: 16,
    paddingVertical: 8,
    width: "50%",
    alignSelf: "center",
    borderRadius: 24,
  },
});
