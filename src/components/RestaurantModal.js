import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Modal, Portal, Text, Provider } from "react-native-paper";
import { Colors, globalStyles } from "../helpers/theme";
import { getDistance } from "geolib";

const RestaurantModal = ({
  visible,
  setVisible,
  userLocation,
  selectedRestaurant,
}) => {
  const hideModal = () => setVisible(false);

  const time_convert = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  };

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

  console.log(selectedRestaurant);

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
      : 1000,
    distance = distance / 1000;

  const timeTakenToTravel = time_convert((distance / 60).toFixed(2));

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
          <Text>{distance} km</Text>

          <Text>{timeTakenToTravel}</Text>
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
});

export default RestaurantModal;
