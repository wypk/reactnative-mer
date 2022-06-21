import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../constants/Colors";

const LastUpdatedDate = ({ updatedAtTimeStamp }) => {

  const convertUnixTimeStamp = timestamp => {
    if (timestamp.length > 0) {
      const localeDateString = new Date(timestamp * 1000).toLocaleDateString();
      const localeTimeString = new Date(timestamp * 1000).toLocaleTimeString();
      return localeDateString + "-" + localeTimeString;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text variant="bodySmall" style={styles.textLabel}>Last updated at:</Text>
      </View>
      <View>
        <Text variant="bodySmall" style={styles.textUpdatedTime}>{convertUnixTimeStamp(updatedAtTimeStamp)}</Text>
      </View>
    </View>
  );
};

export default LastUpdatedDate;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.GREY["300"],
    justifyContent: "space-between",
  },
  textLabel: {
    color: Colors.BLACK,
    fontWeight: "bold",
  },
  textUpdatedTime: {
    color: Colors.GREEN["700"],
    fontWeight: "bold",
  },
});
