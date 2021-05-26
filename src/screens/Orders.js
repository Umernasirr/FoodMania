import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles, Colors } from "../helpers/theme";
import { CartContext } from "../contexts/CartContext";
import { ORDERS } from "../constants";
import OrderItem from "../components/OrderItem";
import { DataTable } from "react-native-paper";

const Orders = () => {
  const { orders } = useContext(CartContext);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.triangleTop} />
      <View style={globalStyles.triangleBottom} />
      <View style={globalStyles.bigSpacer} />

      <View style={globalStyles.spacer} />

      <View>
        <Text style={styles.heading}>Order History</Text>
      </View>

      <View
        style={{
          borderRadius: 16,
          flexDirection: "row",
        }}
      >
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Id</DataTable.Title>
            <DataTable.Title numeric>Created At</DataTable.Title>
            <DataTable.Title numeric>Fat</DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, separators }) => (
              <OrderItem
                id={item.id}
                orders={item.orders}
                total={item.total}
                createdAt={item.createdAt}
              />
            )}
          />
        </DataTable>
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: Colors.dark,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
