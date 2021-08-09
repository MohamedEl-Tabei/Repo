import React from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/HomeScreen/index";
export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Home />
    </SafeAreaView>
  );
}
