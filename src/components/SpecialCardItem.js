import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../helpers/theme";
import { Button, TouchableRipple } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SpecialCardItem = ({ name, price, weight, img }) => {
  if (name.length > 16) {
    name = name.slice(0, 13) + "...";
  }
  return (
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor={Colors.secondary}
      style={styles.specialItem}
    >
      <View style={styles.itemContainer}>
        <View style={styles.itemDesc}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.weight}>Weight: {weight} gr</Text>
          <Text style={styles.price}>Price: {price} $</Text>
          <Button
            onPress={() => console.log("hey")}
            style={styles.button}
            mode="contained"
          >
            <Ionicons
              name="md-add"
              size={24}
              color="black"
              color={Colors.dark}
            />
          </Button>
        </View>

        <Image style={styles.image} source={img} />
      </View>
    </TouchableRipple>
  );
};

export default SpecialCardItem;

const styles = StyleSheet.create({
  specialItem: {
    marginVertical: 8,
    height: 160,
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderColor: Colors.light,
    borderWidth: 2,
    backgroundColor: "white",
  },

  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemDesc: {
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  name: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    marginVertical: 4,
  },

  weight: {
    color: Colors.secondary,
    fontSize: 16,
  },

  price: {
    fontSize: 16,
    color: Colors.dark,
  },

  button: {
    marginTop: 8,
    borderTopRightRadius: 20,
    borderBottomStartRadius: 20,
    maxWidth: 100,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 60,
    elevation: 5,
  },
});
