import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../constants/Colors";

const CurrencyTitle = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleMedium" style={styles.text}>CURRENCY</Text>
      </View>
      <View>
        <Text variant="titleMedium" style={styles.text}>RATES</Text>
      </View>
    </View>
  );
};

export default CurrencyTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.GREY["300"],
    justifyContent: "space-between",
    marginTop: 2,
  },
  text: {
    color: Colors.BLACK,
  },
});
