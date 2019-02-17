import {
  AppRegistry
} from "react-native";

import App from "./App.js";

AppRegistry.registerComponent("App", () => App);

// Mount onto web
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});