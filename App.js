import React from "react";
import { StatusBar } from "react-native";
import Home from './src/screens/Home/idex';

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Home />
    </>
  );
}