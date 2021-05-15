import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { CARTITEMS } from "../constants";
import { Colors, globalStyles } from "../helpers/theme";

const Cart = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />
      <Text style={styles.heading}>My Cart</Text>
      <View style={globalStyles.spacer} />
      <FlatList
        data={CARTITEMS}
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
            />
          </View>
        )}
      />

      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPrice}>Total Price: $ 50</Text>
      </View>

      <View style={styles.actions}>
        <Button
          style={styles.actionButtons}
          color={Colors.secondary}
          mode="contained"
          labelStyle={styles.actionsButtonLabel}
        >
          Go To Checkout
        </Button>

        <Button
          style={styles.actionButtons}
          color={Colors.black}
          labelStyle={styles.actionsButtonLabelPrimary}
          onPress={() => navigation.goBack()}
        >
          Back to Menu
        </Button>
      </View>

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
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 4,
    borderRadius: 2,
  },

  totalPrice: {
    fontSize: 20,
  },
});
