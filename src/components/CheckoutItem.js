import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../helpers/theme";
import { MaterialIcons } from "@expo/vector-icons";

import { CartContext } from "../contexts/CartContext";

const CheckoutItem = ({ id, name, price, img, count }) => {
  const { cart, setCart } = useContext(CartContext);
  //
  const onRemoveFromCart = (id) => {
    // Task: Removing an item from an array
    // forEach, map, filter
    // forEach -> doesnt return anything
    // map -> does return the current item
    // filter -> it returns item without change on the basis of a condition

    const tempCart = cart.filter((cartItem) => cartItem.id !== id);

    setCart(tempCart);
  };

  return (
    <View style={styles.checkoutItem}>
      <View style={styles.left}>
        <Image source={{ uri: img }} style={styles.image} />
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

      <TouchableOpacity onPress={() => onRemoveFromCart(id)}>
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
