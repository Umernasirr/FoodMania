import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import CheckoutItem from "../components/CheckoutItem";
import { firebase } from "../firebase/config";

import { CartContext } from "../contexts/CartContext";

const Billing = ({ navigation }) => {
  const { cart, setCart, orders, setOrders } = useContext(CartContext);
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    cart.map((cartItem) => {
      tempTotal += cartItem.count * cartItem.price;
    });

    setTotal(tempTotal);
  }, [cart]);

  const confirmOrder = async () => {
    if (number === "" || address === "") {
      alert("Please Input the Correct Order Details");
    } else {
      const today = new Date();

      const time =
        today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

      const tempOrder = {
        id: Math.round(Math.random() * 100000),
        createdAt: time,
        orders: cart,
        total: total,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        address: address,
        number: number,
      };

      console.log(tempOrder);
      setOrders([...orders, tempOrder]);

      await firebase.firestore().collection("orders").add(tempOrder);

      // setCart([]);
      // navigation.navigate("TrackOrder");
    }
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />

      <View style={globalStyles.spacer} />

      {cart.length > 0 ? (
        <View>
          <View>
            <Text style={styles.heading}>Enter your Shipping Details</Text>
            <View style={globalStyles.spacer} />

            <TextInput
              label="Phone Number"
              style={styles.input}
              theme={{ colors: { text: "black", primary: Colors.secondary } }}
              keyboardType="phone-pad"
              value={number}
              onChangeText={setNumber}
            />

            <TextInput
              label="Address"
              style={styles.input}
              theme={{ colors: { text: "black", primary: Colors.secondary } }}
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={globalStyles.spacer} />

          <View style={{ height: "60%", borderRadius: 16 }}>
            <FlatList
              data={cart}
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

            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPrice}>Total Price: ${total}</Text>
              <View style={styles.spacer} />
            </View>

            <View style={styles.actionButtons}>
              <Button
                color={Colors.secondary}
                labelStyle={{ color: "white" }}
                mode="contained"
                style={styles.button}
                onPress={confirmOrder}
              >
                Finish and Track Order
              </Button>

              <Button
                onPress={() => navigation.navigate("CartMain")}
                color={Colors.tertiary}
                style={styles.button}
              >
                Back to Cart
              </Button>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text>...No items in cart </Text>

          <Button
            onPress={() => navigation.navigate("CartMain")}
            color={Colors.tertiary}
            style={styles.button}
          >
            Back to Cart
          </Button>
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
    letterSpacing: 2,
  },
  button: {
    padding: 8,
    borderRadius: 16,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    margin: 4,
    elevation: 5,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  totalPriceContainer: {
    margin: 8,
    textAlign: "right",
    alignSelf: "flex-end",
  },
  totalPrice: {
    fontSize: 20,
    padding: 8,
    borderRadius: 8,
  },
});
