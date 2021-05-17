import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import CheckoutItem from "../components/CheckoutItem";

import { CartContext } from "../contexts/CartContext";

const Billing = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);

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
            />

            <TextInput
              label="Address"
              style={styles.input}
              theme={{ colors: { text: "black", primary: Colors.secondary } }}
            />
          </View>
          <View style={globalStyles.spacer} />

          <View style={{ height: "60%", borderRadius: 16 }}>
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
            <View style={styles.actionButtons}>
              <Button
                color={Colors.secondary}
                labelStyle={{ color: "white" }}
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate("TrackOrder")}
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
});
