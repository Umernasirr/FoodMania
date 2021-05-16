import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { firebase } from "../firebase/config";

import { Colors, globalStyles } from "../helpers/theme";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Login", { user: data });
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

      <Text style={styles.heading}>Register</Text>
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
      <Button style={styles.button} mode="contained" onPress={onRegister}>
        Register
      </Button>

      <Button onPress={() => navigation.navigate("Login")}>
        Already have an account?
      </Button>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
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
    padding: 8,

    borderRadius: 24,
  },
});
