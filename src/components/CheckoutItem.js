import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../helpers/theme";
import { MaterialIcons } from "@expo/vector-icons";

const CheckoutItem = ({ id, name, price, img, category, count }) => {
  //
  const onRemoveFromCart = () => {};

  return (
    <View style={styles.checkoutItem}>
      <View style={styles.left}>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>{name}</Text>
        <Text>
          Price: $<Text style={styles.countTxt}>{price}</Text>
        </Text>
        <Text style={styles.count}>
          Quantity: X <Text style={styles.countTxt}>{count}</Text>
        </Text>
      </View>

      <TouchableOpacity onPress={onRemoveFromCart}>
        <MaterialIcons color={Colors.secondary} name="cancel" size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutItem;

const styles = StyleSheet.create({
  checkoutItem: {
    flexDirection: "row",
    margin: 8,
    padding: 8,
    paddingVertical: 16,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    elevation: 2,
    paddingHorizontal: 24,
  },

  image: {
    width: 60,
    height: 60,
  },
  count: {},
  countTxt: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.tertiary,
  },
  name: {
    fontSize: 18,
    color: Colors.secondary,
  },
});
