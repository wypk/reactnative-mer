import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet } from "react-native";
import ExchangeRatesListScreen from "./screens/ExchangeRatesListScreen";
import ExchangeRateConverterScreen from "./screens/ExchangeRateConverterScreen";
import Colors from "./constants/Colors";

const Stack = createNativeStackNavigator();

const App = ({ route }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExchangeRatesListScreen">
        <Stack.Screen
          name="ExchangeRatesListScreen"
          component={ExchangeRatesListScreen}
          options={{
            headerTitle: "Myanmar Exchange Rates",
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }} />
        <Stack.Screen
          name="ExchangeRateConverterScreen"
          component={ExchangeRateConverterScreen}
          options={{
            headerTitle: "Myanmar Exchange Rates",
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.YELLOW["800"],
  },
  headerTintColor: Colors.WHITE, headerTitleStyle: {
    fontWeight: "bold",
  },
  sectionContainer: {
    marginTop: 32, paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24, fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8, fontSize: 18, fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
