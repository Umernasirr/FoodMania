import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { FontAwesome } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";

import { CartContext } from "../contexts/CartContext";
import Snackbar from "../components/Snackbar";
const ItemDetails = ({ navigation, route }) => {
  const { img, name, price, rating, weight, category } = route.params.item;
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onAddToCart = () => {
    const tempItem = { ...route.params.item, count };

    setShowSnackbar(true);

    setCart([...cart, tempItem]);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />
      <Image source={{ uri: img }} style={styles.image} />

      <View style={globalStyles.bigSpacer}>
        <View style={globalStyles.spacer} />
        <Text style={styles.name}>{name}</Text>

        <View style={globalStyles.spacer} />

        <View
          style={{
            width: "40%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={rating}
            size={20}
            isDisabled
          />
          <Text style={styles.ratingText}>{rating}/5</Text>
        </View>

        <View style={globalStyles.spacer} />

        <View style={styles.actionsContainer}>
          <Text style={styles.price}>
            <Text style={styles.dollar}>$ </Text>
            {price}
          </Text>

          <View style={styles.actions}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => count < 20 && setCount(count + 1)}
            >
              <FontAwesome name="plus" size={18} color={Colors.white} />
            </Button>
            <Text style={styles.count}>{count}</Text>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => count > 1 && setCount(count - 1)}
            >
              <FontAwesome name="minus" size={18} color={Colors.white} />
            </Button>
          </View>
        </View>

        <View style={styles.actions}>
          <Button
            style={styles.actionButtons}
            color={Colors.secondary}
            mode="contained"
            labelStyle={styles.actionsButtonLabel}
            onPress={onAddToCart}
          >
            Add to Cart
          </Button>

          <Button
            style={styles.actionButtons}
            color={Colors.secondary}
            labelStyle={styles.actionsButtonLabelPrimary}
            onPress={() => navigation.navigate("Menu", { screen: "MenuMain" })}
          >
            Back to Menu
          </Button>
        </View>

        <View style={globalStyles.spacer} />

        {/* <Snackbar label="Hello" visible={showSnackbar} /> */}
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    width: "100%",
    height: "35%",
    resizeMode: "center",
  },

  category: {
    fontSize: 24,
    color: Colors.dark,
    fontWeight: "100",
  },
  name: {
    fontSize: 26,
    letterSpacing: 1.2,
    fontWeight: "bold",
  },
  price: { fontSize: 30, fontWeight: "bold", color: Colors.black },
  dollar: {
    fontSize: 32,
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
  rating: {},
  ratingText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});
