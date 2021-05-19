import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { Colors } from "../helpers/theme";
import { Ionicons } from "@expo/vector-icons";

import { RESTAURANTLOCATIONS } from "../constants/index";
import RestaurantModal from "../components/RestaurantModal";

const TrackOrder = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [region, setRegion] = useState({
    latitude: 37.4219565,
    longitude: -122.0839359,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const markerClick = (loc) => {
    setSelectedRestaurant(loc);
    setVisible(true);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);

      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    location && (
      <View style={styles.container}>
        <MapView
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
          style={styles.map}
        >
          <MapView.Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"title"}
            description={"description"}
          >
            <Ionicons name="person" size={20} color={Colors.secondary} />
          </MapView.Marker>

          {RESTAURANTLOCATIONS.map((location) => (
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              onPress={() => markerClick(location)}
            >
              <Ionicons name="restaurant" size={24} color={Colors.secondary} />
            </MapView.Marker>
          ))}
        </MapView>

        <RestaurantModal
          visible={visible}
          setVisible={setVisible}
          selectedRestaurant={selectedRestaurant}
          userLocation={location}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default TrackOrder;
