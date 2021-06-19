import React, { useState, useEffect, useContext } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import { Colors, globalStyles } from "../helpers/theme";
import { firebase } from "../firebase/config";
import { CartContext } from "../contexts/CartContext";

import CardItem from "../components/CardItem";
import SpecialCardItem from "../components/SpecialCardItem";
import { ActivityIndicator } from "react-native-paper";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [specialItems, setSpecialItems] = useState([]);
  const { setOrders } = useContext(CartContext);

  const onSelectItem = (item) => {
    navigation.navigate("Menu", {
      screen: "ItemDetails",
      params: {
        item,
      },
    });
  };

  const getCategories = async () => {
    const snapshot = await firebase.firestore().collection("categories").get();
    const data = await snapshot.docs.map((doc) => doc.data());

    const tempCategories = data.map((cat) => {
      cat.id = Math.round(Math.random() * 100000);
      return cat;
    });

    setCategories(tempCategories);
  };

  const getSpecials = async () => {
    const snapshot = await firebase.firestore().collection("items").get();
    const data = await snapshot.docs.map((doc) => doc.data());

    const tempItems = data.map((item) => {
      item.id = Math.round(Math.random() * 100000);
      return item;
    });

    setSpecialItems(tempItems);
  };

  const getOrders = async () => {
    const snapshot = await firebase.firestore().collection("orders").get();
    const data = await snapshot.docs.map((doc) => doc.data());

    const tempOrders = data.map((prder) => {
      prder.id = Math.round(Math.random() * 100000);
      return prder;
    });

    setOrders(tempOrders);
  };

  useEffect(() => {
    getCategories();
    getSpecials();
    getOrders();
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <ScrollView>
        <View style={globalStyles.spacer} />

        <Text style={styles.subHeading}>Food</Text>
        <Text style={styles.heading}>Mania</Text>

        {categories.length > 0 ? (
          <View>
            <View style={globalStyles.bigSpacer} />
            <Text style={styles.subHeading}>Categories</Text>

            <View style={globalStyles.spacer}>
              <FlatList
                horizontal
                data={categories}
                keyExtractor={(item) => item.icoName.toString()}
                renderItem={({ item, separators }) => (
                  <View
                    style={{ flex: 1, height: 220 }}
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
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}
                  >
                    <SpecialCardItem
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      weight={item.weight}
                      img={item.img}
                      category={item.category}
                      rating={item.rating}
                      callback={onSelectItem}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View style={globalStyles.bigSpacer}>
            <ActivityIndicator color={Colors.secondary} size="large" />
          </View>
        )}
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
    letterSpacing: 1.6,
  },
  heading: {
    fontSize: 64,
    color: Colors.dark,
    fontWeight: "bold",
    lineHeight: 70,
    letterSpacing: 2,
  },
});
