import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import { Colors } from "../helpers/theme";
import { useNavigation } from "@react-navigation/native";
const OrderItem = ({ id, orders, total, createdAt }) => {
  const navigation = useNavigation();

  return (
    <DataTable.Row
      onPress={() => navigation.navigate("OrderDetails", { id, orders, total })}
    >
      <DataTable.Cell>{id} </DataTable.Cell>
      <DataTable.Cell numeric>{createdAt}</DataTable.Cell>
      <DataTable.Cell numeric>$ {total}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
