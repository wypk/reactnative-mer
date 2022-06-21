import * as React from "react";
import { AppRegistry } from "react-native";
import { configureFonts, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import Colors from "./src/constants/Colors";

let customFonts = {
  "Product_Sans": require("./assets/fonts/Product_Sans_Bold.ttf"),
};

const _fontConfig = {
  default: {
    regular: {
      fontFamily: "Product_Sans", fontWeight: "normal",
    },
    medium: {
      fontFamily: "Product_Sans", fontWeight: "normal",
    },
    light: {
      fontFamily: "Product_Sans", fontWeight: "normal",
    },
    thin: {
      fontFamily: "Product_Sans", fontWeight: "normal",
    },
  },
};

const fontConfig = {
  ios: _fontConfig,
  android: _fontConfig,
};

const theme = {
  ...DefaultTheme, fonts: configureFonts(fontConfig), roundness: 2, version: 3, colors: {
    ...DefaultTheme.colors, primary: Colors.YELLOW["800"], secondary: Colors.YELLOW["800"], tertiary: "#a1b2c3",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("mer", () => Main);
