import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { FontAwesome } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ id, price, name, weight, img, count }) => {
  const { cart, setCart } = useContext(CartContext);

  const onCountUpdate = (id, op) => {
    const tempCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (op === "+") {
          cartItem.count += 1;
        } else if (op === "-") {
          cartItem.count -= 1;
        }
      }
      return cartItem;
    });

    setCart(tempCart);
  };

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.left}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.weight}>{weight} gr</Text>

        <View style={globalStyles.spacer} />
        <View style={styles.actions}>
          <Button
            style={styles.button}
            onPress={() => count < 20 && onCountUpdate(id, "+")}
          >
            <FontAwesome name="plus" size={18} color={Colors.primary} />
          </Button>
          <Text style={styles.count}>{count}</Text>
          <Button
            style={styles.button}
            onPress={() => count > 1 && onCountUpdate(id, "-")}
          >
            <FontAwesome name="minus" size={18} color={Colors.primary} />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    display: "flex",
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  left: {},
  img: {
    width: 100,
    height: 120,
  },
  right: {
    marginLeft: 16,
  },
  price: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1.2,
  },
  weight: {
    color: Colors.gray,
    letterSpacing: 1,
  },
  actionBottonsContainer: {
    flexDirection: "row",
  },

  actions: {
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    borderRadius: 10,
  },
  count: {
    fontSize: 16,
  },

  actionButtons: {
    margin: 8,
    borderRadius: 8,
    paddingVertical: 8,
    alignSelf: "center",
  },
  actionsButtonLabel: {
    color: Colors.white,
  },
});
