import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Counter } from "../components/Counter";
function Home() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
}
export default Home;
