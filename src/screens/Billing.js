import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { CARTITEMS } from "../constants/index";
import CheckoutItem from "../components/CheckoutItem";
const Billing = () => {
  const [cart, setCart] = useState(CARTITEMS);
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />
      <Text style={styles.heading}>Checkout and Shipping</Text>
      <View style={globalStyles.spacer} />

      {cart.length > 0 && (
        <View style={{ height: "70%", borderRadius: 16 }}>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, separators }) => (
              <View
                key={item.key}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <CheckoutItem
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
          <View style={globalStyles.spacer} />
          <View style={styles.actionButtons}>
            <Button
              color={Colors.secondary}
              labelStyle={{ color: "white" }}
              mode="contained"
              style={styles.button}
            >
              Finish and Track Order
            </Button>

            <Button color={Colors.tertiary} style={styles.button}>
              Back to Cart
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default Billing;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 24,
    fontWeight: "100",
    color: Colors.dark,
    marginLeft: 4,
    letterSpacing: 1.6,
  },
  heading: {
    fontSize: 40,
    color: Colors.dark,
    fontWeight: "bold",
    lineHeight: 70,
    letterSpacing: 2,
  },
  button: {
    padding: 8,
    borderRadius: 16,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
});
