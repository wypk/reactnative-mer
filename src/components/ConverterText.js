import * as React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";

const ConverterText = ({ currency, other, mmk, isOnPressedMMK }) => {

  const [isPressOnMMK, setIsPressOnMMK] = useState(false);

  const pressedHandler = pressed => {
    setIsPressOnMMK(pressed);
    isOnPressedMMK(pressed);
  };

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <View>
      <TouchableRipple
        onPress={() => pressedHandler(false)}
        rippleColor="rgba(0, 0, 0, .32)">
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>{currency}</Text>
          <Text
            style={isPressOnMMK ? styles.textPrimary : [styles.textPrimaryPressed, styles.pressed]}>{numberWithCommas(other)}</Text>
        </View>
      </TouchableRipple>

      <TouchableRipple
        onPress={() => pressedHandler(true)}
        rippleColor="rgba(0, 0, 0, .32)">
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary}>MMK</Text>
          <Text style={isPressOnMMK ? [styles.textPrimaryPressed, styles.pressed] : styles.textPrimary}>{numberWithCommas(mmk)}</Text>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default ConverterText;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 32,
    paddingBottom: 32,
    borderBottomColor: Colors.GREY["500"],
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textPrimary: {
    color: Colors.BLACK,
    fontWeight: "bold",
    fontSize: 20,
  },
  textPrimaryPressed: {
    color: Colors.YELLOW["800"],
    fontWeight: "bold",
    fontSize: 20,
  },
});

