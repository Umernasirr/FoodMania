import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, globalStyles } from "../helpers/theme";
import { TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const CardItem = ({ name, icoName }) => {
  const navigation = useNavigation();
  return (
    <TouchableRipple
      rippleColor={Colors.white}
      onPress={() =>
        navigation.navigate("Menu", {
          screen: "MenuMain",
          params: {
            category: name,
          },
        })
      }
      style={styles.cardItem}
    >
      <>
        <MaterialCommunityIcons
          color={Colors.secondary}
          size={40}
          name={icoName}
          style={styles.icon}
        />
        <Text style={styles.text}>{name}</Text>

        <View style={globalStyles.spacer} />
        <MaterialCommunityIcons
          color={Colors.light}
          size={24}
          name={"chevron-double-right"}
          style={styles.iconChev}
        />
      </>
    </TouchableRipple>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    backgroundColor: Colors.primary,
    margin: 8,
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    marginTop: 16,
    fontSize: 18,
    elevation: 8,
    fontWeight: "300",
    color: Colors.black,
  },
  icon: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 40,
    padding: 6,
    paddingLeft: 10,
  },

  iconChev: {
    padding: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
  },
});
