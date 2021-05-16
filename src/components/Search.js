import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
const Search = ({ callback }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    callback(query);
  };

  return (
    <Searchbar
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "transparent",
    borderColor: "red",
    elevation: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#888888",
    borderRadius: 10,
  },
});

export default Search;
