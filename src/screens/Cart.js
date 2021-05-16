import React, { useState, useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { Colors, globalStyles } from "../helpers/theme";

import { CartContext } from "../contexts/CartContext";

const Cart = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    cart.map((cartItem) => {
      tempTotal += cartItem.count * cartItem.price;
    });

    setTotal(tempTotal);
  }, [cart]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />
      <Text style={styles.heading}>My Cart</Text>
      <View style={globalStyles.spacer} />

      {cart.length > 0 ? (
        <View>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, separators }) => (
              <View
                style={{ flex: 1 }}
                key={item.key}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <CartItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  weight={item.weight}
                  img={item.img}
                  count={item.count}
                />
              </View>
            )}
          />

          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total Price: ${total}</Text>
          </View>

          <View style={styles.actions}>
            <Button
              style={styles.actionButtons}
              color={Colors.secondary}
              mode="contained"
              labelStyle={styles.actionsButtonLabel}
              onPress={() => navigation.navigate("Billing")}
            >
              Checkout & Billing
            </Button>

            <Button
              style={styles.actionButtons}
              color={Colors.black}
              labelStyle={styles.actionsButtonLabelPrimary}
              onPress={() => setCart([])}
            >
              Empty Cart
            </Button>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={globalStyles.spacer} />
          <Text style={styles.noItemsText}>...No Items selected in cart</Text>
          <View style={globalStyles.bigSpacer} />
          <Button
            style={styles.actionButtons}
            color={Colors.secondary}
            mode="contained"
            labelStyle={styles.actionsButtonLabel}
            onPress={() =>
              navigation.navigate("Menu", {
                screen: "MenuMain",
              })
            }
          >
            Go to Shop Menu
          </Button>
        </View>
      )}

      <View style={globalStyles.spacer} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },

  actions: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 10,
    paddingTop: 5,
    borderRadius: 5,
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

  totalPriceContainer: {
    flex: 1,
    alignItems: "flex-end",
    margin: 20,
    borderTopColor: Colors.secondary,
    borderTopWidth: 4,
    borderRadius: 2,
    paddingVertical: 16,
  },

  totalPrice: {
    fontSize: 20,
  },

  noItemsText: {
    fontSize: 16,
  },
});
