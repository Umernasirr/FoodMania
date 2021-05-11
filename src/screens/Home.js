import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import { categories, users, specialItems } from "../constants/index";
import { Colors, globalStyles } from "../helpers/theme";

import CardItem from "../components/CardItem";
import SpecialCardItem from "../components/SpecialCardItem";
const Home = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.triangleTop} />
      <View style={styles.triangleBottom} />
      <ScrollView>
        <View style={globalStyles.bigSpacer} />
        <View style={globalStyles.bigSpacer} />

        <Text style={styles.subHeading}>Food</Text>
        <Text style={styles.heading}>Mania</Text>

        <View style={globalStyles.bigSpacer} />

        <Search />

        <View style={globalStyles.bigSpacer} />
        <Text style={styles.subHeading}>Categories</Text>

        <View style={globalStyles.spacer}>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item, separators }) => (
              <View
                style={{ flex: 1, height: 220 }}
                key={item.key}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <CardItem
                  id={item.id}
                  name={item.name}
                  icoName={item.icoName}
                />
              </View>
            )}
          />
        </View>

        <Text style={styles.subHeading}>Popular</Text>

        <View style={globalStyles.spacer}>
          <FlatList
            data={specialItems}
            renderItem={({ item, separators }) => (
              <View
                key={item.id.toString()}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              >
                <SpecialCardItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  weight={item.weight}
                  img={item.img}
                />
              </View>
            )}
          />
        </View>

        <View style={globalStyles.bigSpacer} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 24,
    fontWeight: "100",
    color: Colors.dark,
    marginLeft: 4,
    letterSpacing: 1.6,
  },
  heading: {
    fontSize: 64,
    color: Colors.dark,
    fontWeight: "bold",
    lineHeight: 70,
    letterSpacing: 2,
  },

  triangleTop: {
    position: "absolute",
    top: -20,
    left: -40,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 150,
    borderRightWidth: 150,
    borderBottomWidth: 250,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.light,
    transform: [{ rotate: "90deg" }],
  },

  triangleBottom: {
    position: "absolute",
    bottom: -20,
    right: -40,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 150,
    borderRightWidth: 150,
    borderBottomWidth: 250,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.secondary,
    transform: [{ rotate: "270deg" }],
    opacity: 0.3,
  },
});
