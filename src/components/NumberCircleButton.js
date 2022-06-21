import React from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import Colors from "../constants/Colors";

const NumberCircleButton = ({ number, onPress }) => {

  return (
    <TouchableRipple
      onPress={() => onPress()}
      rippleColor={Colors.YELLOW["900"]}
      style={styles.roundButton}>
      <Text style={styles.numberText}>{number}</Text>
    </TouchableRipple>
  );
};

export default NumberCircleButton;

const styles = StyleSheet.create({
  roundButton: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    backgroundColor: Colors.YELLOW["800"],
  },
  numberText: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: "bold",
  },
});
