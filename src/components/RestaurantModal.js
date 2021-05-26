import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Modal, Portal, Text, Provider, Button } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { getDistance } from "geolib";
import { useNavigation } from "@react-navigation/native";
const RestaurantModal = ({
  visible,
  setVisible,
  userLocation,
  selectedRestaurant,
}) => {
  const navigation = useNavigation();
  const hideModal = () => setVisible(false);

  const containerStyle = {
    flex: 1,
    display: "flex",
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  };

  let distance = selectedRestaurant.latitude
    ? getDistance(
        {
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        },
        {
          latitude: selectedRestaurant.latitude,
          longitude: selectedRestaurant.longitude,
        }
      )
    : 1000;
  distance = distance / 1000;

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={globalStyles.bigSpacer} />
          <Image source={selectedRestaurant.img} style={styles.image} />
          <View style={globalStyles.bigSpacer} />
          <Text style={styles.txt}>{selectedRestaurant.title}</Text>
          <View style={globalStyles.spacer} />
          <Text style={styles.distanceInfo}>is Located</Text>
          <Text style={styles.distance}>{distance} km</Text>
          <Text style={styles.distanceInfo}>
            {selectedRestaurant.title} From You!
          </Text>

          <Button
            color={Colors.secondary}
            labelStyle={{ color: Colors.white }}
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate("Orders")}
          >
            View Orders
          </Button>

          <Button
            color={Colors.secondary}
            style={styles.button}
            onPress={hideModal}
          >
            Close Modal
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
    resizeMode: "stretch",
  },
  txt: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  distanceInfo: { margin: 8 },
  distance: {
    fontSize: 24,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingHorizontal: 40,
    padding: 8,
  },
  button: {
    padding: 8,
    margin: 8,
  },
});

export default RestaurantModal;
