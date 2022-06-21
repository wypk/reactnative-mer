import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import Colors from "../constants/Colors";
import Currencies from "../constants/Currencies";
import Flags from "../constants/Flags";
import { useLayoutEffect, useState } from "react";

const ItemExchangeRate = ({ currency, rate, onPressed }) => {

  const [finalRate, setFinalRate] = useState(rate);

  useLayoutEffect(() => {
    ratesBasedOn100MMK();
  }, []);

  const ratesBasedOn100MMK = () => {
    if (currency === "VND" ||
      currency === "LAK" ||
      currency === "IDR" ||
      currency === "KHR" ||
      currency === "JPY") {
      setFinalRate((parseFloat(rate) / 100.0).toFixed(2));
    }
  };

  return (
    <TouchableRipple
      onPress={() => onPressed()}
      rippleColor={Colors.YELLOW["800"]}>
      <View style={styles.containerOuter}>
        <Image
          style={styles.flag}
          source={Flags[currency]} />
        <View style={styles.textOuterContainer}>
          <View style={styles.textInnerContainer}>
            <Text style={styles.textPrimary}>{currency}</Text>
            <Text style={styles.textPrimary}>{finalRate}</Text>
          </View>

          <View style={styles.textInnerContainer}>
            <Text style={styles.textSecondary}>{Currencies[currency]}</Text>
            <Text style={styles.textSecondary}>MMK</Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default ItemExchangeRate;

const styles = StyleSheet.create({
  containerOuter: {
    padding: 24,
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    borderBottomColor: Colors.GREY["500"],
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flag: {
    height: 60,
    width: 80,
    resizeMode: "cover",
  },
  textOuterContainer: {
    marginStart: 12,
    flex: 1,
    justifyContent: "space-between",
  },
  textInnerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPrimary: {
    color: Colors.BLACK,
    fontWeight: "bold",
    fontSize: 20,
  },
  textSecondary: {
    color: Colors.BLACK,
    fontSize: 12,
  },
});
