import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { FontAwesome } from "@expo/vector-icons";

const CartItem = ({ id, price, name, weight, img }) => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.left}>
        <Image source={img} style={styles.img} />
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.weight}>{weight} gr</Text>

        <View style={globalStyles.spacer} />
        <View style={styles.actions}>
          <Button
            style={styles.button}
            onPress={() => count < 20 && setCount(count + 1)}
          >
            <FontAwesome name="plus" size={18} color={Colors.primary} />
          </Button>
          <Text style={styles.count}>{count}</Text>
          <Button
            style={styles.button}
            onPress={() => count > 1 && setCount(count - 1)}
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
