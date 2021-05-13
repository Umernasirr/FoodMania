import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import { globalStyles } from "../helpers/theme";
import { Button } from "react-native-paper";
import { ITEMS } from "../constants/";
import SpecialCardItem from "../components/SpecialCardItem";
import { Colors } from "../helpers/theme";

const Menu = ({ navigation, route }) => {
  const [itemList, setItemsList] = useState(ITEMS);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      console.log(route.params);
      if (route.params?.category) {
        filterItemsOnCategory(route.params.category);
      } else {
        setItemsList(ITEMS);
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, route]);

  const filterItems = (searchQuery) => {
    console.log(searchQuery);
    if (searchQuery === "") {
      setItemsList(ITEMS);
    } else {
      searchQuery = searchQuery.toString().toLowerCase();
      const tempItems = itemList.filter((item) =>
        item.name.toString().toLowerCase().includes(searchQuery)
      );

      setItemsList(tempItems);
    }
  };

  const filterItemsOnCategory = (category) => {
    const tempItems = ITEMS.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    setItemsList(tempItems);
  };

  const onSelectItem = (item) => {
    navigation.navigate("ItemDetails", {
      item,
    });
  };

  const resetItemsList = () => {
    setItemsList(ITEMS);
    navigation.setParams({ category: undefined });
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />
      <Text style={styles.heading}>Menu</Text>
      <View style={globalStyles.spacer} />
      <Search callback={filterItems} />

      {itemList.length === 0 && (
        <View style={globalStyles.spacer}>
          <View style={globalStyles.spacer} />
          <Text>No Items Found... </Text>
          <Button
            onPress={resetItemsList}
            labelStyle={styles.button}
            color={Colors.secondary}
          >
            Reset Filter
          </Button>
        </View>
      )}
      {/*  */}
      <View style={globalStyles.spacer}>
        <FlatList
          style={{ marginBottom: 140 }}
          data={itemList}
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
                callback={onSelectItem}
                category={item.category}
                rating={item.rating}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
  },
});
