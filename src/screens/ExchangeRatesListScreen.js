import React, { useLayoutEffect } from "react";
import { Alert, FlatList, RefreshControl, SafeAreaView, StyleSheet } from "react-native";
import LastUpdatedDate from "../components/LastUpdatedDate";
import CurrencyTitle from "../components/CurrencyTitle";
import ItemExchangeRate from "../components/ItemExchangeRate";
import Colors from "../constants/Colors";
import axios from "axios";
import isRealValue from "../utils/Utils";
import { ActivityIndicator } from "react-native-paper";

const ExchangeRatesListScreen = ({ navigation }) => {

  const [updatedAtTimeStamp, setUpdatedAtTimeStamp] = React.useState("");
  const [exchangeRates, setExchangeRates] = React.useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getExchangeRates().then(() => setRefreshing(false));
  }, []);

  const itemPressedHandler = (currency, rate) => {
    navigation.navigate("ExchangeRateConverterScreen", {
      currency: currency,
      rate: rate,
    });
  };

  useLayoutEffect(() => {
    onRefresh();
  }, []);

  async function getExchangeRates() {
    try {
      const response = await axios.get("https://forex.cbm.gov.mm/api/latest");
      const data = response.data;
      setExchangeRates(data["rates"]);
      setUpdatedAtTimeStamp(data["timestamp"]);
    } catch (error) {
      Alert.alert(
        "Error!",
        "Something Went Wrong.",
        { text: "OK", style: "cancel" },
      );
    }
  }

  if (isRealValue(exchangeRates)) {
    return (
      <SafeAreaView style={styles.container}>
        <LastUpdatedDate updatedAtTimeStamp={updatedAtTimeStamp} />
        <CurrencyTitle />
        <FlatList
          contentContainerStyle={styles.flatList}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={Object.keys(exchangeRates)}
          renderItem={({ item }) =>
            <ItemExchangeRate
              currency={item}
              rate={exchangeRates[item]}
              onPressed={() => itemPressedHandler(item, exchangeRates[item])} />}
          keyExtractor={item => item}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <ActivityIndicator
        size={"large"}
        animating={true}
        color={Colors.YELLOW["800"]} />
    </SafeAreaView>
  );
};

export default ExchangeRatesListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    backgroundColor: Colors.GREY.A200,
  },
  textStyle: {
    fontSize: 32,
  },
});
