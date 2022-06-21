import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import ConverterText from "../components/ConverterText";
import NumberCircleButton from "../components/NumberCircleButton";
import { useLayoutEffect, useState } from "react";

const MAX_CURRENCY_LENGTH = 15;

const ExchangeRateConverterScreen = ({ navigation, route }) => {

  const { currency, rate } = route.params;
  const [isPressOnMMK, setIsPressOnMMK] = useState(false);

  const [other, setOther] = useState("1");
  const [mmk, setMMK] = useState(rate);

  //Nav Button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableRipple
          style={styles.navigationButtonContainer}
          onPress={() => {
            setOther("1");
            setMMK(rate);
          }}
          rippleColor="rgba(0, 0, 0, .32)">
          <Image
            style={styles.navigationButton}
            source={require("../../assets/icon/reset.png")} />
        </TouchableRipple>
      ),
    });
  }, [navigation]);

  //Calculate Rates
  useLayoutEffect(() => {
    if (isPressOnMMK) {
      const numMMK = parseFloat(mmk.replace(/,/g, ""));
      const numRate = parseFloat(rate.replace(/,/g, ""));
      setOther((numMMK / numRate).toFixed(2));
    } else {
      const numOther = parseFloat(other.replace(/,/g, ""));
      const numRate = parseFloat(rate.replace(/,/g, ""));
      setMMK((numOther * numRate).toFixed(2));
    }
  });

  const handleButtonsClick = action => {

    if (action === "1" || action === "2" || action === "3" || action === "4" || action === "5" || action === "6" || action === "7" || action === "8" || action === "9") {
      numberClickHandler(action);
    } else if (action === "0") {
      zeroClickHandler(action);
    } else if (action === ".") {
      pointClickHandler();
    } else if (action === "C") {
      deleteClickHandler();
    }
  };

  const numberClickHandler = number => {
    if (isPressOnMMK) {
      if (mmk.toString().startsWith("0") && mmk.length === 1) {
        setMMK(mmk.substring(1).concat(number));
      } else if (mmk.length < MAX_CURRENCY_LENGTH) {
        setMMK(mmk.concat(number));
      }
    } else {
      if (other.toString().startsWith("0") && other.length === 1) {
        setOther(other.substring(1).concat(number));
      } else if (other.length < MAX_CURRENCY_LENGTH) {
        setOther(other.concat(number));
      }
    }
  };

  const zeroClickHandler = () => {
    if (isPressOnMMK) {
      if (mmk.toString().startsWith("0") && mmk.length === 1) {
        setMMK("0");
      } else if (mmk.length < MAX_CURRENCY_LENGTH) {
        setMMK(mmk.concat("0"));
      }
    } else {
      if (other.toString().startsWith("0") && other.length === 1) {
        setOther("0");
      } else if (other.length < MAX_CURRENCY_LENGTH) {
        setOther(other.concat("0"));
      }
    }
  };

  const pointClickHandler = () => {
    if (isPressOnMMK) {
      if (!mmk.includes(".")) {
        if (mmk.length === 0 || mmk.startsWith("0")) {
          setMMK("0.");
        } else if (mmk.length < MAX_CURRENCY_LENGTH) {
          setMMK(mmk.concat("."));
        }
      }
    } else {
      if (!other.includes(".")) {
        if (other.length === 0 || other.length === 0) {
          setOther("0.");
        } else if (other.length < MAX_CURRENCY_LENGTH) {
          setOther(other.concat("."));
        }
      }
    }
  };

  const deleteClickHandler = () => {
    if (isPressOnMMK) {
      if (mmk.length === 1) {
        setMMK("0");
      } else {
        setMMK(mmk.slice(0, -1));
      }
    } else {
      if (other.length === 1) {
        setOther("0");
      } else {
        setOther(other.slice(0, -1));
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ConverterText
          currency={currency}
          other={other}
          mmk={mmk}
          isOnPressedMMK={isOnPressedMMK => setIsPressOnMMK(isOnPressedMMK)} />
      </View>
      <View style={styles.numberButtonColumnContainer}>
        <View style={styles.numberButtonRowContainer}>
          <NumberCircleButton number={"1"} onPress={() => handleButtonsClick("1")} />
          <NumberCircleButton number={"2"} onPress={() => handleButtonsClick("2")} />
          <NumberCircleButton number={"3"} onPress={() => handleButtonsClick("3")} />
        </View>
        <View style={styles.numberButtonRowContainer}>
          <NumberCircleButton number={"4"} onPress={() => handleButtonsClick("4")} />
          <NumberCircleButton number={"5"} onPress={() => handleButtonsClick("5")} />
          <NumberCircleButton number={"6"} onPress={() => handleButtonsClick("6")} />
        </View>
        <View style={styles.numberButtonRowContainer}>
          <NumberCircleButton number={"7"} onPress={() => handleButtonsClick("7")} />
          <NumberCircleButton number={"8"} onPress={() => handleButtonsClick("8")} />
          <NumberCircleButton number={"9"} onPress={() => handleButtonsClick("9")} />
        </View>
        <View style={styles.numberButtonRowContainer}>
          <NumberCircleButton number={"."} onPress={() => handleButtonsClick(".")} />
          <NumberCircleButton number={"0"} onPress={() => handleButtonsClick("0")} />
          <NumberCircleButton number={"C"} onPress={() => handleButtonsClick("C")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExchangeRateConverterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberButtonColumnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  numberButtonRowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  navigationButtonContainer: {
    borderRadius: 100,
    padding: 8,
  },
  navigationButton: {
    height: 24,
    width: 24,
  },
});
