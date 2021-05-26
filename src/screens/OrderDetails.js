import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Button, Divider } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { FontAwesome } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";

import { CartContext } from "../contexts/CartContext";
import Snackbar from "../components/Snackbar";
const OrderDetails = ({ navigation, route }) => {
  const { id, orders, total } = route.params;
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />

      <View style={globalStyles.bigSpacer}>
        <Text style={styles.heading}>Order Details</Text>

        <View style={globalStyles.spacer} />
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 16,
            borderRadius: 16,
          }}
        >
          <Text style={styles.name}>Order Id: {id}</Text>
          <Divider />
          <View style={globalStyles.spacer} />

          <View style={globalStyles.spacer} />

          <View style={styles.actionsContainer}>
            <Text style={styles.price}>
              Order Total: <Text style={styles.dollar}> ${total} </Text>
            </Text>
          </View>
          <Divider />

          <View style={globalStyles.spacer}>
            <FlatList
              data={orders}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, separators }) => (
                <View style={styles.itemContainer}>
                  <Text>{item.name}</Text>
                  <Text>X {item.count}</Text>
                </View>
              )}
            />
          </View>
          <Divider />

          <View style={styles.actions}>
            <Button
              style={styles.actionButtons}
              color={Colors.secondary}
              mode="contained"
              labelStyle={styles.actionsButtonLabel}
              onPress={() => navigation.navigate("Menu")}
            >
              Order Again
            </Button>

            <Button
              style={styles.actionButtons}
              color={Colors.secondary}
              labelStyle={styles.actionsButtonLabelPrimary}
              onPress={() => navigation.goBack()}
            >
              Order History
            </Button>
          </View>

          <View style={globalStyles.spacer} />
        </View>

        {/* <Snackbar label="Hello" visible={showSnackbar} /> */}
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },
  category: {
    fontSize: 24,
    color: Colors.dark,
    fontWeight: "100",
  },
  name: {
    fontSize: 26,
    letterSpacing: 1.2,
    textAlign: "center",
    margin: 8,
  },
  price: { fontSize: 24, color: Colors.black },
  dollar: {
    fontSize: 24,
    color: Colors.secondary,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "justify",
    marginVertical: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actions: {
    flexDirection: "row",
  },
  button: {
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: 10,
    paddingTop: 5,
    borderRadius: 5,
  },
  count: {
    fontSize: 20,
    padding: 10,
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
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

  actionsButtonLabelPrimary: {
    color: Colors.dark,
    fontWeight: "bold",
  },
});
